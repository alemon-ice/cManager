import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  
  form > * {
    margin-top: 20px;
  }

  @media (max-width:600px) {
    form > * {
      margin-top: 20px;

      label {
        font-size: 1rem;
        margin: 0 0 5px;
      }

      input, textarea {
        font-size: 1rem;
      }
    }
  }
`;
