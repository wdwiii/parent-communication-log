import styled from 'styled-components';

const Button = styled.button`
  background: ${(props) => props.background};
  border-radius: 1rem;
  color: #ebebeb;
  font-size: 2.2rem;
  margin-block: 2.5rem;
  padding: 2rem;
  width: 25rem;
`;

export default Button;
