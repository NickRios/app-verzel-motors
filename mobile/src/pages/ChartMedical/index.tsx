import React, { useCallback, useRef }from 'react'
import { Image, Alert, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { Form } from '@unform/mobile'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup'

import { Container,
  Background,
  Header,
  BackButton,
  HeaderTitle,
  SubTitle,
  SubTitleText,
  TextContainer,
  Text,
  AddButton,
  AddButtonText,
  FormContainer,
  ButtonContainer
} from './styles'

import { useAuth } from '../../hooks/auth'

import getValidationErrors from '../../utils/getValidationErrors'

import ficha from '../../assets/Ficha.png'
import Input from '../../components/Input'
import Button from '../../components/Button'

interface SignInFormData {
  email: string;
  password: string;
}

const ChartMedical: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { goBack } = useNavigation();

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const { signIn } = useAuth();

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
        try {
          formRef.current?.setErrors({});

          const schema = Yup.object().shape({
            email: Yup.string()
              .required('E-mail obrigatório')
              .email('Digite um e-mail válido'),
            password: Yup.string().required('Senha obrigatória'),
          });

          await schema.validate(data, {
            abortEarly: false,
          });

          await signIn({
            email: data.email,
            password: data.password
          });
        } catch (err) {
          if (err instanceof Yup.ValidationError) {
            const errors = getValidationErrors(err);

            console.log(errors);

            formRef.current?.setErrors(errors);

            return;
          }

          Alert.alert(
            'Erro na autenticação',
            'Ocorreu um erro ao fazer login, cheque as credenciais.',
          )

        }
    }, [signIn])

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

          <HeaderTitle>Ficha Médica</HeaderTitle>

        </Header>

        </Background>

        <SubTitle>
          <SubTitleText>Preencha com seus dados</SubTitleText>

          <Image source={ficha} />
        </SubTitle>

        <Text>Informações</Text>

        <FormContainer>
          <Form
            ref={formRef}
            onSubmit={handleSignIn}>
            <Input
              name="name"
              icon="person"
              placeholder="Nome"
            />

            <Input
              name="data-nascimento"
              icon="event"
              placeholder="Data de Nascimento"
            />

            <Input
              name="phone"
              icon="phone"
              placeholder="Telefone"
            />

            <Input
              name="altura"
              icon="emoji-people"
              placeholder="Altura"
            />

            <Input
              name="peso"
              icon="emoji-people"
              placeholder="Peso"
            />
          </Form>
        </FormContainer>


        <Text>Tipo Sanguíneo</Text>


        <FormContainer>
          <Form
            ref={formRef}
            onSubmit={handleSignIn}>
            <Input
              name="sangue"
              icon="invert-colors"
              placeholder="Nenhum dado adicionado"
            />
          </Form>
        </FormContainer>

        <TextContainer>

          <Text>Alergias e Reações</Text>

         {/*  <AddButton>
            <AddButtonText>Adicionar</AddButtonText>
          </AddButton> */}

        </TextContainer>

        <FormContainer>
          <Form
            ref={formRef}
            onSubmit={handleSignIn}>
            <Input
              name="alergias"
              icon="healing"
              placeholder="Nenhum dado adicionado"
            />
          </Form>
        </FormContainer>

        <TextContainer>

          <Text>Medicamentos</Text>

          {/* <AddButton>
            <AddButtonText>Adicionar</AddButtonText>
          </AddButton> */}

        </TextContainer>

        <FormContainer>
          <Form
            ref={formRef}
            onSubmit={handleSignIn}>
            <Input
              name="medicamentos"
              icon="local-hospital"
              placeholder="Nenhum dado adicionado"
            />
          </Form>
        </FormContainer>

        <ButtonContainer>
          <Button onPress={() => { formRef.current?.submitForm() }}>
            Salvar
          </Button>
        </ButtonContainer>
      </Container>
    </ScrollView>
  )
}

export default ChartMedical
