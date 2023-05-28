import { Main } from '@/styles/home.style'
import { KkukBanner } from '@/components/library/kkuck'
import {ToggleBtn} from '@/components/library/toggleBtn'
import {BookShelf, EmptyBookShelf} from '@/components/library/bookshelf'
import {ReviewBanner} from '@/components/library/reviewbanner'
import {UserReadBookList} from '@/components/library/lib_userreadbook'
import {BottomBar} from '@/components/bottomBar'
import Head from 'next/head'
import { Margin } from '@/styles/library.style'

export default function library() {
  return (
    <>
      <Head>
        <title>꾹담</title>
      </Head>
      <Main>
        <KkukBanner/>
        <ToggleBtn/>
        <BookShelf/>
        <EmptyBookShelf/>
        <Margin/>
        <ReviewBanner/>          
        <UserReadBookList/>
        <BottomBar/>
      </Main>
    </>
  )
}