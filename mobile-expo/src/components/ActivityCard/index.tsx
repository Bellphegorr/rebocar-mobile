import React from "react";

import { 
    Container,
    Address,
    DateTime,
    Price
} from "./styles";

export interface ActivityProps {
    address: string;
    dateTime: string;
    price: number;
}

interface Props {
    data: ActivityProps;
}

export function ActivityCard({
    data
}: Props){
    
    return(
        <Container>
            <Address>{data.address}</Address>
            <DateTime>{data.dateTime}</DateTime>
            <Price>R$ {data.price}</Price>
        </Container>
    )
}