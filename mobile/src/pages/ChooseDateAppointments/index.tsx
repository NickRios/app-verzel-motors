import React, { useCallback, useState, useMemo }from 'react'
import { Image, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import DateTimePicker from '@react-native-community/datetimepicker'
import { parseISO, format } from 'date-fns'


import { Container,
  Background,
  Header,
  BackButton,
  HeaderTitle,
  SubTitle,
  SubTitleText,
  OpenDatePickerButton,
  OpenDatePickerButtonText,
  Schedule,
  ScheduleTitle,
  Section,
  SectionTitle,
  SectionContent,
  Hour,
  HourText,
  CreateAppointmentButton,
  CreateAppointmentButtonText
} from './styles'


import date from '../../assets/date.png'

import { useAuth } from '../../hooks/auth'


const horarios = [
  {hora: '2021-03-30T08:00:00.000Z'},
  {hora: '2021-03-30T09:00:00.000Z'},
  {hora: '2021-03-30T10:00:00.000Z'},
  {hora: '2021-03-30T11:00:00.000Z'},
  {hora: '2021-03-30T12:00:00.000Z'},
  {hora: '2021-03-30T13:00:00.000Z'},
  {hora: '2021-03-30T14:00:00.000Z'},
  {hora: '2021-03-30T15:00:00.000Z'},
  {hora: '2021-03-30T16:00:00.000Z'},
  {hora: '2021-03-30T17:00:00.000Z'},
  {hora: '2021-03-30T18:00:00.000Z'},
  {hora: '2021-03-30T19:00:00.000Z'},
  {hora: '2021-03-30T20:00:00.000Z'},
  {hora: '2021-03-30T21:00:00.000Z'},
  {hora: '2021-03-30T22:00:00.000Z'},
]


const ChooseDateAppointments: React.FC = () => {

  const { goBack } = useNavigation();
  const navigation = useNavigation();

	const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date())


  const handleToggleDatePicker = useCallback(() => {
    setShowDatePicker((state) => !state)
  }, [])

  const handleDateChanged = useCallback((event: any, date: Date | undefined) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false);
    }

    if (date) {
      setSelectedDate(date);
    }
  }, [])

  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack]);

  const morningAppointments = useMemo(() => {
    return horarios.filter((horario) => {
      return parseISO(horario.hora).getHours() <= 12;
    });
  }, [horarios]);

  const afternoonAppointments = useMemo(() => {
    return horarios.filter((horario) => {
      return parseISO(horario.hora).getHours() > 12 && parseISO(horario.hora).getHours() <= 18;
    });
  }, [horarios]);

  const nightAppointments = useMemo(() => {
    return horarios.filter((horario) => {
      return parseISO(horario.hora).getHours() > 18;
    });
  }, [horarios]);

  const [selectedHour, setSelectedHour] = useState('')

  const formatHour = (horaString: string) => {
    return format(new Date(horaString), 'HH:mm')
  }

  return (
    <Container>
      <Background>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="arrow-left" size={30} color="#000" />
        </BackButton>

        <HeaderTitle>Agendar</HeaderTitle>

      </Header>

      </Background>

      <SubTitle>
        <SubTitleText>Escolha a Data</SubTitleText>

        <Image source={date} />
      </SubTitle>

      <OpenDatePickerButton onPress={handleToggleDatePicker}>
        <OpenDatePickerButtonText>Selecionar uma data</OpenDatePickerButtonText>
      </OpenDatePickerButton>

			{showDatePicker && (<DateTimePicker
				mode="date"
				display="calendar"
        onChange={handleDateChanged}
				value={selectedDate}
			/> )}

        <Schedule>
          <ScheduleTitle>Escolha horário</ScheduleTitle>

          <Section>
            <SectionTitle>Manhã</SectionTitle>
            <SectionContent>
              {(morningAppointments || []).map(horario => (
                <Hour selected={selectedHour == formatHour(horario.hora)}
                onPress={() => setSelectedHour(formatHour(horario.hora))}
                >
                  <HourText>{formatHour(horario.hora)}</HourText>
                </Hour>
              ))}
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Tarde</SectionTitle>
            <SectionContent>
              {(afternoonAppointments || []).map(horario => (
                <Hour selected={selectedHour == formatHour(horario.hora)}
                onPress={() => setSelectedHour(formatHour(horario.hora))}
                >
                  <HourText>{formatHour(horario.hora)}</HourText>
                </Hour>
              ))}
            </SectionContent>
          </Section>

          <Section>
            <SectionTitle>Noite</SectionTitle>
            <SectionContent>
              {(nightAppointments || []).map(horario => (
                <Hour selected={selectedHour == formatHour(horario.hora)}
                onPress={() => setSelectedHour(formatHour(horario.hora))}
                >
                  <HourText>{formatHour(horario.hora)}</HourText>
                </Hour>
              ))}
            </SectionContent>
          </Section>


        </Schedule>

        <CreateAppointmentButton onPress={() => navigation.navigate('AppoimentsCreated')}>
          <CreateAppointmentButtonText>Agendar</CreateAppointmentButtonText>
        </CreateAppointmentButton>


    </Container>
  )
}

export default ChooseDateAppointments
