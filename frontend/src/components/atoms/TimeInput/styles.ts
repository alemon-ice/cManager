import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  & label {
    font-size: 1.3rem;
    text-align: right;

    margin-right: 1rem;
  }

  & input {
    height: 100%;
    width: 135px;
    max-height: 40px;
    
    background: #FFF;
    font-size: 1.3rem;

    padding: 1rem;
    border: 0.5px solid #CCC;
    border-radius: 6px;
    outline: 0;

    &::-webkit-input-placeholder  {
      color:#C0C0C0;
    }
  }

  .start-time-label {
    width: 100px;
  }

  .end-time-label {
    margin-left: 1rem;
    width: calc(60px - 2rem);
  }

  @media (max-width: 600px) {
    width: 100%;

    .start-time-label,
    .end-time-label {
      text-align: left;

      width: 50%;

      margin-right: 0.8rem;
    }

    .end-time-label {
      width: 30%;
      margin-left: 0.8rem;
    }

    input {
      width: 100%;
    }
  }
`;
