import { Main } from '@/styles/home.style'
import { KkukBanner } from '@/components/library/kkuck'
import {ToggleBtn} from '@/components/library/toggleBtn'
import {BookShelf} from '@/components/bookshelf'
import {ReviewBanner} from '@/components/library/reviewbanner'
import {ReviewBookList} from '@/components/library/reviewBookList'
import {UserReadBookList} from '@/components/library/lib_userreadbook'
import {BottomBar} from '@/components/bottomBar'
import Head from 'next/head'

export default function library() {
  return (
    <>
      <Head>
        <title>꾹담</title>
      </Head>
      <Main>
        <KkukBanner/>
        <ToggleBtn/>
        {/* <BookShelf/>
        <ReviewBookList/>
        <BookShelf/> */}
        <ReviewBanner/>          
        <UserReadBookList/>
        <BottomBar/>
      </Main>
    </>
  )
}