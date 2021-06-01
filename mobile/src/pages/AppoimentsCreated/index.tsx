import React, { useCallback, useMemo } from "react";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation, useRoute } from "@react-navigation/native";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import api from '../../services/api'

import {
  Container,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from "./styles";

interface RouteParams {
  hospitalId: string;
  formatedDate: string;
}

const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();
  const route = useRoute();
  const routeParams = route.params as RouteParams;

  const { hospitalId, formatedDate } = routeParams

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
      <Description>{ `${formatedDate} no ${hospitalId}` }</Description>

      <OkButton onPress={handleOkPressed}>
        <OkButtonText>Okay</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default AppointmentCreated;
