import React from 'react'
import { Image, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import { Container,
  Title,
  TitleText,
  SubTitle,
  SubTitleText,
  Background,
  StyleCard,
  CardImage,
  CardText,
  StyleContainer,
  AppointmentsContainer,
  AppointmentsImage,
  AppointmentsMeta,
  MenuContent,
  ButtonMeta,
  ButtonText
} from './styles'

import hospital from '../../assets/hospital.png'
import Cartao from '../../assets/Cartão.png'


interface MenuItems {
  name: string;
  icon: string;
  screen: string
}

export const menuItems:MenuItems [] = [
  {
    name: 'Agendar',
    icon: 'calendar',
    screen: 'Modules',
  },
  {
    name: 'Consultas',
    icon: 'list',
    screen: 'Internships'
  },
  {
    name: 'Receitas',
    icon: 'file',
    screen: 'Requests'
  },
  {
    name: 'Ficha',
    icon: 'file-text',
    screen: 'Requests'
  },
]

const Dashboard: React.FC = () => {

  return (
    <Container>
      <Background>

        <Title>
        <TitleText> Menu </TitleText>
        </Title>

        <StyleCard>
          <CardImage source={Cartao}>

          <CardText>703 2016 2396 2374</CardText>
          </CardImage>
        </StyleCard>
      </Background>

      <SubTitle>
        <SubTitleText>Próxima Consulta</SubTitleText>
      </SubTitle>

      <StyleContainer>
        <AppointmentsContainer>
          <AppointmentsImage>
            <Image source={hospital} />
          </AppointmentsImage>

          <AppointmentsMeta>
            <Icon name='calendar' size={18} color="#000" />
          </AppointmentsMeta>

          <AppointmentsMeta>
            <Icon name='clock' size={18} color="#000" />
          </AppointmentsMeta>
        </AppointmentsContainer>
      </StyleContainer>

      <MenuContent snapToInterval={200} data={menuItems} renderItem = {
        ({ item }) => (
          <ButtonMeta>
            <Icon name={item.icon} size={35} color="#000" />
            <ButtonText>{item.name}</ButtonText>
          </ButtonMeta>
        )
      } />

    </Container>
  )
}

export default Dashboard
