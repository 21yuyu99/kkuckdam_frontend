
import { BookInfoContainer, BookPopularity, Bookname,Writer,Timer, BookBoxContainer, BookListContainer, ReadingInfoContainer} from "./search_result.style"
import Image from 'next/image';
import unnecessaryWorries from "@/public/img/book/unnecessaryWorries.jpeg"
import selfManagement from "@/public/img/book/selfManagement.png"
import putDownWorry from '@/public/img/book/putDownWorry.jpeg'
import {AiFillStar} from "react-icons/ai";
import {BsFillBookmarkFill} from "react-icons/bs";
export const Result = () =>{
    const bookList = [
        {
            src : selfManagement,
            title : "카네기 자기관리론",
            writer : "데일 카네기(지은이), 임상훈(옮긴이)",
            star : 50,
            bookMark : 4.1,
            readingTime : 15 
        },
        {
            src : unnecessaryWorries,
            title : "쓸데없는 걱정따위",
            writer : "시미자키 칸(지은이), 전선영(옮긴이)",
            star : 94,
            bookMark : 5.7,
            readingTime : 17 
        },
        {
            src : putDownWorry,
            title : "걱정 내려놓기",
            writer : "강용(지은이)",
            star : 75,
            bookMark : 3.6,
            readingTime : 20 
        }
    ]
    return(
            <BookListContainer>
            {
            bookList.map((book,idx)=>
            <BookBoxContainer key={idx}>
                <Image src = {book.src} alt = "" width={100} height={100}/>
                <BookInfoContainer>
                    <Bookname>
                        {book.title}
                    </Bookname>
                    <Writer>
                        {book.writer}
                    </Writer>
                    <ReadingInfoContainer>
                    <Timer>
                        완독 소요시간 {book.readingTime}분
                    </Timer>
                    <BookPopularity>
                        <AiFillStar size={16}/>
                        <span>{book.star}</span>
                        <BsFillBookmarkFill size={12}/>
                        <span>{book.bookMark}</span>
                    </BookPopularity>
                    </ReadingInfoContainer>
            </BookInfoContainer>
            </BookBoxContainer>
                )
            }
            </BookListContainer>
    )
}