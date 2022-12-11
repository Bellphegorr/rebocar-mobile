import React from "react";

import { 
  Container,
  DriverDetails,
  DriverPhoto, 
  TruckDetails, 
  TruckName, 
  LicensePlate, 
  DriverInfo, 
  DriverName, 
  DriverRate, 
  NumberDriverServices, 
  CancelRequest,
  TitleCancelButton,
  IconRate
} from "./styles";

interface DriverProps {
  id: string,
  name: string,
  photo: string,
  rate: number,
  truckName: string,
  licensePlate: string,
  numberServices: number
}

interface RequestAcceptedProps {
  onPress: () => void;
  driver: DriverProps;
}

export function RequestAccepted({ onPress, driver }: RequestAcceptedProps) {

  return (
    <Container>
      <DriverDetails>
        <DriverPhoto source={{ uri: driver.photo }}/>
        <TruckDetails>
          <TruckName>{driver.truckName}</TruckName>
          <LicensePlate>{driver.licensePlate}</LicensePlate>
        </TruckDetails>
      </DriverDetails>

      <DriverInfo>
        <DriverName>{driver.name}</DriverName>
        <DriverRate>{driver.rate}</DriverRate>
        <IconRate name="star-rate"/>
        <NumberDriverServices>{driver.numberServices} serviços</NumberDriverServices>
      </DriverInfo>

      <CancelRequest
          onPress={onPress}
      >
          <TitleCancelButton>Cancelar</TitleCancelButton>
      </CancelRequest>
    </Container>
  );
}
