import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;

  label {
    width: 100px;

    font-size: 1.3rem;
    text-align: right;

    margin-right: 1rem;
  }

  & .inputs {
    display: flex;
    justify-content: space-between;

    width: 300px;
  }

  input {
  height: 100%;
  width: 90px;
  max-height: 40px;
  
  background: #FFF;
  font-size: 1.3rem;

  padding: 1rem;
  border: 1px solid #CCC;
  border-radius: 6px;
  outline: 0;
}
`;
