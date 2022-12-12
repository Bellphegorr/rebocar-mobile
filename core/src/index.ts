import "module-alias/register";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { RequestRace } from "@/application/request-race";
import { CustomLocation } from "@/domain/custom-location";
import { UserRepository } from "@/infrastructure/user-repository";
import { Broker } from "@/infrastructure/broker";
import { JoinUser } from "@/application/join-user";
import { RaceRepository } from "@/infrastructure/race-repository";
import { AcceptRace } from "./application/accept-race";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});
const userRepository = new UserRepository();
const raceRepository = new RaceRepository();
app.use(cors());

function create(socket: Socket) {
  const broker = new Broker(socket);
  const joinUser = new JoinUser(broker);
  const requestRace = new RequestRace(userRepository, broker, raceRepository);
  const acceptRace = new AcceptRace(broker, raceRepository);
  return {
    requestRace,
    joinUser,
    acceptRace,
  };
}

io.on("connection", (socket) => {
  const useCases = create(socket);

  socket.on("join-costumer", (userId: string) => {
    useCases.joinUser.execute(userId);
    console.log("join-costumer", userId);
  });

  socket.on("join-driver", (userId: string) => {
    //TODO: implement in the future
    socket.join("drivers");
    useCases.joinUser.execute(userId);
    console.log("join-driver", userId);
  });

  socket.on(
    "request-race",
    async (request: { userId: string; from: number[]; to: number[] }) => {
      try {
        //TODO: remove this hard coded values and get from the client, using a DTO
        const from = new CustomLocation(request.from[0], request.from[1]);
        const to = new CustomLocation(request.to[0], request.to[1]);
        await useCases.requestRace.execute(request.userId, from, to);
      } catch (error) {
        //TODO: when not found a driver, send a message to the client
        console.log("erro aqui: ", error);
      }
    }
  );

  socket.on("accept-race", (request: { raceId: string; driverId: string }) => {
    useCases.acceptRace.execute(request.raceId, request.driverId);
  });

  socket.on(
    "get-location",
    (request: { userId: string; userIdToFind: string }) => {
      console.log("get-location", request);
      socket
        .to(request.userIdToFind)
        .emit("get-location", { userId: request.userId });
    }
  );

  socket.on(
    "send-location",
    (request: { userId: string; latitude: number; longitude: number }) => {
      console.log("send-location", request);
      socket.to(request.userId).emit("receive-location", {
        latitude: request.latitude,
        longitude: request.longitude,
      });
    }
  );

  socket.on("start-race", (request: { userId: string; raceId: string }) => {
    socket.to(request.userId).emit("start-race", { raceId: request.raceId });
    console.log("start-race", request);
  });
});

httpServer.listen(port);
//create a express app example

// import express from "express";
// import dotenv from "dotenv";

// dotenv.config();
// const app = express();
// const port = process.env.PORT || 8080;

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log("Example app listening on port 3000!");
// });
