import { BarContainer, MenuContainer} from "./bottomBar.style"
import home from "@/public/img/bottomBar/home.png"
import library from "@/public/img/bottomBar/library.png"
import profile from "@/public/img/bottomBar/profile.png"
import Image from "next/image"
export const BottomBar = () =>{
  return(
    <BarContainer>
      <MenuContainer>
        <Image src={home} alt="" width={24} height={12}/>
        홈
      </MenuContainer>
      <MenuContainer>
        <Image src={library} alt="" width={24} height={12}/>
        나만의 서재
      </MenuContainer>
      <MenuContainer>
        <Image src={profile} alt="" width={24} height={12}/>
        프로필
      </MenuContainer>
    </BarContainer>
  )
}