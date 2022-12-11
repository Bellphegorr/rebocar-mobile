import React, { useState, useEffect, useRef, Fragment } from "react";
import { Modal, ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
import { Marker } from "react-native-maps";
import Geocoder from "react-native-geocoding";
import {
  Container,
  Map,
  Footer,
  LoadMap,
  Distance,
  TextDistance,
  LocationBoxDestination,
  LocationBoxOrigin,
  LocationText,
  Back,
  BackImage,
} from "./styles";
import * as Location from "expo-location";
import MapViewDirections from "react-native-maps-directions";
import { RequestButton } from "../../components/RequestButton";
import { SearchDestination } from "../SearchDestination";
import { Details } from "../../components/Details";
import { AnimationRequest } from "../../components/AnimationRequest";
import { useSocket } from "../../hooks/socket";

interface Origin {
  description: string;
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const { API_KEY } = process.env;
Geocoder.init(API_KEY!);

export function Home({ navigation }) {
  const { socket } = useSocket();
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [origin, setOrigin] = useState<Origin>({} as Origin);
  const [destination, setDestination] = useState(null);
  const mapEl = useRef(null);
  const [distance, setDistance] = useState(0);
  const theme = useTheme();
  const [isRequest, setIsRequest] = useState(false);
  const driverLocation = {
    latitude: -15.885358,
    longitude: -47.820909,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
  };

  function handleOpenSearchDestination() {
    setSearchModalOpen(true);
  }

  function handleCloseSearchDestination() {
    setSearchModalOpen(false);
  }

  function handleBackRequisition() {
    setDestination(null);
    setIsRequest(false);
  }

  async function loadUserPosition() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      let location = await Location.getCurrentPositionAsync();
      const latitude = location.coords.latitude;
      const longitude = location.coords.longitude;
      const response = await Geocoder.from({ latitude, longitude });
      const address = response.results[0].formatted_address;
      const description = address.substring(3, address.indexOf(","));
      setOrigin({
        description,
        latitude,
        longitude,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
      });
    } else {
      throw new Error("Localização não permitida");
    }
    setIsLoading(false);
  }

  function requestRide() {
    setIsRequest(true);
    socket.emit("request-race", {
      userId: "123",
      from: [origin.latitude, origin.longitude],
      to: [destination.latitude, destination.longitude],
    });
    socket.on("request-accepted", (data) => {
      setIsRequest(false);
      setDestination(null);
      navigation.navigate("Driver", {
        origin: origin,
        destination: destination,
        driverLocation: driverLocation,
        race: data,
      });
    });
  }

  function cancelRequest() {
    setIsRequest(false);
  }

  useEffect(() => {
    loadUserPosition();
  }, []);

  socket.emit("join-costumer", "123");

  return (
    <Container>
      {isLoading ? (
        <LoadMap>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadMap>
      ) : (
        <>
          <Map
            initialRegion={origin}
            showsUserLocation={true}
            zoomEnabled={true}
            loadingEnabled={true}
            ref={mapEl}
          >
            {destination && (
              <Fragment>
                <MapViewDirections
                  origin={origin}
                  destination={destination}
                  apikey={API_KEY}
                  strokeWidth={3}
                  onReady={(result) => {
                    setDistance(result.distance);
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
                  coordinate={destination}
                  anchor={{ x: 0, y: 0 }}
                  image={require("../../../assets/marker.png")}
                >
                  <Distance>
                    {destination && <TextDistance>{distance}m</TextDistance>}
                  </Distance>
                  <LocationBoxDestination>
                    <LocationText>{destination.description}</LocationText>
                  </LocationBoxDestination>
                </Marker>
                <Marker coordinate={origin} anchor={{ x: 0, y: 0 }}>
                  <LocationBoxOrigin>
                    <LocationText>{origin.description}</LocationText>
                  </LocationBoxOrigin>
                </Marker>
              </Fragment>
            )}
          </Map>
          {destination ? (
            <>
              <Back onPress={handleBackRequisition}>
                <BackImage source={require("../../../assets/back.png")} />
              </Back>

              {isRequest ? (
                <AnimationRequest onPress={cancelRequest} />
              ) : (
                <Details onPress={requestRide} />
              )}
            </>
          ) : (
            <Footer>
              <RequestButton
                title="Solicitar guincho"
                onPress={handleOpenSearchDestination}
              />
            </Footer>
          )}
          <Modal visible={searchModalOpen}>
            <SearchDestination
              destination={destination!}
              setDestination={setDestination!}
              closeSearchModal={handleCloseSearchDestination}
            />
          </Modal>
        </>
      )}
    </Container>
  );
}
