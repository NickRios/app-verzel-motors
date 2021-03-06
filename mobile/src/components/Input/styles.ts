import styled, {css} from 'styled-components/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  background: #190f35;
  border-radius: 15px;
  margin-bottom: 10px;
  border-width: 2px;
  border-color: #190f35;

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
  color: #fff;
  font-size: 14px;
  font-family: 'Poppins-Medium';
`;

export const Icon = styled(MaterialIcon)`
  margin-right: 14px;
`;
