import React, {useCallback, useRef} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';

import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';

import {useAuth} from '../../hooks/auth';

import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/Logo.png';

import Input from '../../components/Input';

import {Container, Title, LoginButton, LoginButtonText} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  const {signIn} = useAuth();

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
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque as credenciais.',
        );
      }
    },
    [signIn],
  );

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Container>
            <Image source={logoImg} />

            <Title> Faça seu Login </Title>

            <Form ref={formRef} onSubmit={handleSignIn}>
              <Input
                keyboardType="email-address"
                name="email"
                icon="mail"
                placeholder="Email"
              />

              <Input
                secureTextEntry
                name="password"
                icon="lock"
                placeholder="Senha"
              />

              <LoginButton onPress={() => formRef.current?.submitForm()}>
                <LoginButtonText>Entrar</LoginButtonText>
              </LoginButton>
            </Form>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignIn;
