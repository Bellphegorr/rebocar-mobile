import React, { useEffect } from "react";
import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";
import { SignInSocialButton } from "../../components/SocialButton/";
import GoogleSvg from "../../components/SocialButton/google-svg";
import { TouchableOpacity } from "react-native";
import * as Google from "expo-auth-session/providers/google";
import * as AuthSession from "expo-auth-session";
import { makeLoginUseCase } from "core";

export function SignIn() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    expoClientId:
      "519447374203-qgf9l5d3f0l4bq0dahd7mcofkkboi897.apps.googleusercontent.com",
    clientSecret: "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",
    redirectUri: "https://auth.expo.io/@bellphegorr/mobile-expo",
    scopes: ["profile", "email"],
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      AuthSession.fetchUserInfoAsync(
        {
          accessToken: authentication!.accessToken,
        },
        Google.discovery
      ).then((user) => {
        console.log(user);
      });
      console.log(authentication);
      debugger;
    }
  }, [response]);

  return (
    <Container>
      <Header>
        <TitleWrapper>
          <GoogleSvg></GoogleSvg>
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
          <TouchableOpacity onPress={() => promptAsync()}>
            <SignInSocialButton title="Entrar com Google" svg={GoogleSvg} />
          </TouchableOpacity>
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
