import styled from 'styled-components';
import { lighten } from 'polished';

export const StyledButton = styled.button`
  &.default {
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.lightText};
    font: 700 16px Roboto, sans-serif;

    padding: 5px 15px;
    border-radius: 6px;
    border: 0;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  &:hover {
    background: ${(props) => lighten(0.1, props.theme.colors.primary)};
    transition: 0.5s;
    cursor: pointer;
  }

  img {
    max-width: 20px;
    max-height: 20px;
  }

  &.button-secondary {
    border: 1px solid ${(props) => props.theme.colors.lightText};
  }

  &.button-tertiary {
    background: ${(props) => props.theme.colors.tertiary};
    color: ${(props) => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

  &.button-danger {
    background: ${(props) => props.theme.colors.danger};
    color: ${(props) => props.theme.colors.lightText};
    border: 0;
  }
`;
