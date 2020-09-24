import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;

  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1024px) {
    height: 100%;

    padding: 10%;
    
    background: ${props => props.theme.colors.primary};
    
    .presentation {
      display: flex;
      justify-content: center;
      align-items: center;


      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        padding: 10%;
        border-radius: 12px;

        background: #FFF;

        img {
          width: 40%;
        }

        h1 {
          font-size: 1.3rem;
        }

        .description {
          height: 50%;

          text-align: center;
          line-height: 2px;
          letter-spacing: 1px;
          font: 400 1rem Roboto, sans-serif;
        }

        button {
          margin-top: 5%;
        }
      }
    }

    .home-page {
      display: none;
    }
  }

  @media (min-width: 1024px) {
    height: 100vh;

    .presentation {
      display: flex;
      justify-content: flex-end;
      align-items: center;

      background: ${props => props.theme.colors.primary};

      width: 50vw;
      height: 100vh;

      .content {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        width: calc(50vw - 10vh);
        height: calc(100vh - 20vh);

        padding: 5%;
        border-radius: 12px 0 0 12px;

        background: #FFF;

        img {
          width: 40%;
        }

        .description {
          text-align: center;
          line-height: 2px;
          letter-spacing: 1px;
          font: 400 1.2rem Roboto, sans-serif;
        }

        button {
          width: 40%;
          height: 8%;
          font-size: 1.5rem;
        }
      }
    }

    .home-page {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      background: #FFF;

      width: 50vw;
      height: 100vh;

      div {
        display: flex;
        justify-content: center;
        align-items: center;

        background: ${props => props.theme.colors.primary};

        width: calc(50vw - 10vh);
        height: calc(100vh - 20vh);
        
        border-radius: 0 12px 12px 0;

        img {
          border-left: 0.5px solid #FFF;
          border-top: 0.5px solid #FFF;
          border-right: 0.5px solid #FFF;
          border-radius: 6px;
          height: 80%;
        }
      }
    }
  }
`;
