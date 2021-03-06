import React, {useState, useEffect, useCallback} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import api from '../../services/api';
import {FlatList, ScrollView, Image, StyleSheet} from 'react-native';

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

const Dashboard: React.FC = () => {
  const [cars, setCars] = useState<Cars[]>([]);

  const handleResquet = async () => {
    try {
      const {data} = await api.get('/cars');
      setCars(data.content);
    } catch (error) {
      throw new Error('Nenhum carro encontrado !!');
    }
  };

  useEffect(() => {
    handleResquet();
  }, []);

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <Container>
        <Header>
          <Title>
            <TitleText> Lista </TitleText>
          </Title>
        </Header>

        <BodyContainer>
          <BodyHeaderText>Carros Novos e Usados </BodyHeaderText>
          <FlatList
            data={cars}
            keyExtractor={car => car.id}
            renderItem={({item}) => (
              <CardContainer>
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
                  <Icon name="map-pin" size={13} color="#000" />

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

export default Dashboard;
