import styled from 'styled-components';

export const Container = styled.div`
  grid: PR;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  & > div > span {
    color: var(--silver);
    font-size: 12px;
  }
`;

export const Name = styled.div`
  font-weight: bold;
  color: var(--grafith);
  font-size: 13px;
`;

const imageSize = 45;
export const Circular = styled.div`
  width: ${imageSize}px;
  height: ${imageSize}px;
  border-radius: 50%;
  margin: 0 10px 0 0;

  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;

  overflow: hidden;

  img {
    height: ${imageSize}px;
  }
`;

