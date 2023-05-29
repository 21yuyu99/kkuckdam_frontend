import { Title } from "../category/category.style"
import { ListContainer, PopularBookContainer, RecommendContainer } from "./recommend.style"
import BearMarket from "@/public/img/book/bearMarket.png"
import UltraProfit from "@/public/img/book/ultra-profit.png"
import NatureOfMoney from "@/public/img/book/natureOfMoney.png"
import SelfManagement from "@/public/img/book/selfManagement.png"
import RichFriend from "@/public/img/book/richFriend.png"
import market from "@/public/img/book/market.png"
import TrendKorea from "@/public/img/book/treanKorea.png"
import EconomicRecipe from "@/public/img/book/economicRecipe.png"
import Leverage from "@/public/img/book/leverage.png"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
export const Recommend = () =>{
  return(
    <RecommendContainer>
    <ForYouBook/>
    <PopularBook/>
    </RecommendContainer>
  )
}
export const ForYouBook = () =>{
const [bookNum,setBookNum] = useState(3);
const [count,setCount] = useState(1);
useEffect(() => {
  // window.addEventListener("scroll", 
  // ()=>console.log(scrollY));
    let prevBook = document.getElementById(`book${bookNum-1}`);
    let book = document.getElementById(`book${bookNum}`);
    let nextBook = document.getElementById(`book${bookNum+1}`);
    // let top1 = text?.getBoundingClientRect().left;
    // console.log(top1);
    let bookContainer = document.getElementById("livebook");
    bookContainer?.scrollTo((836- screen.availWidth)/2,0);
    let currentScroll = (836- screen.availWidth)/2;
    bookContainer?.addEventListener("scroll",()=>{
      console.log(currentScroll);
      if(bookContainer instanceof HTMLElement && book instanceof HTMLElement && nextBook instanceof HTMLElement && prevBook instanceof HTMLElement){
        if(bookContainer.scrollLeft-currentScroll>=140){
          nextBook.style.transition = "1s ease-out";
          book.style.width = "143px";book.style.height="220px";
          nextBook.style.width = "170px";nextBook.style.height="260px";
          currentScroll = currentScroll+140;
        }
        // else if(bookContainer.scrollLeft-currentScroll<=140){
        //   prevBook.style.transition = "1s ease-out";
        //   book.style.width = "143px";book.style.height="220px";
        //   prevBook.style.width = "170px";prevBook.style.height="260px";
        //   currentScroll = currentScroll-140;
        // }
      }
    });
    // if(bookContainer instanceof HTMLElement){
    //   bookContainer.style.marginLeft = `-${180*count}px`;
    // }
    
},[]);
const router = useRouter();
const toDetailPage = (id:number)=>{
  router.push({
    pathname : "/detail",
    query : {id : id}
  })
}
  return(
    <>
    <Title>희선님에게 엄선된 라이브북</Title>
    <ListContainer id = "livebook">
      <Image id = "book1" src={SelfManagement} alt = "자기관리론" width={143} height={220} onClick={()=>toDetailPage(1)}/>
      <Image id = "book2" src={UltraProfit} alt = "초수익 성장주 투자" width={143} height={220}/>
      <Image id = "book3" src={BearMarket} alt = "베어마켓" width={170} height={260}/>  
      <Image id = "book4" src={NatureOfMoney} alt = "돈의 속성" width={143} height={220}/>
      <Image id = "book5" src={RichFriend} alt = "나의 돈 많은 고등학교 친구" width={143} height={220}/>
    </ListContainer>
    </>
  )
}
export const PopularBook = () =>{
  return(
    <>
    <Title>실시간 가장 인기있는 라이브북</Title>
    <PopularBookContainer>
    <ListContainer>
      <Image src={TrendKorea} alt="트렌드 코리아" width={104} height={160}/>
      <Image src={BearMarket} alt = "베어마켓" width={104} height={160}/>  
      <Image src={EconomicRecipe} alt = "장하준의 경제학 레시피" width={104} height={160}/>  
      <Image src={Leverage} alt = "레버리지" width={104} height={160}/>  
      <Image src={market} alt="시장학개론" width={104} height={160}/>
    </ListContainer>
    </PopularBookContainer>
    </>
  )
}