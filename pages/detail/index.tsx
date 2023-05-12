import { BookImgBox, BookInfoBox } from "@/components/detail";
import { DetailTopBar } from "@/components/topBar";

export default function Detail(){
    return(
        <>
        <DetailTopBar/>
        <BookImgBox/>
        <BookInfoBox/>
        </>
    )
}