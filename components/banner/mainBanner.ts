import styled from "styled-components"
export const Container = styled.div`  
  width:100%;
  padding-left:15px;
  margin:auto;
  position:relative;
  >img{
    height:100%;
    width:100%;
  }
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