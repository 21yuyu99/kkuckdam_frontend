import { Container, IconWrapper,ItemContainer,ItemTitle, ListContainer, Title } from "./category.style"
import Continue from "@/public/img/category/continue.png";
import SelfImprovement from "@/public/img/category/selfImprovement.png";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { useSelector } from 'react-redux';
export const Category = () =>{
  const itemList = [
    {
      title : '이어서보기',
      icon : Continue,
      color : "yellow"
    },
    {
      title : "자기계발",
      icon : SelfImprovement,
      color : "gray"
    }
  ];

  return(
    <Container>
      <Title>꾹담 카테고리</Title>
      <ListContainer>
        {itemList.map(item=>
        {
          return(
            <ItemContainer key={itemList.indexOf(item)}>
            <IconWrapper color={item.color}>
              <Image src={item.icon} alt={item.title}/>
            </IconWrapper>
            <ItemTitle> 
              {item.title}
            </ItemTitle>
          </ItemContainer>
          )
        }
          )
          }
      </ListContainer>
    </Container>
  )
}