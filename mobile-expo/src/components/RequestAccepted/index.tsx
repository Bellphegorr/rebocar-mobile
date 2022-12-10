import React from "react";
import { RequestButton } from "../RequestButton";

import { Container, TypeTitle, TypeDescription, RebocarImg, RebocarType, RaceValue } from "./styles";

interface DetailsProps {
  onPress: () => void;
}

export function RequestAccepted({ onPress }: DetailsProps) {

  return (
    <Container>
      <TypeTitle>Popular</TypeTitle>
      <TypeDescription>Serviços rápidos e otimizados</TypeDescription>
      <RebocarImg source={require("../../../assets/rebocarx.jpg")} />
      <RebocarType>RebocarX</RebocarType>
      <RaceValue>R$ 150,00</RaceValue>
      <RequestButton title="Confirmar" onPress={onPress} />
    </Container>
  );
}
