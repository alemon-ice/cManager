import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: left;
  align-items: center;

  label {
    width: 100px;

    font-size: 1.3rem;
    text-align: right;

    margin-right: 1rem;
  }

  textarea {
    height: 100%;
    width: 300px;
    max-height: 100px;
    
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

  @media (max-width: 600px) {
    flex-direction: column;
    
    width: 100%;
    
    & label {
      text-align: left;
      
      width: 100%;

      margin: 0;
    }
    
    & textarea {
      width: 100%;
    }
  }
`;
