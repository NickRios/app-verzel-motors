import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Alert, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Form} from '@unform/mobile';
import {FormHandles} from '@unform/core';
import * as Yup from 'yup';
import api from '../../../../services/api';

import {
  Container,
  Title,
  TitleText,
  Header,
  BackButton,
  BodyHeaderText,
  FormContainer,
  BodyText,
  InputContainer,
  ActionButtonContent,
  ButtonEditContainer,
  ButtonExcludeContainer,
  ButtonText,
} from './styles';

import getValidationErrors from '../../../../utils/getValidationErrors';

import InputAdmin from '../../components/InputAdmin';

interface RouteParams {
  car: object;
}

interface Car {
  id: string;
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

const SelectedCarEdit: React.FC = () => {
  const route = useRoute();
  const routeParams = route.params as RouteParams;
  const car = routeParams.car as Car;

  const formRef = useRef<FormHandles>(null);

  const {goBack, navigate} = useNavigation();

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const handleEditCar = useCallback(async (data: Car) => {
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

      await api.put(`/cars/${car.id}`, data);

      // formRef.current?.setData(response.data);

      Alert.alert('Carro atualizado com sucesso!');

      navigate('HomeAdmin');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        console.log(errors);

        formRef.current?.setErrors(errors);

        return;
      }

      Alert.alert(
        'Erro ao editar',
        'Ocorreu um erro ao editar as informações, tente novamente.',
      );
    }
  }, []);

  async function deleteCar(carId: string) {
    try {
      const result = await api.delete(`/cars/${carId}`);

      Alert.alert('Carro excluido com sucesso!');

      navigate('HomeAdmin');
    } catch (error) {
      Alert.alert(
        'Erro ao deletar o carro',
        'Ocorreu um erro ao deletar, tente novamente.',
      );
    }
  }

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <Container>
        <Header>
          <BackButton onPress={navigateBack}>
            <Icon name="arrow-left" size={23} color="#fff" />
          </BackButton>

          <Title>
            <TitleText>{car.brand}</TitleText>
            <TitleText>{car.name}</TitleText>
          </Title>
        </Header>

        <BodyHeaderText>Informações do carro </BodyHeaderText>

        <FormContainer>
          <Form initialData={car} ref={formRef} onSubmit={handleEditCar}>
            <InputAdmin name="name" icon="car" placeholder="Nome do carro" />
            <InputAdmin name="brand" icon="car" placeholder="Marca " />
            <InputAdmin name="model" icon="car" placeholder="Modelo " />

            <InputAdmin
              name="car_trim"
              icon="car"
              placeholder="Versão do carro"
            />

            <InputContainer>
              <InputAdmin
                value={car.km.toString()}
                keyboardType="numeric"
                name="km"
                icon="tachometer-alt"
                placeholder="KM"
              />
              <InputAdmin
                value={car.year.toString()}
                keyboardType="numeric"
                name="year"
                icon="calendar"
                placeholder="Ano"
              />
            </InputContainer>
            <InputAdmin name="transmission" icon="car" placeholder="Câmbio" />

            <InputContainer>
              <InputAdmin
                value={car.price.toString()}
                keyboardType="numeric"
                name="price"
                icon="money-bill"
                placeholder="Preço"
              />
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

        <BodyText>O que deseja fazer ? </BodyText>

        <ActionButtonContent>
          <ButtonEditContainer>
            <ButtonText
              onPress={() => {
                formRef.current?.submitForm();
              }}>
              Editar Dados
            </ButtonText>
          </ButtonEditContainer>

          <ButtonExcludeContainer onPress={() => deleteCar(car.id)}>
            <ButtonText>Excluir Carro</ButtonText>
          </ButtonExcludeContainer>
        </ActionButtonContent>
      </Container>
    </ScrollView>
  );
};

export default SelectedCarEdit;
