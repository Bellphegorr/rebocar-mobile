import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import MapView from "react-native-maps";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const Footer = styled.View`
  width: 100%;

  align-items: center;

  margin-top: ${RFPercentage(-12)}px;
  `;