import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { FlatList } from 'react-native';
import styled from "styled-components/native";

import { DataListProps } from '.';
import MapView from "react-native-maps";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};

    align-items: center;

    margin: 10px;
`;

export const LoadMap = styled.View`
`;

export const Title = styled.Text`
    font-size: ${RFValue(24)}px;
`;

export const LastActivity = styled.View`
    width: 90%;
    height: ${RFPercentage(38)}px;

    background-color: ${({ theme }) => theme.colors.background};
    
    border-width: 1px;
    border-radius: 6px;
    border-color: ${({ theme }) => theme.colors.primary};

    padding: 10px;
    margin: 10px;
`;

export const Map = styled(MapView)`
    width: 100%;
    height: 155px;

    border-radius: 6px;
    
    margin-bottom: 5px;
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
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
`;

export const ActivitiesContainer = styled.View`
    width: 90%;

    padding: 10px;
    margin-top: 10px;
`;

export const ActivityList = styled(
    FlatList as new () => FlatList<DataListProps>)
    .attrs({
        showsVerticalScrollIndicator: false,
        contentContainerStyle: {
            paddingBottom: 290
        }
    })`
`;

export const Separator = styled.Text`
    width: 100%;
    height: 1px;

    align-items: center;

    background-color: ${({ theme }) => theme.colors.primary};
`;
