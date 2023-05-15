import { BookHashTag, BookImgBox, BookInfoBox, ReadBtn, Summary } from "@/components/detail";
import { DetailTopBar } from "@/components/topBar";
import { changeSummaryState } from "@/store/detail";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export default function Detail(){
    return(
        <>
        <DetailTopBar/>
        <BookImgBox/>
        <BookInfoBox/>
        <BookHashTag/>
        <Summary/>
        <ReadBtn/>
        </>
    )
}