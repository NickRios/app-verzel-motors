import React from 'react'
import { Image, View ,StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Container, Title, TitleText, StartButton, StartButtonText } from './styles'

import Image1 from '../../assets/Image1.png'
import Image2 from '../../assets/Image2.png'
import Image3 from '../../assets/Image3.png'

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  img1: {
    left: 180
  },
  img2: {
    left: 10
  },
  img3: {
    left: 160
  },
});

const PageOne: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <View style={styles.container}>
        <Image style={styles.img1} source={Image3} />

        <Image style={styles.img2} source={Image2} />

        <Image  style={styles.img3} source={Image1} />
      </View>
      
      <Title>
        <TitleText>Agende e </TitleText>
        <TitleText>Realize</TitleText>
        <TitleText>Consultas</TitleText>
        <TitleText>Online</TitleText>  
      </Title>
      
      <StartButton onPress={() => navigation.navigate('SignIn')}><StartButtonText>Iniciar</StartButtonText>

      </StartButton>


    </Container>
  )
}

export default PageOne;