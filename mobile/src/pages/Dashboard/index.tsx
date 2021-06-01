import React from 'react'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'

import { Container,
  Title,
  TitleText,
  SubTitle,
  SubTitleText,
  Background,
  StyleCard,
  CardImage,
  CardText,
  CardTextNumber,
  StyleContainer,
  AppointmentsContainer,
  AppointmentsImage,
  AppointmentsIconContainer,
  AppointmentsTextHospital,
  AppointmentsIcon,
  AppointmentsIconText,
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
    screen: 'ChooseDoctorAppointments',
  },
  {
    name: 'Consultas',
    icon: 'list',
    screen: 'AppointmentsList'
  },
  {
    name: 'Receitas',
    icon: 'file',
    screen: 'MedicalDocuments'
  },
  {
    name: 'Ficha',
    icon: 'file-text',
    screen: 'ChartMedical'
  },
]


const Dashboard: React.FC = ({ navigation }) => {

  return (
    <Container>
      <Background>

        <Title>
        <TitleText> Menu </TitleText>
        </Title>

        <StyleCard>
          <CardImage source={Cartao}>
          <CardText>Data de Nasc.: 23/01/1997</CardText>
          <CardText>Sexo: M</CardText>
          <CardTextNumber>703 2016 2396 2374</CardTextNumber>
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

          <AppointmentsIconContainer>
            <AppointmentsTextHospital>Hospital Samaritano</AppointmentsTextHospital>
            <AppointmentsIcon>

              <Icon name='calendar' size={18} color="#000" />

              <AppointmentsIconText>31 Mai</AppointmentsIconText>

            </AppointmentsIcon>


            <AppointmentsIcon>
              <Icon name='clock' size={18} color="#000" />

              <AppointmentsIconText>14:00</AppointmentsIconText>
            </AppointmentsIcon>
          </AppointmentsIconContainer>

        </AppointmentsContainer>
      </StyleContainer>

      <MenuContent snapToInterval={200} data={menuItems}
      keyExtractor= {( item, index ) => item.name}
      renderItem = {
        ({ item }) => (
          <ButtonMeta onPress={() => navigation.navigate(item.screen)} >
            <Icon name={item.icon} size={35} color="#000" />
            <ButtonText>{item.name}</ButtonText>
          </ButtonMeta>
        )
      } />

    </Container>
  )
}

export default Dashboard
