import styled from 'styled-components';

export const Container = styled.div`
  animation: transitionIn 1s;
  @keyframes transitionIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  display: grid;
  grid-template-columns: 6fr 3fr;
  grid-column-gap: 3%;

  width: 100vw;
  height: 90vh;

  min-width: 100%;
  min-height: 100%;

  padding: 6vh 4vw;
  /* padding: 3%; */

  @media (max-width: 900px) {
    & {
      display: flex;
      flex-direction: column;

      padding: 6%;
    }

    & div {
      margin-bottom: 6%;
      margin-left: 0;
    }
  }
`;

export const CalendarContainer = styled.div`
  border-radius: 12px;
  box-shadow: 1px 1.5px #CCC;

  background: #FFF;

  .message {
    width: 100%;
    height: 100%;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;