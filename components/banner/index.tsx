import Image, { StaticImageData } from "next/image";
import { BannerWrapper, Container, PaginationContainer, Circle } from "./mainBanner.style";
import canRead from "@/public/img/banner/canRead.png";
import bookAd from "@/public/img/banner/bookAd.png";
import paperBook from "@/public/img/banner/paperBook.png";
import { useEffect, useRef, useState } from "react";
export const MainBanner = () =>{
  interface bannerType{
    img :  StaticImageData,
    explain : string,
    point : boolean
  }
  const bannerList:bannerType[] = [
    {
      img : canRead,
      explain : "누구나 완독할 수 있어\n꾹담이 있으니까",
      point : true,
    },
    {
      img : bookAd,
      explain : "아무리 힘든 일이라도 누구나\n 하루동안은 할 수 있다.",
      point : false
    },
    {
      img : paperBook,
      explain : "종이책 구독 서비스 시작",
      point : false
    }
  ];
  const [banners,setBanner] = useState(bannerList);
  const [count,setCount] = useState(1);
  interface IUseInterval {
    (callback: () => void, interval: number): void;
  }
  const useInterval: IUseInterval = (callback, interval) => {
    const savedCallback = useRef<(() => void) | null>(null);
    
    useEffect(() => {
      savedCallback.current = callback;
    });
    useEffect(() => {
      function tick() {
        if (savedCallback.current) {
          savedCallback.current();
        }
      }
  
      let id = setInterval(tick, interval);
      return () => clearInterval(id);
    }, [interval]);
  };
  useInterval(
    () => 
    {
      if(typeof(document)!="undefined"){
        let deviceWidth = document.body.clientWidth;
        const ul = document.querySelector(`#ul`);
        const li0 = document.querySelector(`#li0`);
        const li2 = document.querySelector(`#li2`);
        if(ul instanceof HTMLElement){
          setBanner(
            banners.map((banner,index)=>
              index == count?{...banner,point : true}:{...banner,point : false}
              )
          );
          if(count == 3){
            if(li0 instanceof HTMLElement && li2 instanceof HTMLElement){
                const newNode = li0.cloneNode(true);
                li2.after(newNode);
                ul.style.marginLeft = `-${deviceWidth*count-15*count}px`;
                setTimeout(()=>{
                  ul.style.transition = 'none';
                  ul.style.marginLeft = `0px`;
                },500);
                setCount(1);
                ul.style.transition = '.3s ease-out';
                setBanner(
                  banners.map((banner,index)=>
                    index == 0?{...banner,point : true}:{...banner,point : false}
                    )
                );
            }              
          }
          else{
            ul.style.transition = '.3s ease-out';
            ul.style.marginLeft = `-${deviceWidth*count-15*count}px`;
            setCount(count+1);
          }
        }    
      }
    }
    ,3000);
  return(
    <Container id="container">
      <BannerWrapper id="ul">
        <Image className = "li" id={`li0`} src={bannerList[0].img} alt={bannerList[0].explain}/>
        <Image className = "li" id={`li1`} src={bannerList[1].img} alt={bannerList[1].explain}/>
        <Image className = "li" id={`li2`} src={bannerList[2].img} alt={bannerList[2].explain}/>
      </BannerWrapper>
      <PaginationContainer>
        <Circle point={banners[0].point}/>
        <Circle point={banners[1].point}/>
        <Circle point={banners[2].point}/>
      </PaginationContainer>
    </Container>
  )
}