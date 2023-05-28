import styled from "styled-components"

export const BookShelfContainer = styled.div`
width:92%;
position:relative;
margin:auto;
height:100px;
>img{
  width:100%;
  height:50%;
  position:absolute;
  top:0;
  left:0;
  margin-top:100px;
}
`

export const BookContainer = styled.div`
    position:absolute;
    margin-left:6%;
    left:0;
    top:45px;
    width:100%;
    >img{
      margin-right:5px;
    }
`
