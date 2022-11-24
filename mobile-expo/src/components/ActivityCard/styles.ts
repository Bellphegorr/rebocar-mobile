import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const Address = styled.Text`
    margin-bottom: 5px;

    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(20)}px;
`;

export const DateTime = styled.Text`
    margin-bottom: 5px;

    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;

export const Price = styled.Text`
    margin-bottom: 5px;

    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
`;
