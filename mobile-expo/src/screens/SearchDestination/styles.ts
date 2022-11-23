import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export const Container = styled.View`
    flex: 1;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const Field = styled.View`
    flex: 1;

    width: 100%;

    margin-top: 40px;

    align-items: center;
`;

export const SearchResult = styled.View`
    width: 85%;
    height: ${RFValue(50)}px;

    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;

    margin-bottom: 5px;
`;

export const Footer = styled.View`
    width: 100%;

    padding: 24px;
`;