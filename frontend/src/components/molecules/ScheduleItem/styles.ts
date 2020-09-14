import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 7%;

  border: 1px solid #DDD;
  border-radius: 6px;
  
  &:first-child {
    margin-top: 7%;
  }
`;

export const Details = styled.div`
  margin-bottom: 5%;
  padding: 0 7%;

  & > * {
    width: 100%;
  }

  p {
    text-align: center;
    margin-bottom: 5%;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    button + button {
      margin-left: 10px;
    }
  }
`;

export const InitialData = styled.div`
  display: grid;
  grid-template-columns: 4fr 5fr 2fr;

  width: 100%;

  padding: 6% 0;


  div {
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 1.1rem;
      text-align: center;
    }

    div {
      p {
        font-size: 90%;
      }

      p + p {
        margin-top: 10%;
      }

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
    }

    button {
      width: 100%;
      height: 100%;

      background: #FFF;
      
      border: 0;
    }
  }

  @media (max-width: 600px) {
    &:first-child {
      margin-top: 3%;
    }
    margin-bottom: 3%;
  }
`;
