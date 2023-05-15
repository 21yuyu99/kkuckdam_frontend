import styled from "styled-components";

export const Container = styled.div`
`
export const Title = styled.h2`
  font-size:1.2rem;
  margin : 15px;
`
export const ListContainer = styled.div`
display:flex;
overflow : scroll;
@media (min-width : 470px){
  justify-content:center;
}
`
export const ItemContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
export const IconWrapper = styled.div`
width:58px;
height:58px;
border-radius:50%;
background-color:${props=>props.color=="yellow"?props.theme.colors.yellow:"#474747"};
display:flex;
margin-bottom:5px;
justify-content : center;
align-items : center;
>img{
  width:50%;
  height:50%;
}
`
export const ItemTitle = styled.p`
color:#313131;
width:78px;
text-align:center;
`