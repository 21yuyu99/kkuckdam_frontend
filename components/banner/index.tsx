import Image from "next/image";
import { Container, PaginationContainer, PointCircle, UnPointCircle } from "./mainBanner";
import CanRead from "@/public/img/banner/canRead.png";
export const MainBanner = () =>{
  return(
    <Container>
      <Image src={CanRead} alt="누구나 완독할 수 있어\n꾹담이 있으니까"/>
      <PaginationContainer>
        <PointCircle/>
        <UnPointCircle/>
        <UnPointCircle/>
      </PaginationContainer>
    </Container>
  )
}