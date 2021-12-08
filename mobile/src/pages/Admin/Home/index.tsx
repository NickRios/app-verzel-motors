import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Title,
  TitleText,
  Header,
  BodyHeaderText,
  MenuContent,
  ButtonMeta,
  ButtonText,
} from './styles';

interface MenuItems {
  name: string;
  icon: string;
  screen: string;
}

export const menuItems: MenuItems[] = [
  {
    name: 'Cadastrar Carro',
    icon: 'car',
    screen: 'RegisterCars',
  },
  {
    name: 'Editar Carro',
    icon: 'car',
    screen: 'UpdateCars',
  },
];

const HomeAdmin: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Container>
        <Header>
          <Title>
            <TitleText> Home </TitleText>
          </Title>
        </Header>

        <BodyHeaderText>O que você deseja fazer ? </BodyHeaderText>

        <MenuContent
          snapToInterval={200}
          data={menuItems}
          keyExtractor={menu => menu.name}
          renderItem={({item}) => (
            <ButtonMeta onPress={() => navigation.navigate(item.screen)}>
              <Icon name={item.icon} size={24} color="#000" />
              <ButtonText>{item.name}</ButtonText>
            </ButtonMeta>
          )}
        />
      </Container>
    </>
  );
};

export default HomeAdmin;
