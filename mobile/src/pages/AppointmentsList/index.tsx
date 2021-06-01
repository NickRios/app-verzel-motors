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
  AppointmentsIconContainer,
  AppointmentsTextHospital,
  AppointmentsIcon,
  AppointmentsIconText,
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

        <AppointmentsContainer>

          <AppointmentsImage>
            <Image source={hospital} />

          </AppointmentsImage>

          <AppointmentsIconContainer>
            <AppointmentsTextHospital>Hospital Unimed</AppointmentsTextHospital>
            <AppointmentsIcon>

              <Icon name='calendar' size={18} color="#000" />

              <AppointmentsIconText>01 Jun</AppointmentsIconText>

            </AppointmentsIcon>


            <AppointmentsIcon>
              <Icon name='clock' size={18} color="#000" />

              <AppointmentsIconText>17:00</AppointmentsIconText>
            </AppointmentsIcon>
          </AppointmentsIconContainer>

        </AppointmentsContainer>
      </StyleContainer>

    </Container>
  )
}

export default MedicalDocuments
