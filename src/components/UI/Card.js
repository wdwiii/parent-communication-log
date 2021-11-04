import styled from 'styled-components';

const Card = styled.div`
  background: ${(props) => props.background};
  border-radius: 1rem;
  margin: 0 auto;
  padding: 1rem;
  width: 90%;
`;

export default Card;
