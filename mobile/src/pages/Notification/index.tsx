import React, { useCallback }from 'react'
import { Image } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'

import { Container,
  Background,
  Header,
  BackButton,
  HeaderTitle,
  StyleContainer,
  NotificationContainer,
  NotificationTextContainer,
  NotificationTextTitle,
  NotificationTextTitleDate,
  NotificationText
} from './styles'


import calendar from '../../assets/date.png'


const MedicalDocuments: React.FC = () => {
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

        <HeaderTitle>Notificação</HeaderTitle>

      </Header>

      </Background>

      <StyleContainer>
        <NotificationContainer>
          <Image style={{ width: 60, height: 60 }} source={calendar} />


          <NotificationTextContainer>

            <NotificationTextTitle>Sua consulta é hoje</NotificationTextTitle>
            <NotificationText>Olá Filipe, estamos te enviando esta mensagem para não esquecer que sua consulta é hoje !!! </NotificationText>

          </NotificationTextContainer>

          <NotificationTextTitleDate>31 Mai</NotificationTextTitleDate>

        </NotificationContainer>

      </StyleContainer>


    </Container>
  )
}

export default MedicalDocuments
