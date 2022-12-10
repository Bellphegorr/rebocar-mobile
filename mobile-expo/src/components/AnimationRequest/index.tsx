import React, { useEffect, useRef } from "react";

import { Container, Title, Description, CancelRequest, TitleCancelButton } from "./styles";

import { useTheme } from "styled-components";
import LottieView from 'lottie-react-native';

interface AnimationRequestProps {
    onPress: () => void;
  }

export function AnimationRequest({ onPress }: AnimationRequestProps) {
    const animation = useRef(null);
    const theme = useTheme();

    useEffect(() => {
        if(animation.current) {
            setTimeout(() => {
                animation.current.reset();
                animation.current.play();
            }, 100)
        }
    }, [animation.current])

    return (
        <Container>
            <Title>Procurando guincho...</Title>
            <Description>Por favor aguarde</Description>
            <LottieView
                loop={true}
                ref={animation}
                style={{
                    width: 120,
                    height: 120,
                    backgroundColor: theme.colors.shape,
                }}
                source={require('../../../assets/truck.json')}
            />
            <CancelRequest
                onPress={onPress}
            >
                <TitleCancelButton>Cancelar</TitleCancelButton>
            </CancelRequest>
        </Container>
    );
}
