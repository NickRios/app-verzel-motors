import { FlatList, RectButton, TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Speciality } from '.';

interface DotButtonProps {
  selected: boolean
}

interface DotButtonTextProps {
  selected: boolean
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
  padding: 20px 25px
`;

export const SubTitleText = styled.Text`
  width: 211px;
  font-size: 24px;
  color: #000;
  font-family: 'Poppins-Medium';
`;

export const DotContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 15px 0 30px;
`
export const DotButton = styled.TouchableOpacity<DotButtonProps>`
  height: 35px;
  width: 140px;
  border-radius: 20px;
  background: ${props => props.selected ? '#7BCCAC' : '#F9F4F4'};
  margin: 0 5px;

  align-items: center;
  justify-content: center;
`
export const DotButtonText = styled.Text<DotButtonTextProps>`
  font-size: 14px;
  color: ${props => props.selected ? '#FFFF' : '#AEAEAE'};
  font-family: 'Poppins-Medium';
`;

export const SpecialityContainer = styled.View`
  padding: 0 30px;
`

export const MedicineList = styled(FlatList as new () => FlatList<Speciality>
)``;

export const MedicineListContainer = styled(RectButton)`
  align-self: center;
  width: 80%;
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

`

