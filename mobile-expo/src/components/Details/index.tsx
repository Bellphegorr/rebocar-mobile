import React from "react";
import { RequestButton } from "../RequestButton";

import { Container, TypeTitle, TypeDescription, RebocarImg } from "./styles";

interface DetailsProps {
  onPress: () => void;
}

export function Details({ onPress }: DetailsProps) {
  return (
    <Container>
      <TypeTitle>Popular</TypeTitle>
      <TypeDescription>Serviços rápidos e otimizados</TypeDescription>
      <RebocarImg source={require("../../../assets/rebocarx.jpg")} />
      <TypeTitle>RebocarX</TypeTitle>
      <TypeDescription>R$ 150,00</TypeDescription>
      <RequestButton title="Confirmar" onPress={onPress} />
    </Container>
  );
}
