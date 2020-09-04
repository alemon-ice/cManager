import styled from 'styled-components'

export const Container = styled.div`
  background: #00c2cb;

  width: 100vw;
  height: 10vh;

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  padding: 0 10%;

  img {
    height: 10vh;
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
