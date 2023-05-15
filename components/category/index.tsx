import { Container, IconWrapper,ItemContainer,ItemTitle, ListContainer, Title } from "./category.style"
import continueRead from "@/public/img/category/continue.png";
import selfImprovement from "@/public/img/category/selfImprovement.png";
import investment from "@/public/img/category/investment.png";
import economy from "@/public/img/category/economy.png";
import humanities from "@/public/img/category/humanities.png";
import marketing from "@/public/img/category/marketing.png";
import Image from "next/image";
export const Category = () =>{
  const itemList = [
    {
      title : '이어서보기',
      icon : continueRead,
      color : "yellow"
    },
    {
      title : "자기계발",
      icon : selfImprovement,
      color : "gray"
    },
    {
      title : '금융/투자',
      icon : investment,
      color : "gray"
    },
    {
      title : "경제/경영",
      icon : economy,
      color : "gray"
    },
    {
      title : "인문",
      icon : humanities,
      color : "gray"
    },
    {
      title : "기획/마케팅",
      icon : marketing,
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