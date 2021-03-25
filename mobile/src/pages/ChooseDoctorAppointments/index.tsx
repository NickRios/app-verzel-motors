import React, { useCallback, useState }from 'react'
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
  DotContainer,
  DotButton,
  DotButtonText,
  StyleContainer,
  MedicineList,
  MedicineListText,

} from './styles'

import doctor from '../../assets/Doctor.png'

import { useAuth } from '../../hooks/auth'


const ChooseDoctorAppointments: React.FC = () => {
  const { signOut } = useAuth();

  const { goBack, navigate } = useNavigation();
  const navigation = useNavigation();

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const [telemedicinaSelected, setTelemedicinaSelected ] = useState(true);


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
        <SubTitleText>Escolha uma Especialidade</SubTitleText>

        <Image source={doctor} />
      </SubTitle>


      <DotContainer>
        <DotButton
        onPress={() => {setTelemedicinaSelected(true)}}
        selected={telemedicinaSelected}>
          <DotButtonText selected={telemedicinaSelected}>
          Telemedicina</DotButtonText>
        </DotButton>

        <DotButton
        onPress={() => {setTelemedicinaSelected(false)}}
        selected={!telemedicinaSelected}>
          <DotButtonText
          selected={!telemedicinaSelected}>
            Presencial</DotButtonText>
        </DotButton>
      </DotContainer>

      <StyleContainer>

        <MedicineList onPress={() => navigation.navigate('ChooseHospitalAppointments')}>
          <MedicineListText>Clinico Geral</MedicineListText>
        </MedicineList>

        <MedicineList>
          <MedicineListText>Cardiologista</MedicineListText>
        </MedicineList>

        <MedicineList>
          <MedicineListText>Dermatologista</MedicineListText>
        </MedicineList>

        <MedicineList>
          <MedicineListText>Endocrionologista</MedicineListText>
        </MedicineList>

        <MedicineList>
          <MedicineListText>Pediatra</MedicineListText>
        </MedicineList>

      </StyleContainer>




    </Container>
  )
}

export default ChooseDoctorAppointments
