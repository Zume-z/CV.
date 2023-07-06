import Head from 'next/head'
import { ReactNode, useEffect, useState } from 'react'
import localFont from '@next/font/local'

const proxima = localFont({
  src: [
    {
      path: '../assets/ProximaNovaRegular.otf',
    },
  ],
  variable: '--font-proxima-nova',
})

export default function Layout({ children }: { children: ReactNode }) {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    setTimeout(() => setOpacity(100), 500)
  }, [])

  return (
    <>
      <Head>
        <title>Brendan Elton</title>
        <meta name="description" content="Brendan Elton CV." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${proxima.className} flex w-screen justify-center text-[#414141] opacity-0  duration-[1000ms] `} style={{ opacity: opacity }}>
        {children}
      </main>
    </>
  )
}
