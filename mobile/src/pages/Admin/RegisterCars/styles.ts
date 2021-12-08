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

export const Title = styled.View`
  margin: 0 0 20px;
`;

export const TitleText = styled.Text`
  font-size: 35px;
  color: #fff;
  font-family: 'Poppins-SemiBold';
`;

export const BackButton = styled.TouchableOpacity`
  margin: 15px 20px;
`;

export const FormContainer = styled.View`
  margin: 20px 15px;
`;

export const InputContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 49%;
`;

export const ButtonContainer = styled.View`
  margin: 0 15px 30px;
`;
