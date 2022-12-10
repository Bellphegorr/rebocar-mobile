import React from "react";
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Title,
  UserInfo,
  User,
  UserName,
  UserPicture,
  UserEmail,
  Settings,
  BoxButton,
  HelpIcon,
  WalletIcon,
  Separator,
  UserActions,
  Message,
  MessageIcon,
  MessageTitle,
  RebocarPartner,
  PartnerIcon,
  PartnerTitle,
  LogOut,
  LogOutIcon,
  LogOutTitle
} from "./styles";

export function Account(){
    const { signOut, user } = useAuth();

    return(
        <Container>
            <UserInfo>
                <User>
                    <UserName>{user.name},</UserName>
                    <UserEmail>{user.email}</UserEmail>
                </User>
                <UserPicture source={{ uri: user.photo }}/>
            </UserInfo>

            <Settings>
                <BoxButton
                    onPress={() => {}}
                >
                    <HelpIcon name="help-with-circle"/>
                    <Title>Ajuda</Title>
                </BoxButton>
                <BoxButton
                    onPress={() => {}}
                >
                    <WalletIcon name="wallet"/>
                    <Title>Pagamento</Title>
                </BoxButton>
            </Settings>
            
            <Separator />

            <UserActions>
                <Message
                    onPress={() => {}}
                >
                    <MessageIcon name="message-square"/>
                    <MessageTitle>Mensagens</MessageTitle>
                </Message>
                <RebocarPartner
                    onPress={() => {}}
                >
                    <PartnerIcon name="tools"/>
                    <PartnerTitle>Seja um parceiro</PartnerTitle>
                </RebocarPartner>
                <LogOut
                    onPress={signOut}
                >
                    <LogOutIcon name="logout"/>
                    <LogOutTitle>Sair da sua conta</LogOutTitle>
                </LogOut>
            </UserActions>
        </Container>
    )
}