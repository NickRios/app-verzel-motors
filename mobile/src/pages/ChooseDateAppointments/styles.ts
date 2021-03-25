import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface HourProps {
  selected: boolean;
}

interface HourPropsTextProps {
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
  margin-left: 16px;
`;

export const SubTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 25px
`;

export const SubTitleText = styled.Text`
  width: 150px;
  font-size: 24px;
  color: #000;
  font-family: 'Poppins-Medium';
`;

export const OpenDatePickerButton = styled(RectButton)`
  height: 55px;
  background: #7BCCAC;
  border-radius: 15px;
  margin: 15px 50px;

  align-items: center;
  justify-content: center;
`;

export const OpenDatePickerButtonText = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 15px
  color: #FFFF
`;

export const Schedule = styled.View`
  padding: 20px 25px
`;

export const ScheduleTitle = styled.Text`
  font-size: 24px;
  color: #000;
  font-family: 'Poppins-Medium';
`;

export const Section = styled.View`

`;

export const SectionTitle = styled.Text`
  font-family: "RobotoSlab-Medium";
  color: #AEAEAE;
  font-size: 18px;
  margin: 10px 10px 15px;
`;

export const SectionContent = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 24 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Hour = styled(RectButton)<HourProps>`
  padding: 10px;
  background: ${props => props.selected ? '#7BCCAC' : '#C4C4C4'};
  border-radius: 13px;
  margin-right: 8px;
`;

export const HourText = styled.Text`
  font-family: "Poppins-SemiBold";
  color: #FFFF;
  font-size: 14px;
`;

export const CreateAppointmentButton = styled(RectButton)`
  height: 55px;
  background: #7BCCAC;
  border-radius: 15px;
  margin: 20px 50px;

  align-items: center;
  justify-content: center;
`;

export const CreateAppointmentButtonText = styled.Text`
  font-family: 'Poppins-SemiBold';
  font-size: 15px
  color: #FFFF
`;




