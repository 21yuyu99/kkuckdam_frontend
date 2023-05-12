import { Title } from "../category/category.style"
import { ListContainer } from "./recommend.style"
import BearMarket from "@/public/img/book/bearMarket.png"
import UltraProfit from "@/public/img/book/ultra-profit.png"
import NatureOfMoney from "@/public/img/book/natureOfMoney.png"
import SelfManagement from "@/public/img/book/selfManagement.png"
import RichFriend from "@/public/img/book/richFriend.png"
import RichDad from "@/public/img/book/richDad.png"
import TrendKorea from "@/public/img/book/treanKorea.png"
import EconomicRecipe from "@/public/img/book/economicRecipe.png"
import Leverage from "@/public/img/book/leverage.png"
import Image from "next/image"
export const Recommend = () =>{
  return(
    <>
    <ForYouBook/>
    <PopularBook/>
    </>
  )
}
export const ForYouBook = () =>{
  return(
    <>
    <Title>희선님에게 엄선된 라이브북</Title>
    <ListContainer>
      <Image src={SelfManagement} alt = "자기관리론" width={143} height={220}/>
      <Image src={UltraProfit} alt = "초수익 성장주 투자" width={143} height={220}/>
      <Image src={BearMarket} alt = "베어마켓" width={163.8} height={252}/>  
      <Image src={NatureOfMoney} alt = "돈의 속성" width={143} height={220}/>
      <Image src={RichFriend} alt = "나의 돈 많은 고등학교 친구" width={143} height={220}/>
    </ListContainer>
    </>
  )
}
export const PopularBook = () =>{
  return(
    <>
    <Title>실시간 가장 인기있는 라이브북</Title>
    <ListContainer>
      <Image src={TrendKorea} alt="트렌드 코리아" width={104} height={160}/>
      <Image src={BearMarket} alt = "베어마켓" width={104} height={160}/>  
      <Image src={EconomicRecipe} alt = "장하준의 경제학 레시피" width={104} height={160}/>  
      <Image src={Leverage} alt = "레버리지" width={104} height={160}/>  
      <Image src={RichDad} alt="부자 아빠" width={104} height={160}/>
    </ListContainer>
    </>
  )
}