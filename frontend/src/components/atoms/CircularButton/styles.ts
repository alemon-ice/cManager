import styled from 'styled-components';
import { lighten } from 'polished';

export const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.lightText};
  font: 700 16px Roboto, sans-serif;

  width: 15vw;
  height: 15vw;
  max-width: 60px;
  max-height: 60px;

  padding: 5px 15px;
  border-radius: 100px;
  border: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${(props) => lighten(0.1, props.theme.colors.primary)};
    transition: 0.5s;
    cursor: pointer;
  }

  img {
    max-width: 25px;
  }

  position: absolute;
  right: 25px;
  bottom: 25px;

  @media (min-width: 600px) {
    & {
      display: none;
    }
  }
`;
