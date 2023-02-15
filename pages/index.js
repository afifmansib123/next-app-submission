import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Afif Page</title>
    </Head>
    <h1>Afif page</h1>
    <p>
      this is my sample page
    </p>
    <Link href="/about">About</Link>
    </>
  )
}