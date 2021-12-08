import React, {useCallback, useRef} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Alert, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';
import api from '../../../services/api';

import {
  Container,
  Title,
  TitleText,
  Header,
  BackButton,
  FormContainer,
  InputContainer,
  ButtonContainer,
} from './styles';

import getValidationErrors from '../../../utils/getValidationErrors';

import InputAdmin from '../components/InputAdmin';
import Button from '../../../components/Button';

interface RegisterCarFormData {
  name: string;
  brand: string;
  model: string;
  car_trim: string;
  km: number;
  year: number;
  price: number;
  transmission: string;
  color: string;
  region: string;
  location: string;
  image: string;
}

const RegisterCars: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const {goBack} = useNavigation();

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleRegisterCar = useCallback(async (data: RegisterCarFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome do carro obrigátorio'),
        brand: Yup.string().required('Marca do carro obrigátorio'),
        model: Yup.string().required('Modelo do carro obrigátorio'),
        car_trim: Yup.string().required('Modelo do carro obrigátorio'),
        km: Yup.string().required('KM do carro obrigátorio'),
        year: Yup.string().required('Ano do carro obrigátorio'),
        price: Yup.string().required('Preço do carro obrigátorio'),
        transmission: Yup.string().required('Transmissão do carro obrigátorio'),
        color: Yup.string().required('Cor do carro obrigátorio'),
        region: Yup.string().required('Região obrigátorio'),
        location: Yup.string().required('Local obrigátorio'),
        image: Yup.string().required('Imagem do carro obrigátorio'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/cars', data);

      Alert.alert('Cadastro realizado com sucesso !');

      goBack();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        console.log(errors);

        formRef.current?.setErrors(errors);

        return;
      }

      Alert.alert(
        'Erro no cadastro',
        'Ocorreu um erro ao fazer cadastro, tente novamente.',
      );
    }
  }, []);

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <Container>
        <Header>
          <BackButton onPress={navigateBack}>
            <Icon name="arrow-left" size={23} color="#fff" />
          </BackButton>
          <Title>
            <TitleText> Cadastro </TitleText>
          </Title>
        </Header>

        <FormContainer>
          <Form ref={formRef} onSubmit={handleRegisterCar}>
            <InputAdmin name="name" icon="car" placeholder="Nome do carro" />
            <InputAdmin name="brand" icon="car" placeholder="Marca " />
            <InputAdmin name="model" icon="car" placeholder="Modelo " />
            <InputAdmin
              name="car_trim"
              icon="car"
              placeholder="Versão do carro"
            />
            <InputContainer>
              <InputAdmin name="km" icon="tachometer-alt" placeholder="KM" />
              <InputAdmin name="year" icon="calendar" placeholder="Ano" />
            </InputContainer>
            <InputAdmin name="transmission" icon="car" placeholder="Câmbio" />
            <InputContainer>
              <InputAdmin name="price" icon="money-bill" placeholder="Preço" />
              <InputAdmin name="color" icon="palette" placeholder="Cor" />
            </InputContainer>
            <InputAdmin
              name="location"
              icon="map-marker-alt"
              placeholder="Local"
            />
            <InputAdmin
              name="region"
              icon="map-marker-alt"
              placeholder="Estado"
            />
            <InputAdmin
              name="image"
              icon="camera"
              placeholder="Link da imagem"
            />
          </Form>
        </FormContainer>

        <ButtonContainer>
          <Button
            onPress={() => {
              formRef.current?.submitForm();
            }}>
            Confirmar Dados
          </Button>
        </ButtonContainer>
      </Container>
    </ScrollView>
  );
};

export default RegisterCars;
