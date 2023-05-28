import Image, { StaticImageData } from "next/image";
import { BannerWrapper, Container, PaginationContainer, PointCircle, UnPointCircle } from "./mainBanner.style";
import canRead from "@/public/img/banner/canRead.png";
import bookAd from "@/public/img/banner/bookAd.png";
import paperBook from "@/public/img/banner/paperBook.png";
import { useState } from "react";
export const MainBanner = () =>{
  const bannerList = [
    {
      img : canRead,
      explain : "누구나 완독할 수 있어\n꾹담이 있으니까",
    },
    {
      img : bookAd,
      explain : "아무리 힘든 일이라도 누구나\n 하루동안은 할 수 있다."
    },
    {
      img : paperBook,
      explain : "종이책 구독 서비스 시작"
    }
  ];
const [selectedBanner,setBanner] = useState(0);
let count = 1;
if(typeof(document)!="undefined"){
}
// ul.style.width = `${outer.clientWidth * inners.length}px`; // innerList의 width를 inner의 width * inner의 개수로 만들기
  const onClickHandler = ()=>{
    // if(typeof(document)!="undefined"){
    //  setBanner((selectedBanner + 1)% 3);
    // }
    if(typeof(document)!="undefined"){
      let deviceWidth = document.body.clientWidth;
      const ul = document.querySelector(`#ul`);
      const li = document.querySelector(`#li${selectedBanner}`);
      if(ul instanceof HTMLElement){
        ul.style.marginLeft = `-${deviceWidth*count-15*count}px`;
        count++;
      }    
    }
  }
  return(
    <Container id="container" onClick={()=>onClickHandler()}>
      <BannerWrapper id="ul">
        <Image className = "li" id={`li${selectedBanner}`} src={bannerList[selectedBanner].img} alt={bannerList[selectedBanner].explain}/>
        <Image className = "li" id={`li${selectedBanner+1}`} src={bannerList[(selectedBanner+1)%3].img} alt={bannerList[(selectedBanner+1)%3].explain}/>
        <Image className = "li" id={`li${selectedBanner+2}`} src={bannerList[(selectedBanner+2)%3].img} alt={bannerList[(selectedBanner+1)%3].explain}/>
      </BannerWrapper>
      <PaginationContainer>
        <PointCircle/>
        <UnPointCircle/>
        <UnPointCircle/>
      </PaginationContainer>
    </Container>
  )
}