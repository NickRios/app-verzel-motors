import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-content: center;
  justify-content: flex-start;
  background: #fff;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  background: #07203f;
`;

export const Title = styled.View`
  margin: 0 0 20px;
`;

export const TitleText = styled.Text`
  font-size: 25px;
  color: #fff;
  font-family: 'Poppins-SemiBold';
`;

export const BackButton = styled.TouchableOpacity`
  margin: 15px 20px;
`;

export const BodyHeaderText = styled.Text`
  font-size: 14px;
  color: #737272;
  font-family: 'Poppins-Medium';
  margin: 20px 30px;
`;

export const FormContainer = styled.View`
  margin: 0px 15px;
`;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 49%;
`;

export const BodyText = styled.Text`
  font-size: 14px;
  color: #737272;
  font-family: 'Poppins-Medium';
  margin: 20px 0 10px 20px;
`;

export const ActionButtonContent = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ButtonEditContainer = styled(RectButton)`
  width: 40%;
  height: 45px;
  background: #190f35;
  border-radius: 15px;
  margin-bottom: 15px;

  justify-content: center;
  align-items: center;
`;

export const ButtonExcludeContainer = styled(RectButton)`
  width: 40%;
  height: 45px;
  background: #ff0000;
  border-radius: 15px;
  margin-bottom: 15px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 13px;
  color: #ffff;
`;
