import { IconWrapper, ItemContainer, ItemTitle, ListContainer } from "@/components/category/category.style";
import { BookHashTag, BookImgBox, BookIndex, BookInfoBox,Summary } from "@/components/detail";
import { DetailTopBar } from "@/components/topBar";
import textbook from "@/public/img/detail/textbook.png"
import livebook from "@/public/img/detail/livebook.png"
import { useRouter } from "next/router";
import { BookIndexWrapper, ForItemGap, ReadIconContainer, VideoWrapper } from "@/styles/detail.style";
import Image from "next/image";
import Link from "next/link";
export default function Detail(){
    const router = useRouter();
    const onClickLiveBook = () =>{
        if (typeof(document) !=="undefined"){
           let videoWrapper = document.getElementById("videoWrapper");
           let video = document.getElementById("video");
          if (videoWrapper instanceof Element){
            videoWrapper.style.display = "block";
          }
          if (video instanceof Element){
                video.requestFullscreen();
            } 
    }
}

    if(typeof(document) !=="undefined"){
        document.addEventListener("fullscreenchange", () => {
            if(!document.fullscreenElement){
                let videoWrapper = document.getElementById("videoWrapper");
                    if (videoWrapper instanceof Element){
                        videoWrapper.style.display = "none";
                        location.reload();
                    } 
                }                

            }       
        );  
    }   
    return(
        <>
        <DetailTopBar/>
        <BookImgBox id={router.query.id as string}/>
        <BookInfoBox id={router.query.id as string}/>
        <BookHashTag id={router.query.id as string}/>
        <Summary id={router.query.id as string}/>
        <ForItemGap>
            <ListContainer>
                <Link href="/textbook">
                    <ItemContainer>
                        <ReadIconContainer img="textbook">
                            <IconWrapper color="yellow">
                                <Image src={textbook} alt=""/>
                            </IconWrapper>
                        </ReadIconContainer>
                        <ItemTitle>
                            텍스트북
                        </ItemTitle>
                    </ItemContainer>
                </Link>
                <ItemContainer onClick = {()=>onClickLiveBook()}>
                    <ReadIconContainer img = "livebook">
                        <IconWrapper color="yellow">
                            <Image src={livebook} alt=""/>
                        </IconWrapper>
                    </ReadIconContainer>
                    <ItemTitle>
                        라이브북
                    </ItemTitle>
                </ItemContainer>
            </ListContainer>
        </ForItemGap>
        <BookIndexWrapper>
            <BookIndex id={router.query.id as string}/>
        </BookIndexWrapper>
        <VideoWrapper id="videoWrapper">
         <video id = "video" src="/video/selfManagement.mp4" controls/>
        </VideoWrapper>
        </>
    )
}