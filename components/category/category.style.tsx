import styled from "styled-components";

export const Container = styled.div`
`
export const Title = styled.h2`
  font-size:1.2rem;
  margin : 15px;
`
export const ListContainer = styled.div`
display:flex;
`
export const ItemContainer = styled.div`
`
export const IconWrapper = styled.div`
width:58px;
height:58px;
border-radius:50%;
background-color:${props=>props.color=="yellow"?props.theme.colors.yellow:"#474747"};
display:flex;
justify-content : center;
align-items : center;
>img{
  width:50%;
  height:50%;
}
`
export const ItemTitle = styled.p`
color:#313131;
`