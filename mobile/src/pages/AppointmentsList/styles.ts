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
  padding: 20px 30px
`;

export const SubTitleText = styled.Text`
  width: 252px;
  font-size: 24px;
  color: #000;
  font-family: 'Poppins-Medium';
`;

export const StyleContainer = styled.View`
  padding: 0 30px;
`

export const AppointmentsContainer = styled.View`
  width: 100%
  height: 110px
  background: #EAEAEA;
  border-radius: 12px;
  padding: 20px;
  align-items: center;
  margin: 0 0 20px
`;

export const AppointmentsImage = styled.View`
  width: 100%
  margin: 8px 0 5px
`
export const AppointmentsMeta = styled.View`
  width: 40%
  bottom: 50
  margin: 0 0 10px 0
`




