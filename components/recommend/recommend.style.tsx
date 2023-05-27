import styled from "styled-components";
export const ListContainer = styled.div`
display:flex;
align-items:center;
overflow:scroll;
>img{
  margin:0 10px;
}
`
export const RecommendContainer = styled.div`
padding-bottom:150px;
`
export const PopularBookContainer = styled.div`
@media (min-width : 610px){
  >div{
    justify-content:center;
  }
}
`
