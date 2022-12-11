import React, { useState } from "react";
import { FlatList } from "react-native-gesture-handler";

import { Button } from "../../components/Button";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

import { Container, Field, SearchResult, Footer } from "./styles";

import { useTheme } from "styled-components";
import { TouchableOpacity } from "react-native";

interface Destination {
  description: string;
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface Props {
  destination: Destination;
  setDestination: (destination: Destination) => void;
  closeSearchModal: () => void;
}

const { API_KEY } = process.env;

export function SearchDestination({
  destination,
  setDestination,
  closeSearchModal,
}: Props) {
  const theme = useTheme();
  return (
    <Container>
      <Field>
        <GooglePlacesAutocomplete
          placeholder="Para onde?"
          onPress={(data, details = null) => {
            setDestination({
              description: data.description,
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.00922,
              longitudeDelta: 0.00421,
            });
            closeSearchModal();
          }}
          query={{
            key: API_KEY,
            language: "pt_BR",
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          keepResultsAfterBlur={true}
          textInputProps={{ placeholderTextColor: "#333" }}
          styles={{
            container: {
              width: 340,
            },
            textInput: {
              height: 60,
              fontSize: 17,
            },
            row: {
              marginTop: 2,
              height: 50,
            },
            separator: {
              height: 0,
            },
          }}
        />
      </Field>
      <Footer>
        <TouchableOpacity onPress={closeSearchModal}>
          <Button title="Voltar" onPress={closeSearchModal} />
        </TouchableOpacity>
      </Footer>
    </Container>
  );
}
