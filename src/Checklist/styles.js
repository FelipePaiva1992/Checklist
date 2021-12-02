import styled from 'styled-components';
import CheckboxLabel from './components/CheckboxLabel';

export const AppContainer = styled.div`
text-align: center;
padding-bottom: 30px;

`;

export const AppTitle = styled.h1`

`;

export const TopicContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 10px;
`;

export const TopicTitle = styled.h3`

`;

export const TopicImage = styled.img`
height: 100px;
margin-top: 10px;
`;

export const Checkbox = styled(CheckboxLabel)`
`;

export const CheckboxContainer = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
  align-items: left;
`