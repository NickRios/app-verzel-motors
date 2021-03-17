import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  flex: 1;
  align-content: center;
  justify-content: flex-start;
  padding: 0 30px;
`;

export const Title = styled.View`
  margin-top: 20px
`;

export const TitleText = styled.Text`
  font-size: 35px;
  color: #000;
  font-family: 'Poppins-SemiBold';
  margin-top: -15px;
`;

export const StartButton = styled(RectButton)`
  width: 100%;
  height: 55px;
  background: #7BCCAC;
  border-radius: 15px;
  margin-top: 30px

  justify-content: center;
  align-items: center;

`;

export const StartButtonText = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: #FFFF;
`;
