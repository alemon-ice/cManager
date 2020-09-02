import React from 'react'
import Head from 'next/head'

// import cManagerLogo from '../assets/logo.png'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>cManager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <img src={cManagerLogo} alt="cManager logo" /> */}
        <h1>The project is configured.</h1>
      </main>
    </div>
  )
}

export default Home
