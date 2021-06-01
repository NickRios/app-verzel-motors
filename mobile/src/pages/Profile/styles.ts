import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-content: center;
  justify-content: flex-start;
  background: #F9F4F4;
`;

export const Background = styled.View`
  background: #FFF;
`;

export const Header = styled.View`
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  margin: 0 10px
`;

export const HeaderTitle = styled.Text`
  color: #000;
  font-family: "Poppins-SemiBold";
  font-size: 30px;
  margin: 0 15px
`;

export const UserAvatarButtonContainer = styled.View`
  position: absolute;
  height: 60px;
  width: 60px;
  bottom: -10px;
  right: 130px;
  background: #7BCCAC;
  border-radius: 50px;
`

export const UserAvatarButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-top: 15px;
`

export const UserAvatar = styled.View`
  align-items: center;
  margin-top: 30px;
`

export const NameTitle = styled.View`
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const NameTitleText = styled.Text`
  font-size: 20px;
  color: #000;
  font-family: 'Poppins-Medium';
`;


export const Text = styled.Text`
  font-size: 16px;
  color: #000;
  font-family: 'Poppins-Medium';
  padding: 10px 30px
`;

export const FormContainer = styled.View`
  margin: 0 50px
`

export const ButtonContainer = styled.View`
  margin: 0 50px 30px;
`

