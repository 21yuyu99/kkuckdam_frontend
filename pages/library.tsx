import { Main } from '@/styles/home.style'
import { KkukBanner } from '@/components/kkuk'
import {Nav} from '@/components/lib_nav'
import {BookShelf} from '@/components/bookshelf'
import {Review} from '@/components/lib_review'
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
        <Nav/>
        <BookShelf/>
        <BookShelf/>
        <Review/>
      </Main>
    </>
  )
}