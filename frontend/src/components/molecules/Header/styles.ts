import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.primary};

  width: 100vw;
  height: 8vh;

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  padding: 0 5vw;

  img {
    height: 8vh;
  }

  @media (max-width: 600px) {
    & .button-secondary {
      display: none;
    }

    & {
      justify-content: center;
      padding: 0 10%;
    }
  }
`;
