
import { BookInfoContainer, BookInfo, Bookname,ThumbContainer,DetailContainer,Writer,Timer } from "./result.style"
import Image from 'next/image';
import Selfmanage from '@/public/img/result/_selfManagement.png'
import Star from "@/public/img/result/star.png"
import Mark from "@/public/img/result/mark.png"

export const Result = () =>{
    return(
            <DetailContainer>

            <ThumbContainer>
                <Image src = {Selfmanage} alt = "자기관리론" width = {160}/>
            </ThumbContainer>
            <BookInfoContainer>
                <Bookname>
                    <span>카네기 자기관리론</span>
                </Bookname>
    
                <BookInfo>
                    <Image src = {Star} alt = "별점" width = {10}/>
                    <span> 50</span>
                    <span> </span>
                    <Image src = {Mark} alt = "북마크" width = {10}/>
                    <span> 4.1</span>
                </BookInfo>
            </BookInfoContainer>
            <Writer>
                <p>데일 카네기(지은이), 임상훈(옮긴이)</p>
            </Writer>
            <Timer>
                <p>완독 소요시간 15분</p>
            </Timer>
            </DetailContainer>


    )
}