import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;

  label {
    font-size: 1.3rem;
    text-align: right;
    
    margin-right: 1rem;
  }

  input[type=checkbox] {
    width: 40px;
    height: 15px;
    border: 0.5px solid #CCC;
    border-radius: 6px;
    margin-left: 30px;
  }
`;
