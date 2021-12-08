import {RectButton} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-content: center;
  justify-content: flex-start;
  background: #fff;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  background: #07203f;
`;

export const BackButton = styled.TouchableOpacity`
  margin: 15px 20px;
`;

export const Title = styled.View`
  margin: 0 0 20px;
`;

export const TitleText = styled.Text`
  font-size: 35px;
  color: #fff;
  font-family: 'Poppins-SemiBold';
`;

export const BodyContainer = styled.View`
  padding: 0 20px;
  margin-top: 30px;
`;

export const BodyHeaderText = styled.Text`
  font-size: 15px;
  color: #737272;
  font-family: 'Poppins-Medium';

  margin-bottom: 20px;
`;

export const CardContainer = styled(RectButton)`
  width: 100%;
  background: #eaeaea;
  border-radius: 10px;
  flex-direction: column;
  padding: 10px;
  margin: 0 0 30px;
`;

export const CardImage = styled.View`
  margin: 20px 0 0 10px;
`;

export const CardHeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 5px 10px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardInformationContainer = styled.View`
  width: 50%;
`;

export const BrandText = styled.Text`
  margin: 0 5px;
  font-size: 13px;
  color: #000;
  font-family: 'Poppins-Bold';
`;

export const ModelText = styled.Text`
  margin: 0 5px;
  font-size: 13px;
  color: #6ab026;
  font-family: 'Poppins-Bold';
`;

export const CarTrimContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin: 0px 10px;
`;

export const CarTrimText = styled.Text`
  margin: -8px 5px;
  font-size: 13px;
  color: #aeaeae;
  font-family: 'Poppins-Medium';
`;

export const ValueContainer = styled.View`
  margin: 5px 10px;
`;

export const ValueText = styled.Text`
  margin: 0 5px;
  font-size: 20px;
  color: #000;
  font-family: 'Poppins-SemiBold';
`;

export const InformationContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 10px;
`;

export const InformationText = styled.Text`
  margin: 0 5px;
  font-size: 12px;
  color: #000;
  font-family: 'Poppins-Regular';
`;

export const LineContainer = styled.View`
  width: 100%;
  height: 1px;
  margin-top: -15px;
  background-color: #00b3b3;
`;

export const CardFooterContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 10px 20px;
`;

export const RegionText = styled.Text`
  margin: 0 70px 0 0;
  font-size: 12px;
  color: #000;
  font-family: 'Poppins-Medium';
`;

export const LocationText = styled.Text`
  margin: 0 5px;
  font-size: 12px;
  color: #000;
  font-family: 'Poppins-Medium';
`;
