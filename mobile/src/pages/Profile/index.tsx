import React, { useCallback, useRef }from 'react'
import { Alert, ScrollView, Image, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import { launchImageLibrary } from 'react-native-image-picker';
import * as Yup from 'yup'
import api from '../../services/api'

import { Container,
  Background,
  Header,
  BackButton,
  HeaderTitle,
  UserAvatarButtonContainer,
  UserAvatarButton,
  UserAvatar,
  NameTitle,
  NameTitleText,
  Text,
  FormContainer,
  ButtonContainer
} from './styles'

import { useAuth } from '../../hooks/auth'

import getValidationErrors from '../../utils/getValidationErrors'

import Input from '../../components/Input'
import Button from '../../components/Button'
import foto from '../../assets/foto1.png'

interface ProfileFormData {
  dataNascimento: string;
  genero: string;
  numeroSus: string;
}

const styles = StyleSheet.create({
  fto: {},
});


const ChartMedical: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { goBack } = useNavigation();

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const { signIn } = useAuth();

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

  const handleChangeDataPerfil = useCallback(
    async (data: ProfileFormData) => {
        try {
          formRef.current?.setErrors({});

          const schema = Yup.object().shape({
            dataNascimento: Yup.string().required('Data de nascimento obrigátorio'),
            genero: Yup.string().required('Gênero obrigátorio'),
            numeroSus: Yup.string().required('Número do Cartão do SUS obrigátorio'),
          });

          await schema.validate(data, {
            abortEarly: false,
          });

          await api.post('/users', data)

          Alert.alert('Cadastro realizado com sucesso!', 'Você já pode fazer login na aplicação')

        } catch (err) {
          if (err instanceof Yup.ValidationError) {
            const errors = getValidationErrors(err);

            console.log(errors);

            formRef.current?.setErrors(errors);

            return;
          }

          Alert.alert(
            'Erro no cadastro',
            'Ocorreu um erro ao fazer cadastro dos , tente novamente.',
          )

        }
    }, [])

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

          <HeaderTitle>Perfil</HeaderTitle>

        </Header>


        </Background>


        <UserAvatar>
          <Image style={styles.fto} source={foto} />

          <UserAvatarButtonContainer>
              <UserAvatarButton onPress={() => {
                openGallery()
              }}>
                <Icon name="camera" size={25} color="#000" />
              </UserAvatarButton>
          </UserAvatarButtonContainer>

        </UserAvatar>


        <NameTitle>
          <NameTitleText>Filipe Fernandes</NameTitleText>
        </NameTitle>

        <FormContainer>
          <Form
            ref={formRef}
            onSubmit={handleChangeDataPerfil}>

            <Input
              name="name"
              icon="person"
              placeholder="Filipe Fernandes"
            />

            <Input
              keyboardType="email-address"
              name="email"
              icon="mail"
              placeholder="filipe@gmail.com"
            />

          </Form>
        </FormContainer>

        <Text>Cadastrar Dados do SUS</Text>

        <FormContainer>
          <Form
            ref={formRef}
            onSubmit={handleChangeDataPerfil}>

            <Input
              name="dataNascimento"
              icon="event"
              placeholder="23/01/1997"
            />

            <Input
              name="genero"
              icon="wc"
              placeholder="Masculino"
            />

            <Input
              name="numeroSus"
              icon="payment"
              placeholder="703 2016 2396 2374"
            />


          </Form>
        </FormContainer>

        <ButtonContainer>
          <Button onPress={() => { formRef.current?.submitForm() }}>
            Confirmar Dados
          </Button>
        </ButtonContainer>
      </Container>
    </ScrollView>
  )
}

export default ChartMedical
