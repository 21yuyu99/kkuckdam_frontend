import { SearchBar } from "./searchBar"
import { MainTopBarContainer, MainIconContainer, LogoWrapper, DetailTopBarContainer} from "./topBar.style"
import Image from 'next/image';
import Logo from '@/public/img/topBar/logo.png'
import Alarm from '@/public/img/topBar/alarm.png'
import MenuBar from '@/public/img/topBar/menuBar.png'
import back from '@/public/img/topBar/back.png'
import bookmark from '@/public/img/topBar/bookmark.png'
export const MainTopBar = () =>{
  return(
    <MainTopBarContainer>
      <LogoWrapper>
      <Image src={Logo} alt="꾹담" width={36}/>
      </LogoWrapper>
      <SearchBar/>
      <MainIconContainer>
        <Image src={Alarm} alt="알람" width={18.6}/>
        <Image src={MenuBar} alt="메뉴" height={15}/>
      </MainIconContainer>
    </MainTopBarContainer>
  )
}

export const DetailTopBar = ()=>{
  return(
    <DetailTopBarContainer>
    <Image src={back} alt="뒤로가기" width={10.85} height={18.95}/>
    <Image src={bookmark} alt="북마크" width={16} height={20}/>
    </DetailTopBarContainer>
  )
}