import { Explain, FirstQuote, LastQuote, MainSaying, MainSayingContainer, ReviewContainer } from "./review.style"
import Image from 'next/image';

import BannerReview from "@/public/img/library/review.png"

export const ReviewBanner = () =>{
    return(
            <ReviewContainer>
                <MainSayingContainer>
                    <FirstQuote>
                        “
                    </FirstQuote>
                    <MainSaying>
                        <p>감정으로 생각하지 말고</p>
                        <p>생각을 하기 위해 감정을 사용하는</p>
                        <p>방법을 터득하십시오.</p>
                    </MainSaying>
                    <LastQuote>
                        ”
                    </LastQuote>
                </MainSayingContainer>
                <Explain>
                    <p>사람에서 가장 파괴적인 단어는 내일입니다.</p>
                    <p>내일이라는 단어를 자주 사용하는 사람들은 가난해지고 불행하고 또 실패합니다.
                    승자들의 단어는 오늘입니다. 당신의 일생을 바꾸는 단어 또한 오늘입니다.</p>
                    </Explain>
            </ReviewContainer>
            
    )
}