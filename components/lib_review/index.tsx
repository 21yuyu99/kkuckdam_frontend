import { ReviewContainer } from "./lib_review.style"
import Image from 'next/image';

import BannerReview from "@/public/img/library/review.png"

export const Review = () =>{
    return(
            <ReviewContainer>
                <Image src = {BannerReview} alt = "배너리뷰" width = {300}/>

            </ReviewContainer>
            
    )
}