import {ReadbookList, User_name, ReadList, TitleContainer} from "./readbook.style"
import Image from 'next/image';
import Down from "@/public/img/library/down.png";
import UltraProfit from "@/public/img/book/ultra-profit.png"
import BearMarket from "@/public/img/book/bearMarket.png"
import SelfManagement from "@/public/img/book/selfManagement.png"
import MarketOverview from "@/public/img/book/MarketOverview.png"

export const UserReadBookList = () => {
    return (
        <ReadbookList>
            <TitleContainer>
                <Image src={Down} alt="내리기" width={29} height={29} />
                <span>희선 님이 읽은 라이브북</span>
            </TitleContainer>
            <ReadList>
            <div>
            <Image src={UltraProfit} alt = "초수익 성장주 투자" width={100} height={153}/>
            <span>서평작성</span>
            </div>
            <div>
            <Image src={BearMarket} alt = "베어마켓" width={100} height={153}/>  
            <span>서평작성</span>
            </div>
            <div>
            <Image src={SelfManagement} alt = "자기관리론" width={100} height={153}/>
            <span>서평작성</span>
            </div>
            <div>
            <Image src={MarketOverview} alt = "시장학개론" width={100} height={153}/>
            <span>서평작성</span>
            </div>
            </ReadList>
        </ReadbookList>
    )
}