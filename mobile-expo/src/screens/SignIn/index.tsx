import React, { useEffect } from "react";
import { Alert } from 'react-native'
import {
  Container,
  Header,
  TitleWrapper,
  LogoRebocar,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";

import { SignInSocialButton } from "../../components/sign-in-social-button";
import GoogleSvg from "../../components/google-svg";
import { TouchableOpacity } from "react-native";

import { useAuth } from '../../hooks/auth';

export function SignIn() {
  const { user, signInWithGoogle } = useAuth();

  async function handleSignInWithGoogle() {
      try {
        console.log(user);
          return await signInWithGoogle();
      } catch (error) {
          console.log(error);
          Alert.alert('Não foi possível concectar a conta Google');
      }
  }

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <LogoRebocar 
            source={require('../../../assets/logo-reboque.png')}
          />
          <Title>
            Serviço de reboque {"\n"}a um toque {"\n"}
            de distância
          </Title>
        </TitleWrapper>
        <SignInTitle>
          Faça seu login com {"\n"}
          uma das contas abaixo
        </SignInTitle>
      </Header>
      <Footer>
        <FooterWrapper>
          <TouchableOpacity onPress={handleSignInWithGoogle}>
            <SignInSocialButton title="Entrar com Google" svg={GoogleSvg} />
          </TouchableOpacity>
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
