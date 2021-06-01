import { FlatList, RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Appointment } from '.';

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
  height: 130px
  background: #EAEAEA;
  border-radius: 12px;
  flex-direction: row;
  padding: 10px
  margin: 0 0 20px
`;

export const AppointmentsList = styled(FlatList as new () => FlatList<Appointment>
)``;

export const AppointmentsImage = styled.View`
  margin: 30px 0 0 10px;
`
export const AppointmentsIconContainer = styled.View`
  margin: 10px 20px;
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
  margin: 0 10px
  font-size: 13px;
  color: #000;
  font-family: 'Poppins-Medium';
`;

/* export const MedicineList = styled(FlatList as new () => FlatList<Speciality>
)``;

export const MedicineListContainer = styled(RectButton)`
  flex-direction: row;
  background: #EAEAEA;
  border-radius: 12px;
  padding: 20px;
  margin: 0 0 20px

  align-items: center;
  justify-content: center;
`;

export const MedicineListText = styled.Text`
  font-size: 16px;
  color: #000;
  font-family: 'Poppins-Medium';

` */





