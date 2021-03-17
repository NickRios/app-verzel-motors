import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
  width: 100%;
  height: 55px;
  background: #7BCCAC;
  border-radius: 15px;
  margin-top: 25px;

  justify-content: center;
  align-items: center;


`;

export const ButtonText = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: #FFFF;
`;
