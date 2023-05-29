import {ReadbookList, User_name, ReadList, TitleContainer} from "./readbook.style"
import Image from 'next/image';
import down from "@/public/img/library/down.png";
import ultraProfit from "@/public/img/book/ultra-profit.png"
import bearMarket from "@/public/img/book/bearMarket.png"
import selfManagement from "@/public/img/book/selfManagement.png"
import marketOverview from "@/public/img/book/MarketOverview.png"
import Link from "next/link";

export const UserReadBookList = () => {
    const bookList = [
        {
            img : ultraProfit,
            alt : "초수익 성장주 투자",
        },
        {
            img : bearMarket,
            alt : "베어마켓",
        },
        {
            img : selfManagement,
            alt : "자기관리론",
        },
        {
            img : marketOverview,
            alt : "시장학개론"
        }
    ]
    return (
        <ReadbookList>
            <TitleContainer>
                <Image src={down} alt="내리기" width={29} height={29} />
                <span>희선 님이 읽은 라이브북</span>
            </TitleContainer>
            <ReadList>
                {bookList.map(
                    (book,index)=>
                    <div key={(index)}>
                    <Image src={book.img} alt = {book.alt} width={100} height={153}/>
                    <span><Link href="/library/review">서평작성</Link></span>
                    </div>
                )}
            </ReadList>
        </ReadbookList>
    )
}