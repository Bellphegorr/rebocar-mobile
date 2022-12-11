import "module-alias/register";
import express from "express";
import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { RequestRace } from "@/application/request-race";
import { CustomLocation } from "@/domain/custom-location";
import { UserRepository } from "@/infrastructure/user-repository";
import { Broker } from "@/infrastructure/broker";
import { JoinUser } from "@/application/join-user";
import { RaceRepository } from "@/infrastructure/race-repository";
import { AcceptRace } from "./application/accept-race";
import { FindUserLocation } from "./application/find-driver-location";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  transports: ["websocket", "polling"],

  cors: {
    origin: "*",
  },
});
const userRepository = new UserRepository();
const raceRepository = new RaceRepository();

function create(socket: Socket) {
  const broker = new Broker(socket);
  const joinUser = new JoinUser(broker);
  const requestRace = new RequestRace(userRepository, broker, raceRepository);
  const acceptRace = new AcceptRace(broker, raceRepository);
  const findUserLocation = new FindUserLocation(broker);
  return { requestRace, joinUser, acceptRace, findUserLocation };
}

io.on("connection", (socket) => {
  const useCases = create(socket);

  socket.on("join-costumer", (userId: string) => {
    useCases.joinUser.execute(userId);
  });

  socket.on("join-driver", (userId: string) => {
    //TODO: implement in the future
    socket.join("drivers");
    useCases.joinUser.execute(userId);
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
});

httpServer.listen(3000);
