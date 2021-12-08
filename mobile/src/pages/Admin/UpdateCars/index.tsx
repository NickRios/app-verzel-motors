import React, {useState, useEffect, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import IconFont from 'react-native-vector-icons/FontAwesome5';
import IconFeather from 'react-native-vector-icons/Feather';
import api from '../../../services/api';
import {FlatList, ScrollView, Image, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '50%',
    height: '100%',
  },
});

import {
  Container,
  Title,
  TitleText,
  Header,
  BodyContainer,
  BodyHeaderText,
  BackButton,
  CardContainer,
  BrandText,
  ModelText,
  CardHeaderContainer,
  ContentContainer,
  CardInformationContainer,
  CarTrimContainer,
  CarTrimText,
  ValueContainer,
  ValueText,
  InformationContainer,
  InformationText,
  LineContainer,
  CardFooterContainer,
  RegionText,
  LocationText,
} from './styles';

export interface Cars {
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

const UpdateCars: React.FC = () => {
  const {goBack, navigate} = useNavigation();

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const [cars, setCars] = useState<Cars[]>([]);

  const navigateSelectedEditCar = useCallback(
    (car: object) => {
      navigate('SelectedCarEdit', {car});
    },
    [navigate],
  );

  const handleResquet = async () => {
    try {
      const {data} = await api.get('/cars');
      setCars(data.content);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleResquet();
  }, []);

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <Container>
        <Header>
          <BackButton onPress={navigateBack}>
            <IconFont name="arrow-left" size={23} color="#fff" />
          </BackButton>
          <Title>
            <TitleText> Editar </TitleText>
          </Title>
        </Header>

        <BodyContainer>
          <BodyHeaderText>Escolha um carro: </BodyHeaderText>

          <FlatList
            data={cars}
            keyExtractor={car => car.id}
            renderItem={({item}) => (
              <CardContainer onPress={() => navigateSelectedEditCar(item)}>
                <ContentContainer>
                  <CardInformationContainer>
                    <CardHeaderContainer>
                      <BrandText>{item.brand}</BrandText>
                      <ModelText>{item.model}</ModelText>
                    </CardHeaderContainer>

                    <CarTrimContainer>
                      <CarTrimText>{item.car_trim}</CarTrimText>
                    </CarTrimContainer>

                    <ValueContainer>
                      <ValueText>R$ {item.price}</ValueText>
                    </ValueContainer>
                  </CardInformationContainer>
                  <Image
                    resizeMode="contain"
                    style={styles.image}
                    source={{uri: item.image}}
                  />
                </ContentContainer>

                <InformationContainer>
                  <InformationText>{item.year}</InformationText>
                  <InformationText>{item.km} km</InformationText>
                  <InformationText>{item.color}</InformationText>
                </InformationContainer>
                <LineContainer />

                <CardFooterContainer>
                  <IconFeather name="map-pin" size={13} color="#000" />

                  <RegionText>{item.region}</RegionText>

                  <LocationText>{item.location}</LocationText>
                </CardFooterContainer>
              </CardContainer>
            )}
          />
        </BodyContainer>
      </Container>
    </ScrollView>
  );
};

export default UpdateCars;
