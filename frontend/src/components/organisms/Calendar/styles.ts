import styled from 'styled-components';

import Calendar from 'react-calendar';
import { lighten, shade } from 'polished';

export const ReactCalendar = styled(Calendar)`
  /* & > .react-calendar {
    width: 350px;
    max-width: 100%;
    background: white;
    border: 1px solid #a0a096;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  } */

  width: 100%;
  height: 100%;
  margin: 0;

  /* & > .react-calendar--doubleView {
    width: 700px;
  } */
  & > .react-calendar--doubleView .react-calendar__viewContainer {
    /* display: flex;
    margin: -0.5em; */
  }
  & > .react-calendar__viewContainer {
    padding: 2%;
    margin: 0;
  }
  & > .react-calendar--doubleView .react-calendar__viewContainer > * {
    /* width: 50%;
    margin: 0.5em; */
  }
  & > .react-calendar,
  & > .react-calendar *,
  & > .react-calendar *:before,
  & > .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  & > .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  & > .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  & > .react-calendar__navigation {
    /* height:44px;
    margin-bottom: 1em; */

    height: 8%;
    background: ${props => props.theme.colors.primary};

    margin: 0;
    border-radius: 12px;
  }
  & > .react-calendar__navigation button {
    min-width: 10%;
    background: none;

    font: bold 150% Roboto, sans-serif;
    color: #FFF;
    border: 0;
    border-radius: 12px;
  }
  & > .react-calendar__navigation button:enabled:hover {
    /* background-color: #e6e6e6; */

    background: ${(props) => lighten(0.1, props.theme.colors.primary)};
  }
  & > .react-calendar__navigation button[disabled] {
    /* background-color: #f0f0f0; */

    background: ${(props) => lighten(0.1, props.theme.colors.primary)};
  }
  .react-calendar__month-view {
    margin: 0;
    
    div {
      margin: 0;
    }
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;

    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0;

    div {
      margin: 0;
      margin: 2% 0;

      abbr {
        text-decoration: none;
      }
    }
  }
  /* .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  } */
  .react-calendar__month-view__days {
    height: 100%;
  }
  .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    padding: calc(0.75em / 0.75) calc(0.5em / 0.75);
  }
  .react-calendar__month-view__days__day--weekend {
    /* color: #d10000; */
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #CCC;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }
  .react-calendar__tile {
    max-width: 100%;
    text-align: center;
    padding: 0.75em 0.5em;
    background: none;

    height: 100px;
    max-height: 100%;
    border-radius: 3px;
    border: 0.5px solid #CCC;
  }
  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__tile:enabled:hover {
    background-color: ${shade(0.1, "#FFF")};
  }
  .react-calendar__tile--now {
    background: ${props => props.theme.colors.primary};
  }
  .react-calendar__tile--now:enabled:hover {
    background: #ffffa9;
  }
  .react-calendar__tile--hasActive {
    background: #76baff;
  }
  .react-calendar__tile--hasActive:enabled:hover {
    background: #a9d4ff;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: ${props => props.theme.colors.primary};
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #e6e6e6;
  }

  /* Calendar Header and Day Calendar */
  @media (max-width: 900px) {
    & > .react-calendar__navigation button {
      font-size: 100%;
    }
    .react-calendar__tile {
      max-height: 10vw;
    }
  }

  /* Calendar Header */
  @media (max-width: 600px) {
    & > .react-calendar__navigation button {
      font-size: 75%;
    }
  }
`;
