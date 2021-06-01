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
  margin-left: 16px;
`;

export const SubTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 25px
`;

export const SubTitleText = styled.Text`
  width: 211px;
  font-size: 24px;
  color: #000;
  font-family: 'Poppins-Medium';
`;

export const TextContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const Text = styled.Text`
  font-size: 16px;
  color: #000;
  font-family: 'Poppins-Medium';
  padding: 10px 30px
`;

export const AddButton = styled.TouchableOpacity`
`
export const AddButtonText = styled.Text`
  font-size: 14px;
  color: #53C7EC;
  font-family: 'RobotoSlab-Regular';
  padding: 13px 60px
`

export const FormContainer = styled.View`
  margin: 0 50px
`

export const ButtonContainer = styled.View`
  margin: 0 50px 30px;
`

