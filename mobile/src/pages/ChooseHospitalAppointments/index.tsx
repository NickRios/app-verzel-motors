import React, { useCallback }from 'react'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'


import { Container,
  Background,
  Header,
  BackButton,
  HeaderTitle,
  SubTitle,
  SubTitleText,
  StyleContainer,
  HospitalList,
  HospitalListText,

} from './styles'

import doctor from '../../assets/Doctor.png'

import { useAuth } from '../../hooks/auth'



const ChooseHospitalAppointments: React.FC = () => {
  const { signOut } = useAuth();

  const { goBack, navigate } = useNavigation();
  const navigation = useNavigation();

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

        <HeaderTitle>Agendar</HeaderTitle>

      </Header>

      </Background>

      <SubTitle>
        <SubTitleText>Escolha uma Unidade de Saúde</SubTitleText>

        <Image source={doctor} />
      </SubTitle>

      <StyleContainer>

        <HospitalList onPress={() => navigation.navigate('ChooseDateAppointments')}>
          <HospitalListText>Centro Médico São Camilo</HospitalListText>
        </HospitalList>

        <HospitalList>
          <HospitalListText>Hospital Day Campinas</HospitalListText>
        </HospitalList>

        <HospitalList>
          <HospitalListText>Hospital Unimed</HospitalListText>
        </HospitalList>

        <HospitalList>
          <HospitalListText>UBS III - Cecap</HospitalListText>
        </HospitalList>

        <HospitalList>
          <HospitalListText>UBS Potuvera</HospitalListText>
        </HospitalList>

        <HospitalList>
          <HospitalListText>Upa Jd Morada</HospitalListText>
        </HospitalList>

      </StyleContainer>




    </Container>
  )
}

export default ChooseHospitalAppointments
