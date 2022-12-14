import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
    width: 100%;

    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;

    align-items: center;
    
    padding: 13px 60px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(18)}px;

    color: ${({ theme }) => theme.colors.shape};
`;