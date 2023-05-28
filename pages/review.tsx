import { Main } from '@/styles/home.style'
import { BottomBar } from '@/components/bottomBar'
import { Review_TopBar, Book_Info, Text_Area } from '@/components/review'

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
            <Review_TopBar/>
            <Book_Info/>
            <Text_Area/>
            <BottomBar/>
        </Main>
      </>
    )
  }