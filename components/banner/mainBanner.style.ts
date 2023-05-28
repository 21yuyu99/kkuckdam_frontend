import styled from "styled-components"
export const Container = styled.div`  
  padding-left:15px;
  margin:auto;
  position:relative;
  div>img{
    width:100%;
    height:100%;
    padding-right:15px;
  }
`
export const BannerWrapper = styled.div`
white-space:nowrap;
transition: .3s ease-out;
width:100%;
height:100%;
`
export const PaginationContainer = styled.div`
width:95%;
display:flex;
justify-content: center; 
position:absolute;
bottom:8%;
>div{
  width:8px;
  height:8px;
  border-radius:50%;
  margin:0 5px;
}
`
export const PointCircle = styled.div`
background-color:rgba(60, 60, 60, 0.87);
`
export const UnPointCircle = styled.div`
background-color: #D9D9D9;
`