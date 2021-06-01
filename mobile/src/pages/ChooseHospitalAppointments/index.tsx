import React, { useCallback, useState, useEffect }from 'react'
import { Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

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
  HospitalListContainer,
  HospitalListText,

} from './styles'

export interface Hospital {
  id: string;
  name: string;
}

const ChooseHospitalAppointments: React.FC = () => {
  const { goBack, navigate } = useNavigation();

  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  useEffect(() => {
    api.get('hospitals').then((response) => {
      setHospitals(response.data);
    });
  }, []);

  const navigateToChooseDateAppointment = useCallback((hospitalId: string) => {
    navigate('ChooseDateAppointments', { hospitalId });
  }, [navigate])

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
          <SubTitleText>Escolha uma Unidade de Saúde</SubTitleText>

          <Image source={doctor} />
        </SubTitle>

        {
          hospitals.map(hospitals => (
            <HospitalListContainer key={hospitals.id} onPress={() => navigateToChooseDateAppointment(hospitals.name)}>
                <HospitalListText>{hospitals.name}</HospitalListText>

              </HospitalListContainer>
          ))
        }



      </Container>
    </ScrollView>
  )
}

export default ChooseHospitalAppointments
