import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-content: center;
  justify-content: flex-start;
  background: #fff;
`;

export const Header = styled.View`
  background: #07203f;
`;

export const Title = styled.View`
  margin: 0 0 20px;
  padding: 0 20px;
`;

export const TitleText = styled.Text`
  font-size: 35px;
  color: #fff;
  font-family: 'Poppins-SemiBold';
`;

export const BodyHeaderText = styled.Text`
  font-size: 14px;
  color: #737272;
  font-family: 'Poppins-Medium';
  margin: 20px 30px;
`;

export const MenuContent = styled.FlatList.attrs({
  contentContainerStyle: {flexGrow: 0.9, justifyContent: 'center'},
  horizontal: true,
})``;

export const ButtonMeta = styled.TouchableOpacity`
  width: 145px;
  height: 120px;
  background: #eaeaea;
  border-radius: 12px;
  padding: 20px 30px;
  margin: 0 0 0 10px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  color: #000;
  font-family: 'Poppins-SemiBold';
  margin-top: 10px;
`;
