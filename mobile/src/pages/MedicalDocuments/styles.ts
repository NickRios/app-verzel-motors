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
  margin: 0 10px;
`;

export const HeaderTitle = styled.Text`
  color: #000;
  font-family: "Poppins-SemiBold";
  font-size: 30px;
  margin: 0 15px;
`;

export const SubTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 30px;
`;

export const SubTitleText = styled.Text`
  width: 252px;
  font-size: 24px;
  color: #000;
  font-family: 'Poppins-Medium';
`;

export const SelectDocumentButton = styled(RectButton)`
  height: 55px;
  background: #7BCCAC;
  border-radius: 15px;
  margin: 15px 50px;

  align-items: center;
  justify-content: center;
`;

export const SelectDocumentText = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 15px;
  color: #FFFF;
`;

export const Schedule = styled.View`
  padding: 30px 30px
`;

export const ScheduleTitle = styled.Text`
  font-size: 24px;
  color: #000;
  font-family: 'Poppins-Medium';
`;

export const StyleContainer = styled.View`
  padding: 0 20px;
`

export const DocumentsContainer = styled.View`
  width: 100%;
  height: 100px;
  padding: 20px;
  border-radius: 12px;
  background: #EAEAEA;
  flex-direction: row;
  justify-content: space-between;
`;

export const DocumentsTextContainer = styled.View`
  flex-direction: column;
`

export const DocumentsTextTitle = styled.Text`
  color: #7BCCAC;
  font-family: "Poppins-Medium";
  font-size: 18px;
`

export const DocumentsText = styled.Text`
  color: #000;
  font-family: "Poppins-Medium";
  font-size: 15px;
  margin-top: 5px;
`




