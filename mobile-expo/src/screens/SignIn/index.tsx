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

export function SignIn() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    expoClientId:
      "519447374203-qgf9l5d3f0l4bq0dahd7mcofkkboi897.apps.googleusercontent.com",
    clientSecret: "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",
    scopes: ["profile", "email"],
  });

  useEffect(() => {
    if (response?.type === "success") {
      const { id_token } = response.params;
      console.log(id_token);
    }
    debugger;
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
