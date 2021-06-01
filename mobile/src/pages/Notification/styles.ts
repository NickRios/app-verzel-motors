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
  margin: 0 15px
`;

export const StyleContainer = styled.View`
  padding: 0 20px;
`

export const NotificationContainer = styled.View`
  width: 100%;
  height: 120px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: #7BCCAC;
  margin: 30px 0 0 0;
`;

export const NotificationTextContainer = styled.View`
  flex-direction: column;
`

export const NotificationTextTitle = styled.Text`
  color: #000;
  font-family: "Poppins-Medium";
  font-size: 18px;
  margin: 0 10px;
`

export const NotificationTextTitleDate = styled.Text`
  color: #000;
  font-family: "Poppins-Medium";
  font-size: 14px;
`

export const NotificationText = styled.Text`
  width: 240px;
  color: #000;
  font-family: "Poppins-Regular";
  font-size: 13px;
  margin: 0 10px;
`

