import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'; 

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.shape};
  height: 30%;
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
`;

export const DriverDetails = styled.View`
  width: 70%;

  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  margin-top: ${RFValue(20)}px;
`;

export const DriverPhoto = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;

  border-radius: 30px;
`;

export const TruckDetails = styled.View`
  align-items: center;
`;

export const TruckName = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const LicensePlate = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};

  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const DriverInfo = styled.View`
  width: 100%;

  align-items: center;
  flex-direction: row;
  justify-content: center;

  margin-top: ${RFValue(20)}px;
`;

export const DriverName = styled.Text`
  color: ${({ theme }) => theme.colors.primary};

  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const DriverRate = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};

  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-left: ${RFValue(15)}px;
`;

export const IconRate = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.text_dark};
  font-size: ${RFValue(12)}px;
`;

export const NumberDriverServices = styled.Text`
  color: ${({ theme }) => theme.colors.text};

  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-left: ${RFValue(15)}px;
`;

export const CancelRequest = styled.TouchableOpacity`
  align-items: center;

  margin-top: ${RFValue(20)}px;
`;

export const TitleCancelButton = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  color: red;
`;
