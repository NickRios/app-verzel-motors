import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #fff;
  font-family: 'Poppins-SemiBold';
  margin: 34px 0 54px;
`;

export const LoginButton = styled(RectButton)`
  height: 55px;
  background: #fff;
  border-radius: 15px;
  margin-top: 20px;

  justify-content: center;
  align-items: center;
`;

export const LoginButtonText = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: #000;
`;
