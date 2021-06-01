import React, { useCallback, useState, useEffect }from 'react'
import { Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useRoute, useNavigation } from '@react-navigation/native'

import doctor from '../../assets/Doctor.png'
import { useAuth } from '../../hooks/auth'
import api from '../../services/api'

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
  SpecialityContainer,
  MedicineList,
  MedicineListContainer,
  MedicineListText,

} from './styles'


export interface Speciality {
  id: string;
  name: string;
}

const ChooseDoctorAppointments: React.FC = () => {
  const { goBack } = useNavigation();
  const navigation = useNavigation();

  const [telemedicinaSelected, setTelemedicinaSelected ] = useState(true);
  const [specialitys, setSpecialitys] = useState<Speciality[]>([]);

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  useEffect(() => {
    api.get('specialitys').then((response) => {
      setSpecialitys(response.data);
    });
  }, []);




  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
    >
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

        {
          specialitys.map(specialitys => (
            <MedicineListContainer key={specialitys.id} onPress={() => navigation.navigate('ChooseHospitalAppointments')}>
              <MedicineListText>{specialitys.name}</MedicineListText>

            </MedicineListContainer>
          ))
        }




      </Container>
    </ScrollView>
  )
}

export default ChooseDoctorAppointments
