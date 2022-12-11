import MapView from "react-native-maps";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Map = styled(MapView)`
    width: 100%;
    height: 100%;
`;
