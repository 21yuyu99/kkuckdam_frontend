import { Main } from '@/styles/home.style'
import { KkukBanner } from '@/components/library'
import Head from 'next/head'
import { useEffect } from 'react'
import { useSelector } from 'react-redux';

export default function library() {
  return (
    <>
      <Head>
        <title>꾹담</title>
      </Head>
      <Main>
        <KkukBanner/>
      </Main>
    </>
  )
}