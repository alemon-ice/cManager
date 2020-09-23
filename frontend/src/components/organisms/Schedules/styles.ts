import styled from 'styled-components';

export const ScheduleHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  font-size: 60%;

  width: 100%;
  height: 6vh;
  min-height: 40px;

  margin: 0;

  border-radius: 12px 12px 0 0;
  border-bottom: 0.1px solid #CCC;

  @media (min-width: 600px) {
    font-size: 70%;
    max-height: 70px;
  }
`;

export const ScheduleList = styled.div`
  overflow: auto;

  height: 74vh;
  display: flex;
  flex-direction: column;

  margin: 0;
  padding: 0 7% 7%;
`;

export const NoDate = styled.p`
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;