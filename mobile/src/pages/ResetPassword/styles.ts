import styled from 'styled-components/native';
import { Platform } from 'react-native'

export const Container = styled.View`
  flex: 1;
  align-content: center;
  justify-content: flex-start;
  padding: 0 50px ${Platform.OS === 'android' ? 120 : 40}px;
`;

export const Title = styled.Text`
  font-size: 45px;
  color: #000;
  font-family: 'Poppins-SemiBold';
  margin: 30px 0 30px
`;


export const BackToSignIn = styled.TouchableOpacity`
  position:absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #E9E9E9;
  border-radius: 3px
  border-color: #E9E9E9;
  padding: 20px 0;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const BackToSignInText = styled.Text`
  color: #212020;
  font-size: 14px;
  font-family: 'Poppins-Medium';
  margin-left: 12px;
`;
