import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useTheme } from "styled-components";
import { PROVIDER_GOOGLE } from "react-native-maps";
import {
  Container,
  Title,
  LoadMap,
  LastActivity,
  Map,
  Address,
  DateTime,
  Price,
  ActivitiesContainer,
  ActivityList,
  Separator,
} from "./styles";
import { ActivityCard, ActivityProps } from "../../components/ActivityCard";

export interface DataListProps extends ActivityProps {
  id: string;
}

interface LastActivityLocation {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

export function Activities() {
  const [activities, setActivities] = useState<DataListProps[]>([]);
  const [lastActivityLocation, setLastActivityLocation] =
    useState<LastActivityLocation>({} as LastActivityLocation);
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();
  const data = [
    {
      id: "1",
      address: "Mont Serrat Studios",
      dateTime: "Sep 7 - 6:41 PM",
      price: 88.27,
    },
    {
      id: "2",
      address: "BR 040 - km 30",
      dateTime: "Dec 22 - 2:35 AM",
      price: 250.0,
    },
    {
      id: "3",
      address: "Libert Mall",
      dateTime: "Jan 8 - 3:47 AM",
      price: 175.26,
    },
    {
      id: "4",
      address: "Jardim Mangueiral QC 15",
      dateTime: "Nov 20 - 1:47 AM",
      price: 45.7,
    },
  ];
  const lastLocation = {
    latitude: -15.895695,
    longitude: -47.796536,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421,
  };

  useEffect(() => {
    setLastActivityLocation(lastLocation);
    setActivities(data);
    setIsLoading(false);
  }, []);

  return (
    <Container>
      <Title>Atividades</Title>

      <LastActivity>
        {isLoading ? (
          <LoadMap>
            <ActivityIndicator color={theme.colors.primary} size="large" />
          </LoadMap>
        ) : (
          <>
            <Map
              initialRegion={lastActivityLocation}
              provider={PROVIDER_GOOGLE}
            ></Map>
          </>
        )}
        <Address>Q.15 Rua A, 15</Address>
        <DateTime>oct 16 - 6:02PM</DateTime>
        <Price>R$ 132.76</Price>
      </LastActivity>

      <ActivitiesContainer>
        <ActivityList
          data={activities}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ActivityCard data={item} />}
          ItemSeparatorComponent={() => <Separator />}
        ></ActivityList>
      </ActivitiesContainer>
    </Container>
  );
}
