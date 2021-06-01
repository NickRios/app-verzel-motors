import { Dimensions } from 'react-native';
import styled from 'styled-components/native';


interface MetricType {
  screenWidth: number;
  screenHeight: number;
}

const { width , height } = Dimensions.get('window');

const metrics: MetricType = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
}

export const Container = styled.View`
  flex: 1;
  align-content: center;
  justify-content: flex-start;
  background: #F9F4F4;
`;

export const Background = styled.View`
  background: #FFF;
`;

export const StyleCard = styled.View`
  width: ${metrics.screenWidth -68};
  height: 200px;
  padding: 0 20px;
  margin: 15px 30px 20px;
`

export const CardImage = styled.ImageBackground`
  flex: 1;
  justify-content: flex-end;
  padding: 0 40px;
`
export const CardText = styled.Text`
  font-size: 12px;
  color: #FFF;
  font-family: 'Poppins-SemiBold';
`;

export const CardTextNumber = styled.Text`
  font-size: 20px;
  color: #FFF;
  font-family: 'Poppins-SemiBold';
  margin: 5px 0;
`;

export const Title = styled.View`
  margin: 0 0 20px;
  padding: 0 20px ;
`;

export const TitleText = styled.Text`
  font-size: 35px;
  color: #000;
  font-family: 'Poppins-SemiBold';
`;

export const SubTitle = styled.Text`
  margin: 25px 0 25px;
  padding: 0 30px;
`;

export const SubTitleText = styled.Text`
  font-size: 22px;
  color: #000;
  font-family: 'Poppins-Medium';
`;

export const StyleContainer = styled.View`
  padding: 0 20px;
`

export const AppointmentsContainer = styled.View`
  width: 100%;
  height: 120px;
  background: #EAEAEA;
  border-radius: 12px;
  flex-direction: row;
  padding: 10px
  margin: 0 0 40px;
`;



export const AppointmentsImage = styled.View`
  margin: 20px 0 0 10px;
`
export const AppointmentsIconContainer = styled.View`
  margin: 5px 20px;
`;

export const AppointmentsTextHospital = styled.Text`
  margin: 0 5px;
  font-size: 21px;
  color: #7BCCAC;
  font-family: 'Poppins-Medium';
`;

export const AppointmentsIcon = styled.View`
  flex-direction: row;
  margin: 5px
`

export const AppointmentsIconText = styled.Text`
  margin: 0 10px;
  font-size: 13px;
  color: #000;
  font-family: 'Poppins-Medium';
`;

export const MenuContent = styled.FlatList.attrs({
  contentContainerStyle: { paddingHorizontal: 10 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const ButtonMeta = styled.TouchableOpacity`
  width: 120px;
  height: 100px;
  align-items: center;
  background: #EAEAEA;
  border-radius: 12px;
  padding: 20px 10px;
  margin: 30px 0 0 10px;
`

export const ButtonText = styled.Text`
  font-size: 15px;
  color: #000;
  font-family: 'Poppins-SemiBold';
  margin: 10px;
`;



