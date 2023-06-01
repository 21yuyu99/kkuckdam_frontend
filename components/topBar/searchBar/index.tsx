import { BarBox, Container, GlassesWrapper } from "./searchBar.style"
import Glasses from '@/public/img/topBar/glasses.png'
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSearchText } from "@/store/search_result";
import Image from "next/image";
import Link from "next/link";
export const SearchBar = () =>{
  const searchText = useAppSelector((state)=>state.searchText);
  const dispatch = useAppDispatch();
  return(
    <Container>
    <BarBox placeholder="검색어를 입력하세요" value={searchText} onChange={(e)=>dispatch(setSearchText(e.target.value))}/>
    <GlassesWrapper>
      <Link href="/search_result">
      <Image alt="찾기" src={Glasses} width={15.24}/>
      </Link>
    </GlassesWrapper>
    </Container>
  )
}