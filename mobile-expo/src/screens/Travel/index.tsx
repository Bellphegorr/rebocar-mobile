import React, { Fragment, useRef, useState } from "react";

import { 
    Container,
    Map
} from "./styles";

import MapViewDirections from "react-native-maps-directions";
import { Marker } from "react-native-maps";

import { RequestAccepted } from "../../components/RequestAccepted";

const { API_KEY } = process.env;

export function Travel({ route, navigation }){
    const { origin, destination, driver } = route.params;
    const mapEl = useRef(null);
    const [isLoading, setIsLoading] = useState(true);

    function cancelRequest(){
        navigation.navigate("Home");
    }

    // EVENTO DE FINALIZAR A CORRIDA
    setTimeout(() => {
        navigation.navigate("Home");
    }, 10000);

    return(
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
                        destination={destination}
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
                        coordinate={destination}
                        anchor={{ x: 0, y: 0 }}
                        image={require("../../../assets/marker.png")}
                    >
                    </Marker>
                </Fragment>
            </Map>

            <RequestAccepted  onPress={cancelRequest} driver={driver}/>
        </Container>
    );
}
