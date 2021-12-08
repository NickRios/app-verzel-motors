import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 55px;
  background: #190f35;
  border-radius: 15px;
  margin-top: 15px;

  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 16px;
  color: #ffff;
`;
