import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 6fr 3fr;
  grid-column-gap: 3%;

  width: 100vw;
  height: 92vh;

  min-width: 100%;
  min-height: 100%;

  padding: 3%;

  &:nth-child() {
    background: red;
  }

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
  /* min-width: 100%; */
  /* min-height: 100%; */

  border-radius: 12px;
  box-shadow: 1px 1.5px #CCC;

  background: #FFF;
`;