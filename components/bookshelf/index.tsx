import { BookshelfFrame } from "./bookshelf.style"
import Image from "next/image";
import Bookshelf from "@/public/img/library/bookshelf.png";

export const BookShelf = () => {
    return(
        <BookshelfFrame>
            <Image src = {Bookshelf} alt = "책꽂이" width = {335} height = {42} />
            
        </BookshelfFrame>

    )
}
