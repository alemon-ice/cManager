import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};

  width: 100vw;
  height: 8vh;

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  padding: 0 5vw;

  img {
    height: 8vh;
  }

  /* FIXME Logo provisória */
  h1 {
    color: #fff;
  }

  @media (max-width: 1024px) {
    & .button-secondary {
      display: none;
    }

    & {
      justify-content: center;
      padding: 0 10%;
    }
  }
`
