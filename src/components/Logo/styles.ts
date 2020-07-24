import styled from 'styled-components';

export const Container = styled.div`
  grid: PR;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--tertiary);
  padding: 11px 0;

  height: 150px;

  img {
    height: 60px;
    width: auto;
    
    margin-bottom: 8px;
  }
`;

export const Title = styled.div`
  font-family: 'Rubik';
  font-weight: 500;
  color: var(--grafith)
`;