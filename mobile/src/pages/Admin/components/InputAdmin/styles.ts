import styled, {css} from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  background: #e2e0e0;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-right: 8px;
  border-width: 2px;
  border-color: #e2e0e0;

  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: #dc143c;
    `}
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #737272;
  font-size: 14px;
  font-family: 'Poppins-Medium';
`;

export const Icon = styled(FontAwesome5)`
  margin-right: 14px;
`;
