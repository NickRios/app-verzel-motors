import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";


export const Container = styled.View`
  padding: 0 24px;

  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  width: 250px;
  font-size: 32px;
  color: #000;
  font-family: "RobotoSlab-Medium";
  margin-top: 18px;
  text-align: center;
`;


export const Description = styled.Text`
  width: 260px
  font-family: "RobotoSlab-Medium";
  font-size: 16px
  color: #AEAEAE;
  margin-top: 20px;
`;

export const OkButton = styled(RectButton)`
  background: #7BCCAC;
  border-radius: 15px;
  padding: 15px 50px;
  margin-top: 40px;

  align-items: center;
  justify-content: center;
`;

export const OkButtonText = styled.Text`
  font-family: "Poppins-SemiBold";
  color: #FFFF;
  font-size: 18px;
`;
