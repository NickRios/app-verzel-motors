import React, { useCallback, useMemo } from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation, useRoute } from "@react-navigation/native";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import {
  Container,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from "./styles";


const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();

  const handleOkPressed = useCallback(() => {
    reset({
      routes: [{ name: "Dashboard" }],
      index: 0,
    });
  }, [reset]);


  return (
    <Container>
      <Icon name="check" size={90} color="#04d361" />

      <Title>Agendamento concluído</Title>
      <Description>Terça, dia 14 de novembro de 2021 às 13:30h no Centro Médico São Camilo</Description>

      <OkButton onPress={handleOkPressed}>
        <OkButtonText>Okay</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default AppointmentCreated;
