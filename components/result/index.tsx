
import { BookInfoContainer, BookInfo, Bookname,ThumbContainer,DetailContainer,Writer,Timer,BContainer, AContainer} from "./result.style"
import Image from 'next/image';
import Selfmanage from '@/public/img/result/_selfmanagement.png'
import PutDownWorry from '@/public/img/result/putdownworry.png'
import Unnecessary from '@/public/img/result/unnecessary.png'
import Star from "@/public/img/result/star.png"
import Mark from "@/public/img/result/mark.png"

export const Result = () =>{
    return(
            <DetailContainer>
            <BContainer>
            <AContainer>
            <ThumbContainer>
                <Image src = {Selfmanage} alt = "자기관리론" width = {170}/>
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
                <span className = "write-style">데일 카네기(지은이), 임상훈(옮긴이)</span>
            </Writer>
            <Timer>
                <span className = "write-style">완독 소요시간 15분</span>
            </Timer>
            </AContainer>
            </BContainer>

            <BContainer>

            <AContainer>

            <ThumbContainer>
                <Image src = {Unnecessary} alt = "쓸데없는 걱정따위" width = {170}/>
            </ThumbContainer>
                <BookInfoContainer>
                    <Bookname>
                        <span>쓸데없는 걱정따위 </span>
                    </Bookname>
                    <BookInfo>
                        <Image src = {Star} alt = "별점" width = {10}/>
                        <span> 94</span>
                        <span> </span>
                        <Image src = {Mark} alt = "북마크" width = {10}/>
                        <span> 5.7</span>
                    </BookInfo>
                </BookInfoContainer>
            <Writer>
                <span className = "write-style">시미자키 칸(지은이), 전선영(옮긴이)</span>
            </Writer>
            <Timer>
                <span className = "write-style">완독소요시간 17분</span>
            </Timer>
            </AContainer>
            </BContainer>
            
            <BContainer>

            <AContainer>

            <ThumbContainer>
                <Image src = {PutDownWorry} alt = "걱정 내려놓기" width = {170}/>
            </ThumbContainer>
                <BookInfoContainer>
                    <Bookname>
                        <span>걱정 내려놓기 </span>
                    </Bookname>
                    <BookInfo>
                        <Image src = {Star} alt = "별점" width = {10}/>
                        <span> 75</span>
                        <span> </span>
                        <Image src = {Mark} alt = "북마크" width = {10}/>
                        <span> 3.6</span>
                    </BookInfo>
                </BookInfoContainer>
            <Writer>
                <span className = "write-style">강용(지은이) </span>
            </Writer>
            <Timer>
                <span className = "write-style">완독소요시간 20분</span>
            </Timer>
            </AContainer>
            </BContainer>

            </DetailContainer>
    )
}