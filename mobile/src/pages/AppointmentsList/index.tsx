import React, { useCallback }from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'

import { Container,
  Background,
  Header,
  BackButton,
  HeaderTitle,
  SubTitle,
  SubTitleText,
  StyleContainer,
  AppointmentsContainer,
  AppointmentsImage,
  AppointmentsMeta,
} from './styles'

import hospital from '../../assets/hospital.png'

import { useAuth } from '../../hooks/auth'

const MedicalDocuments: React.FC = () => {
  const { signOut } = useAuth();

  const { goBack } = useNavigation();


  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);


  return (
    <Container>
      <Background>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="arrow-left" size={30} color="#000" />
        </BackButton>

        <HeaderTitle>Consultas</HeaderTitle>

      </Header>

      </Background>

      <SubTitle>
        <SubTitleText>Próximas Consultas</SubTitleText>
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

    </Container>
  )
}

export default MedicalDocuments
