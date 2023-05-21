import { BookshelfContainer } from "./bookshelf.style"
import Image from "next/image";
import Bookshelf from "@/public/img/library/bookshelf.png";
export const BookShelf = () => {
    return(
        <BookshelfContainer>
            <Image src = {Bookshelf} alt = "책꽂이" width = {330} height = {42} />
        </BookshelfContainer>
    )
}
