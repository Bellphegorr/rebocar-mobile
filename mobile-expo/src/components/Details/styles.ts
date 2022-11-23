import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    background: ${({ theme }) => theme.colors.shape};
    
    height: 300px;
    width: 100%;
    position: absolute;
    bottom: 0;
    
    shadow-color: #000;
    shadow-offset: 0 0;
    shadow-opacity: 0.2;
    shadow-radius: 10;
    elevation: 3;

    border: 1px solid #ddd;
    
    align-items: center;

    padding: 20px;
`;

export const TypeTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(20)}px;
`;

export const TypeDescription = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    margin-bottom: 10px;
`;

export const RebocarImg = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 50%;
`;