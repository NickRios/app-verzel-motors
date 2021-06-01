import React, { useCallback }from 'react'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { launchImageLibrary } from 'react-native-image-picker';

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
  StyleContainer,
  DocumentsContainer,
  DocumentsTextContainer,
  DocumentsTextTitle,
  DocumentsText
} from './styles'

import { useAuth } from '../../hooks/auth'

const MedicalDocuments: React.FC = () => {
  const { goBack } = useNavigation();


  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const openGallery = () => {
    const options = {
      storageOption: {
        path: 'images',
        mediaType: 'photo',
      },
      incluedeBase64: true,
    }

    launchImageLibrary(options, response => {
      console.log('Response= ', response);
      if (response.didCancel) {
        console.log('User canceled image picker')
      } else if (response.errorCode) {
        console.log('Teste', response.errorCode)
      } else {
        const source = {uri: 'data:image/jpeg;base64,' + response.base64}
        return(source)
      }

    });
  }


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

      <SelectDocumentButton onPress={() => {
        openGallery()
      }}>
        <SelectDocumentText>Selecionar arquivo</SelectDocumentText>
      </SelectDocumentButton>


      <Schedule>
        <ScheduleTitle>Suas Receitas</ScheduleTitle>
      </Schedule>

      <StyleContainer>
        <DocumentsContainer>

          <DocumentsTextContainer>

            <DocumentsTextTitle>Arquivo - 12983478790</DocumentsTextTitle>
            <DocumentsText>Clinico Geral - Hospital Unimed</DocumentsText>

          </DocumentsTextContainer>

          <Icon name="trash-2" size={20} color="#000" />

        </DocumentsContainer>

      </StyleContainer>



    </Container>
  )
}

export default MedicalDocuments
