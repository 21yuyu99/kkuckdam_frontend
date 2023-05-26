import { Main } from '@/styles/home.style'
import { KkukBanner } from '@/components/kkuk'
import {Nav} from '@/components/lib_nav'
import {BookShelf} from '@/components/bookshelf'
import {ReviewBanner} from '@/components/reviewbanner'
import {ReviewBookList} from '@/components/reviewBookList'
import {UserReadBookList} from '@/components/lib_userreadbook'
import {BottomBar} from '@/components/bottomBar'
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
        <ReviewBookList/>
        <BookShelf/>
        <ReviewBanner/>          
        <UserReadBookList/>
        <BottomBar/>
      </Main>
    </>
  )
}