import { SearchBar } from "./searchBar"
import { MainTopBarContainer, MainIconContainer, LogoWrapper} from "./topBar.style"
import Image from 'next/image';
import Logo from '@/public/img/topBar/logo.png'
import Alarm from '@/public/img/topBar/alarm.png'
import MenuBar from '@/public/img/topBar/menuBar.png'
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