import styled from 'styled-components';

export const Background = styled.div`
  animation: transitionIn 1s;
  @keyframes transitionIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  background: rgba(0, 0, 0, 0.6);

  width: 100%;
  height: 100%;
  position: fixed;
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

    width: 30px;
    height: 30px;

    border: none;
  }

  @media (max-width: 600px) {
    .close-modal {
      display: none;
    }
  }
`;

export const Container = styled.div`
  background: #FFF;
  color: #000;

  border-radius: 12px;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 5vh;

  font-size: 1.1rem;

  border-bottom: 0.5px solid #CCC;
  padding: 5px 0;
  margin: 0 20px;

  @media (max-width: 600px) {
    height: 50px;
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 40px 20px;

  @media (max-width: 600px) {
    width: 90%;
    margin: 0 5% 20px;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: right;
  align-items: center;

  height: 100%;
  max-height: 70px;

  border-top: 0.5px solid #CCC;
  padding: 20px 0;
  margin: 0 20px;

  button + button {
    margin-right: 20px;
    padding: 0 20px 20px;
  }
`;
