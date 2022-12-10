import styled, { css } from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import MapView from "react-native-maps";
import { Platform } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const Distance = styled.View`
  elevation: 1;

  ${Platform.select({
    ios: css`
      margin-top: 15px;
    `,
    android: css`
      margin-top: 10px;
      margin-left: 10px;
    `
  })}
`;

export const TextDistance = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold}; 

    color: ${({ theme }) => theme.colors.text_dark};
`;


export const Footer = styled.View`
  width: 100%;

  align-items: center;

  margin-top: ${RFPercentage(-15)}px;
`;

export const LoadMap = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;


export const LocationBox = styled.View`
  background: ${({ theme }) => theme.colors.shape};
  shadow-color: #000;
  shadow-offset: 0 0;
  shadow-opacity: 0.1;
  elevation: 1;
  border: 1px solid #ddd;
  border-radius: 3px;
  flex-direction: row;
  
  ${Platform.select({
    ios: css`
      margin-top: 10px;
    `,
    android: css`
      margin-top: 5px;
      margin-left: 5px;
    `
  })}
`;

export const LocationText = styled.Text`
  margin: 8px 10px;
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Back = styled.TouchableOpacity`
  position: absolute;
  top: ${Platform.select({ ios: 40, android: 40})};
  left: 20px;
`;

export const BackImage = styled.Image`
`;