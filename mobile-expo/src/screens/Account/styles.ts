import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Entypo, FontAwesome5, Feather, Octicons, MaterialCommunityIcons } from "@expo/vector-icons";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;

    background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.text_dark};

    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
`;

export const UserInfo = styled.View`
    width: 100%;
    height: ${RFPercentage(20)}px;

    align-items: center;
    flex-direction: row;
`;

export const User = styled.View`
    margin-left: ${RFValue(30)}px;
    padding: 10px;
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.text_dark};

    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const UserPicture = styled.Image`
    width: ${RFValue(70)}px;
    height: ${RFValue(70)}px;

    border-radius: 40px;

    margin-left: ${RFValue(20)}px;
`;

export const UserEmail = styled.Text`
    color: ${({ theme }) => theme.colors.text_dark};

    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Settings = styled.View`
    width: 85%;
    height: ${RFPercentage(20)}px;

    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    margin-left: ${RFValue(30)}px;
`;
// testar styled(rectbutton)
export const BoxButton = styled.TouchableOpacity`
    width: ${RFValue(121)}px;
    height: ${RFValue(96)}px;

    background-color: #D9D9D9;

    border-radius: 16px;

    align-items: center;
    justify-content: center;
`;

export const HelpIcon = styled(Entypo)`
    font-size: ${RFValue(45)}px;

    color: ${({ theme }) => theme.colors.text_dark};
`;

export const WalletIcon = styled(FontAwesome5)`
    font-size: ${RFValue(45)}px;

    color: ${({ theme }) => theme.colors.text_dark};
`;

export const Separator = styled.Text`
    width: 100%;
    height: ${RFPercentage(3)}px;

    background-color: #D9D9D9;
`;

export const UserActions = styled.View`
    width: 100%;

    align-items: center;
`;

export const Message = styled.TouchableOpacity`
    width: 80%;
    height: ${RFPercentage(10)}px;

    flex-direction: row;

    align-items: center;
`;

export const MessageIcon = styled(Feather)`
    font-size: ${RFValue(24)}px;

    color: ${({ theme }) => theme.colors.text_dark};
`;

export const MessageTitle = styled.Text`
    color: ${({ theme }) => theme.colors.text_dark};

    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.medium};

    margin-left: ${RFValue(16)}px;
`;

export const RebocarPartner = styled.TouchableOpacity`
    width: 80%;
    height: ${RFPercentage(10)}px;

    flex-direction: row;

    align-items: center;
`;

export const PartnerIcon = styled(Octicons)`
    font-size: ${RFValue(24)}px;

    color: ${({ theme }) => theme.colors.text_dark};
`;

export const PartnerTitle = styled.Text`
    color: ${({ theme }) => theme.colors.text_dark};

    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.medium};

    margin-left: ${RFValue(16)}px;
`;

export const LogOut = styled.TouchableOpacity`
    width: 80%;
    height: ${RFPercentage(10)}px;

    flex-direction: row;

    align-items: center;
`;

export const LogOutIcon = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(24)}px;

    color: ${({ theme }) => theme.colors.text_dark};
`;

export const LogOutTitle = styled.Text`
    color: ${({ theme }) => theme.colors.text_dark};

    font-size: ${RFValue(16)}px;
    font-family: ${({ theme }) => theme.fonts.medium};

    margin-left: ${RFValue(16)}px;
`;
