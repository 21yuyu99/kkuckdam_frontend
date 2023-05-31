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
const bookList = [
  {
    img : SelfManagement,
    alt : "자기관리론",
   },{
    img : UltraProfit,
    alt : "초수익 성장주 투자",
   },{
    img : BearMarket,
    alt : "베어마켓",
   },{
    img : NatureOfMoney,
    alt : "돈의 속성",
   },
   {
    img :RichFriend,
    alt : "나의 돈 많은 고등학교 친구",
   }
]
let bookNum = 7;
let count = 0;
let lock = false;
useEffect(() => {
  // window.addEventListener("scroll", 
  // ()=>console.log(scrollY));
      // let top1 = text?.getBoundingClientRect().left;
    // console.log(top1);

  let bookContainer = document.getElementById("livebook");
  bookContainer?.scrollTo((2360- screen.availWidth)/2,0);
//book 5~9
  let currentScroll = (836- screen.availWidth)/2;
  let prevBook: HTMLElement | null;
    // if(bookNum == 1)
    //   prevBook = document.getElementById(`book5`);
    // else
      prevBook = document.getElementById(`book${bookNum-1}`);
    let book = document.getElementById(`book${bookNum}`);
  let nextBook: HTMLElement | null;
    // if(bookNum == 5)
    //     nextBook = document.getElementById(`book1`);
    //else
      nextBook = document.getElementById(`book${bookNum+1}`);
        //console.log(currentScroll);
      bookContainer?.addEventListener("scroll",()=>{
      if(bookContainer instanceof HTMLElement && book instanceof HTMLElement && nextBook instanceof HTMLElement && prevBook instanceof HTMLElement){
        let changeScroll = bookContainer.scrollLeft-currentScroll; //762;
        console.log(changeScroll);
       // console.log(bookNum);
       //993
        if(changeScroll>=(830 + 68*count) && changeScroll < 960){ //830 - 762 = 68
          nextBook.style.transition = "1s ease-out";
          book.style.width = "135px";book.style.height="215px";
          nextBook.style.width = "170px";nextBook.style.height="260px";
          //currentScroll = currentScroll+860;
          bookNum++;
          count++;
        }
        console.log(count);
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
      {
        bookList.map((book,idx)=>{
          return(
            <Image key = {idx} id = {`book${idx}`} src={book.img} alt = {book.alt} width={135} height={215} onClick={()=>toDetailPage(idx+1)}/>
           )
        })
      }
      {
        bookList.map((book,idx)=>{
          return(
            idx == 2?<><Image key = {idx} id = {`book${idx+5}`} src={book.img} alt = {book.alt} width={170} height={260} onClick={()=>toDetailPage(idx-4)}/></>:<><Image key = {idx} id = {`book${idx+5}`} src={book.img} alt = {book.alt} width={135} height={215} onClick={()=>toDetailPage(idx-4)}/></>
           )
          })
      }
      {
        bookList.map((book,idx)=>{
         return(
          <Image key = {idx+10} id = {`book${idx+10}`} src={book.img} alt = {book.alt} width={135} height={215} onClick={()=>toDetailPage(idx-8)}/>
         )
        })
      }
      {/* <Image id = "book1" src={SelfManagement} alt = "자기관리론" width={135} height={215} onClick={()=>toDetailPage(1)}/>
      <Image id = "book2" src={UltraProfit} alt = "초수익 성장주 투자" width={135} height={215}/>
      <Image id = "book3" src={BearMarket} alt = "베어마켓" width={170} height={260}/>  
      <Image id = "book4" src={NatureOfMoney} alt = "돈의 속성" width={135} height={210}/>
      <Image id = "book5" src={RichFriend} alt = "나의 돈 많은 고등학교 친구" width={135} height={214}/> */}
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