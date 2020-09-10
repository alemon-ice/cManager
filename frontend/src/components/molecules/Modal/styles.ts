import styled from 'styled-components';

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.8);

  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background: #FFF;
  color: #000;

  width: 60%;
  height: 60%;

  border-radius: 12px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  max-height: 50px;

  border-bottom: 0.5px solid #CCC;
  padding: 5px 0;
  margin: 0 20px;

  button {
    background: #FFF;

    width: 25px;
    height: 25px;

    border: none;
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: calc(100% - 40px);
  height: calc(100% - 160px);

  margin: 20px;
`;

export const Footer = styled.div`
display: flex;
justify-content: right;
align-items: center;

height: 100%;
max-height: 70px;

padding: 20px;

button + button {
  margin-left: 20px;
}
`;
