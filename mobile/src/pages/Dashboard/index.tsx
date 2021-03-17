import React from 'react'
import { View, Button } from 'react-native'

import { Container, Title, TitleText } from './styles'
import { useAuth } from '../../hooks/auth'

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <Title>
      <TitleText> Menu </TitleText>
      </Title>

      <View>
        <Button title='Sair' onPress={signOut} />
      </View>
    </Container>
  )
}

export default Dashboard
