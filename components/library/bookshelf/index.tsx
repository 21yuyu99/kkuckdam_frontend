import { BookContainer, BookShelfContainer } from "./bookshelf.style"
import Image from "next/image";
import Bookshelf from "@/public/img/library/review_book/bookshelf.png";
import ultra_rev from "@/public/img/library/review_book/ultra_rev.png"
import economicReciepe_rev from "@/public/img/library/review_book/EconomicReciepe_rev.png"
import richFather from "@/public/img/library/review_book/RichFather.png"
import bear_rev from "@/public/img/library/review_book/bear_rev.png"
import selfImprovement from "@/public/img/library/review_book/selfImprovement.png"
import { useEffect, useState } from "react";
import Link from "next/link";
export const BookShelf = () => {
    const [text,setText] = useState("");
    useEffect(()=>{
        if(localStorage.getItem("reviewText")!=null)
            setText(localStorage.getItem("reviewText") as string);
    });
    return(
        <BookShelfContainer>
            <Image src = {Bookshelf} alt = "책꽂이"/>
        <BookContainer>
                <Image src = {ultra_rev} alt = "초수익성장주투자" width = {24} height = {97}/>
                <Image src = {bear_rev} alt = "베어마켓" width = {24} height = {97}/>
                <Image src = {economicReciepe_rev} alt = "장하준의경제학레시피" width = {24} height = {97}/>
                <Image src = {richFather} alt = "부자아빠" width = {24} height = {97}/>
                {(text!="")?<Link href="/library/review?writing=false"><Image src = {selfImprovement} alt = "자기관리론" width = {24} height = {97}/></Link>:<></>
}
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
