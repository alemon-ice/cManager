import styled from 'styled-components';

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.5);

  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

.close-modal {
  position: fixed;
  top: 25px;
  right: 25px;

  background: none;
  color: #FFF;
  font-size: 1.2rem;

  width: 25px;
  height: 25px;

  border: none;
}
`;

export const Container = styled.div`
  background: #FFF;
  color: #000;

  /* width: 100%;
  height: 100%; */

  border-radius: 12px;

  @media (max-width: 600px) {
    & {
      /* width: 90%;
      height: 90%; */
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  max-height: 70px;

  font-size: 1.1rem;

  border-bottom: 0.5px solid #CCC;
  padding: 5px 0;
  margin: 0 20px;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  /* width: calc(100% - 40px);
  height: calc(100% - 160px); */

  margin: 20px;
`;

export const Footer = styled.div`
display: flex;
flex-direction: row-reverse;
justify-content: right;
align-items: center;

height: 100%;
max-height: 70px;

padding: 20px;

button + button {
  margin-right: 20px;
}
`;
