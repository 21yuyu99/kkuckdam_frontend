import { BookContainer, BookShelfContainer } from "./bookshelf.style"
import Image from "next/image";
import Bookshelf from "@/public/img/library/review_book/bookshelf.png";
import ultra_rev from "@/public/img/library/review_book/ultra_rev.png"
import EconomicReciepe_rev from "@/public/img/library/review_book/EconomicReciepe_rev.png"
import RichFather from "@/public/img/library/review_book/RichFather.png"
import bear_rev from "@/public/img/library/review_book/bear_rev.png"
export const BookShelf = () => {
    return(
        <BookShelfContainer>
            <Image src = {Bookshelf} alt = "책꽂이"/>
        <BookContainer>
                <Image src = {ultra_rev} alt = "초수익성장주투자" width = {24} height = {97}/>
                <Image src = {bear_rev} alt = "베어마켓" width = {24} height = {97}/>
                <Image src = {EconomicReciepe_rev} alt = "장하준의경제학레시피" width = {24} height = {97}/>
                <Image src = {RichFather} alt = "부자아빠" width = {24} height = {97}/>
        </BookContainer>
        </BookShelfContainer>

    )
}
export const EmptyBookShelf = () => {
    return(
        <>
        <BookShelfContainer>
            <Image src = {Bookshelf} alt = "책꽂이" width = {335} height = {42} />
        </BookShelfContainer>
        </>

    )
}