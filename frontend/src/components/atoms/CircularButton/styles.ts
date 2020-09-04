import styled from 'styled-components'

export const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.lightText};
  font: 700 16px Roboto, sans-serif;

  min-width: 35px;
  width: 35px;
  height: 35px;

  padding: 5px 15px;
  border-radius: 50px;
  border: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 25px;
  }

  position: absolute;
  right: 25px;
  bottom: 25px;
`
