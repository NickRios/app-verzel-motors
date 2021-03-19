import React from 'react'
import { Image } from 'react-native'
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
  ButtonContainer,
  ButtonMeta,
  ButtonText,
} from './styles'

import hospital from '../../assets/hospital.png'
import Cartao from '../../assets/Cartão.png'

import { useAuth } from '../../hooks/auth'

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  const navigation = useNavigation();

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

      <ButtonContainer>
        <ButtonMeta onPress={() => navigation.navigate('')}>
          <Icon name='calendar' size={35} color="#000" />

          <ButtonText>Agendar</ButtonText>
        </ButtonMeta>

        <ButtonMeta>
          <Icon name='list' size={35} color="#000" />

          <ButtonText>Consultas</ButtonText>
        </ButtonMeta>

        <ButtonMeta>
          <Icon name='file-text' size={35} color="#000" />

          <ButtonText>Receitas</ButtonText>
        </ButtonMeta>


      </ButtonContainer>


    </Container>
  )
}

export default Dashboard
