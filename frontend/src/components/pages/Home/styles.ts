import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  width: 100vw;
  height: 92vh;

  min-width: 100%;
  min-height: 100%;

  padding: 3%;

  & div {
    margin-bottom: 3%;
    margin-left: 3%;
  }

  @media (max-width: 600px) {
    & {
      flex-direction: column;

      padding: 6%;
    }

    & div {
      margin-bottom: 6%;
      margin-left: 0;
    }
  }
`;

export const CalendarContainers = styled.div`
  width: 100%;
  height: 100px; /* FIXME */

  border-radius: 12px;
  box-shadow: 1px 1.5px #CCC;

  background: #FFF;

  & div {
    margin: 0;
  }
`;

export const ScheduleHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 60%;

  width: 100%;
  height: 40%;

  border-radius: 12px 12px 0 0;
  border-bottom: 0.1px solid #CCC;
`;