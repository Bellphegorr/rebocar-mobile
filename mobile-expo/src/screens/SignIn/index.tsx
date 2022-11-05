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
import { SignInSocialButton } from "../../components/sign-in-social-button";
import GoogleSvg from "../../components/google-svg";
import { TouchableOpacity } from "react-native";
import * as Google from "expo-auth-session/providers/google";
//TODO: use a factory to inject make login
import { makeLoginUseCase } from "core";

const { EXPO_CLIENT_ID } = process.env;
const { CLIENT_SECRET } = process.env;
const { REDIRECT_URI } = process.env;

//todo: type navigation
export function SignIn({ navigation }: any) {
  //TODO: put this in core
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    expoClientId: EXPO_CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    redirectUri: REDIRECT_URI,
    scopes: ["profile", "email"],
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { authentication } = response;
      //TODO: improve to cache user info
      makeLoginUseCase()
        .Execute(authentication!.accessToken)
        .then((result) => {
          navigation.navigate("Home");
        })
        .catch((error) => {
          console.log(error);
        });
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
