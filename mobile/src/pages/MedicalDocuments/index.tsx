import React, { useCallback }from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import { Container,
  Background,
  Header,
  BackButton,
  HeaderTitle,
  SubTitle,
  SubTitleText,
  SelectDocumentButton,
  SelectDocumentText,
  Schedule,
  ScheduleTitle,
} from './styles'

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

        <HeaderTitle>Receitas</HeaderTitle>

      </Header>

      </Background>

      <SubTitle>
        <SubTitleText>Faça upload das receitas</SubTitleText>
      </SubTitle>

      <SelectDocumentButton>
        <SelectDocumentText>Selecionar arquivo</SelectDocumentText>
      </SelectDocumentButton>


      <Schedule>
        <ScheduleTitle>Suas Receitas</ScheduleTitle>
      </Schedule>



    </Container>
  )
}

export default MedicalDocuments
