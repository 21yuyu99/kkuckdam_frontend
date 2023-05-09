import { TopBar } from '@/components/topBar'
import { SearchBar } from '@/components/topBar/searchBar'
import Head from 'next/head'
export default function Home() {
  return (
    <>
      <Head>
        <title>꾹담</title>
      </Head>
      <TopBar/>
    </>
  )
}