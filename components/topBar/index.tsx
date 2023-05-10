import { SearchBar } from "./searchBar"
import { Container, IconContainer, LogoWrapper} from "./topBar.style"
import Image from 'next/image';
import Logo from '@/public/img/logo.png'
import Alarm from '@/public/img/alarm.png'
import MenuBar from '@/public/img/menuBar.png'
export const TopBar = () =>{
  return(
    <Container>
      <LogoWrapper>
      <Image src={Logo} alt="꾹담" width={36}/>
      </LogoWrapper>
      <SearchBar/>
      <IconContainer>
        <Image src={Alarm} alt="알람" width={18.6}/>
        <Image src={MenuBar} alt="메뉴" height={15}/>
      </IconContainer>
    </Container>
  )
}