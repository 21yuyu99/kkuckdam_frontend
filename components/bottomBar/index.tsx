import { BarContainer, MenuContainer} from "./bottomBar.style"
import home from "@/public/img/bottomBar/home.png"
import selectedHome from "@/public/img/bottomBar/selectedHome.png"
import library from "@/public/img/bottomBar/library.png"
import selectedLibrary from "@/public/img/bottomBar/selectedLibrary.png"
import profile from "@/public/img/bottomBar/profile.png"
import { changeBottomState } from "@/store/bottomBar"
import { useAppDispatch, useAppSelector } from "@/store/hooks"
import Image from "next/image"
import { useRouter } from "next/router"
export const BottomBar = () =>{
  const bottomState:string = useAppSelector((state)=>state.bottomState);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const onClickHandler = (selected:string)=>{
    dispatch(changeBottomState(selected));
    switch(selected){
      case "home":
        return router.push('/mainpage');
      case "library":
        return router.push('/library');
    }
  }
  return(
    <BarContainer>
      {bottomState == 'home'?
        <MenuContainer color ="#F47873">
        <Image src={selectedHome} alt="" width={24} height={24}/>
        홈
        </MenuContainer>
        :
        <MenuContainer color ="#8B8B8B" onClick={()=>onClickHandler("home")}>
        <Image src={home} alt="" width={24} height={24}/>
        홈
        </MenuContainer>
      }
      {bottomState == 'library'?
        <MenuContainer color ="#FFD169">
        <Image src={selectedLibrary} alt="" width={24} height={24}/>
        나만의 서재
        </MenuContainer>
        :
        <MenuContainer color ="#8B8B8B" onClick={()=>onClickHandler("library")}>
        <Image src={library} alt="" width={24} height={24}/>
        나만의 서재
        </MenuContainer>
      }
      <MenuContainer color ="#8B8B8B">
        <Image src={profile} alt="" width={24} height={24}/>
        프로필
      </MenuContainer>
    </BarContainer>
  )
}