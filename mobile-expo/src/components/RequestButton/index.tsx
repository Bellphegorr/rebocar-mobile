import React from "react";
import { TouchableOpacity } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Title } from "./styles";

interface Props extends RectButtonProps {
  title: string;
  onPress: () => void;
}

export function RequestButton({ title, onPress, ...rest }: Props) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Container {...rest}>
        <Title>{title}</Title>
      </Container>
    </TouchableOpacity>
  );
}
