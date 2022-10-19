import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
export const Header = styled.View`
  width: 100%;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: flex-end;
  align-items: center;
  border-bottom-right-radius: 65px;
  border-bottom-left-radius: 65px;
`;
export const TitleWrapper = styled.View`
  align-items: center;
`;
export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(26)}px;
  text-align: center;
  margin-top: 30px;
`;
export const SignInTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(16)}px;
  text-align: center;
  margin-top: 60px;
  margin-bottom: 45px;
`;
export const Footer = styled.View`
  width: 100%;
  height: 30%;
  background-color: ${({ theme }) => theme.colors.secondary};
`;
export const FooterWrapper = styled.View`
  margin-top: 50px;
  padding: 0 32px;
  justify-content: space-between;
`;
