import { BarBox, Container, GlassesWrapper } from "./searchBar.style"
import Glasses from '@/public/img/topBar/glasses.png'
import Image from "next/image";
export const SearchBar = () =>{
  return(
    <Container>
    <BarBox placeholder="검색어를 입력하세요"/>
    <GlassesWrapper>
      <Image alt="찾기" src={Glasses} width={15.24}/>
    </GlassesWrapper>
    </Container>
  )
}