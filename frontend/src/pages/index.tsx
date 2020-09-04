import React from 'react'
import Head from 'next/head'

import { Button } from '../components/atoms'
import { Header } from '../components/molecules'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>cManager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header>
          <Button
            styleButton="secondary"
            onClick={() => alert('Adicionar agendamento')}
          >
            Novo agendamento
          </Button>
        </Header>
      </main>
    </div>
  )
}

export default Home
