import React, { Fragment, useRef } from "react";
import { Container, Map } from "./styles";
import MapViewDirections from "react-native-maps-directions";
import { Marker } from "react-native-maps";
import { RequestAccepted } from "../../components/RequestAccepted";
import { useSocket } from "../../hooks/socket";

const { API_KEY } = process.env;

export function Driver({ route, navigation }) {
  const { origin, driverLocation, destination, race } = route.params;
  const mapEl = useRef(null);
  const { socket } = useSocket();
  const driver = {
    id: "1",
    name: "Valdecir",
    photo: "https://avatars.githubusercontent.com/u/69992994?v=4",
    rate: 4.9,
    truckName: "CARGO 1119 2014/2014",
    licensePlate: "BRA2E19",
    numberServices: 100,
  };

  function cancelRequest() {
    navigation.goBack();
  }

  console.log(JSON.stringify(race));

  // // EVENTO DE INICIAR CORRIDA
  // setTimeout(() => {
  //   navigation.navigate("Travel", {
  //     origin: origin,
  //     destination: destination,
  //     driver: driver,
  //   });
  // }, 10000);

  return (
    <Container>
      <Map
        initialRegion={origin}
        showsUserLocation={true}
        zoomEnabled={true}
        loadingEnabled={true}
        ref={mapEl}
      >
        <Fragment>
          <MapViewDirections
            origin={origin}
            destination={driverLocation}
            apikey={API_KEY}
            strokeWidth={3}
            onReady={(result) => {
              mapEl.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  top: 50,
                  left: 50,
                  bottom: 350,
                  right: 50,
                },
              });
            }}
          />
          <Marker
            coordinate={driverLocation}
            anchor={{ x: 0, y: 0 }}
            image={require("../../../assets/marker.png")}
          ></Marker>
        </Fragment>
      </Map>
      <RequestAccepted onPress={cancelRequest} driver={driver} />
    </Container>
  );
}
