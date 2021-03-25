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
  padding: 15px;
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


export const StyleContainer = styled.View`
  padding: 0 30px;
`

export const HospitalList = styled(RectButton)`
  width: 100%
  height: 70px
  background: #EAEAEA;
  border-radius: 12px;
  padding: 20px;
  align-items: center;
  margin: 0 0 20px
`;

export const HospitalListText = styled.Text`
  font-size: 16px;
  color: #000;
  font-family: 'Poppins-Medium';
`;

