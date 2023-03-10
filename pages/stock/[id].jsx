import Head from "next/head"
import Link from "next/link"

// STEP 1: This function will be executed at the server before loading the page.
export async function getServerSideProps({ params }) {
  console.debug('params', params)
  const res = await fetch(`http://localhost:3000/api/stock/products/${params.id}`)
  const stock = await res.json()
  console.debug('stock 1', stock)
  return { props: { stock } }
}


// Step 2: This component is rendered from the server (Server-Side Rendering) SSR
export default function Stock({ stock }) {
  console.log('stock 2', stock)
  if (!stock) return (
    <div>
      <p>Stock not found</p>
      <Link href="/stock">Back</Link>
      </div>
  );

  return (
    <>
      <Head>
        <title>{stock.code}</title>
      </Head>
      <h1>{stock.code}</h1>
      <p>{stock.name}</p>
      <p>{stock.price}</p>
      <Link href="/stock">Back</Link>
    </>
  )
}

