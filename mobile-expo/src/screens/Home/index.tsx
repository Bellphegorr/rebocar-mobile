import React, { useState, useEffect, useRef, Fragment } from "react";
import { Modal, ActivityIndicator } from "react-native";
import { useTheme } from 'styled-components';
import { Marker } from "react-native-maps";
import Geocoder from "react-native-geocoding";

import {
  Container,
  Map,
  Footer,
  LoadMap,
  Distance,
  TextDistance,
  LocationBox,
  LocationText,
  Back,
  BackImage
} from "./styles";

import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';

import { RequestButton } from "../../components/RequestButton";
import { SearchDestination } from "../SearchDestination";
import { Details } from "../../components/Details";

interface Origin{
  description: string;
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const { API_KEY } = process.env;

Geocoder.init(API_KEY);

export function Home() {
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [origin, setOrigin] = useState<Origin>({} as Origin);
  // const [destination, setDestination] = useState({
  //   description: 'teste',
  //   latitude: 0,
  //   longitude: 0,
  //   latitudeDelta: 0,
  //   longitudeDelta: 0
  // });
  // const [destination, setDestination] = useState<Destination>({} as Destination);

  const [destination, setDestination] = useState(null);
  const mapEl = useRef(null);
  const [distance, setDistance] = useState(0);

  const theme = useTheme();

  function handleOpenSearchDestination(){
    setSearchModalOpen(true);
  }

  function handleCloseSearchDestination(){
    setSearchModalOpen(false);
  }

  function handleBackRequisition(){
    setDestination(null);
  }

  async function loadUserPosition(){
    const { status } = await Location.requestForegroundPermissionsAsync();;

      if(status === 'granted'){
        let location = await Location.getCurrentPositionAsync()
        const latitude = location.coords.latitude
        const longitude = location.coords.longitude
        const response = await Geocoder.from({ latitude, longitude})
        const address = response.results[0].formatted_address;
        const description = address.substring(3, address.indexOf(","))

        setOrigin({
          description,
          latitude,
          longitude,
          latitudeDelta: 0.00922,
          longitudeDelta: 0.00421,
        })
      }else{
        throw new Error("Localização não permitida");
      }
      
    setIsLoading(false);
  }

  useEffect(() => {
    loadUserPosition();
  }, [])

  return (
    <Container>
      {
        isLoading ?
        <LoadMap>
          <ActivityIndicator 
            color={theme.colors.primary}
            size="large"
          /> 
        </LoadMap> :
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
                    setDistance(result.distance)
                    mapEl.current.fitToCoordinates(result.coordinates, {        
                      edgePadding:{
                        top:50,
                        left:50,
                        bottom:350,
                        right:50
                      }
                    })
                  }}
                />
            
                <Marker 
                  coordinate={destination} 
                  anchor={{ x: 0, y:0}} 
                  image={require('../../../assets/marker.png')}
                >
                  <Distance>
                    {destination &&
                      <TextDistance>{distance}m</TextDistance>
                    }
                  </Distance>

                  <LocationBox>
                    <LocationText>{destination.description}</LocationText>
                  </LocationBox>
                </Marker>

                <Marker 
                  coordinate={origin} 
                  anchor={{ x: 0, y:0}}
                >
                  <LocationBox>
                    <LocationText>{origin.description}</LocationText>
                  </LocationBox>
                </Marker>
              </Fragment>
            )}

          </Map>
          
          {destination ? (
            <Fragment>
              <Back
                onPress={handleBackRequisition}
              >
                <BackImage 
                  source={require('../../../assets/back.png')}
                />
              </Back>

              <Details /> 
            </Fragment>
          ) : (
            <Footer>
              <RequestButton
                title="Solicitar gincho"
                onPress={handleOpenSearchDestination}
              />
            </Footer>
          )}

          <Modal visible={searchModalOpen}>
            <SearchDestination
              destination={destination}
              setDestination={setDestination}
              closeSearchModal={handleCloseSearchDestination}
            />
          </Modal>
        </>
      }
    </Container>
  );
}
