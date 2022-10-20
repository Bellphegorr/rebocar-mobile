import React from "react";
import {
  Container,
  Header,
  TitleWrapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";
import GoogleSvg from "../components/google-svg";

export function Home() {
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <GoogleSvg></GoogleSvg>
          <Title>
            Página inicial {"\n"}
            {"\n"}
          </Title>
        </TitleWrapper>
        <SignInTitle>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla iusto{" "}
          {"\n"}
          recusandae corrupti nisi asperiores earum excepturi placeat magni quo{" "}
          {"\n"}
          saepe omnis inventore iste explicabo vel, eveniet quam cupiditate amet{" "}
          {"\n"}
        </SignInTitle>
      </Header>
      <Footer>
        <FooterWrapper></FooterWrapper>
      </Footer>
    </Container>
  );
}
