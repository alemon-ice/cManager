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
  border: 1px solid #CCC;
  border-radius: 6px;
  outline: 0;
}
`;
