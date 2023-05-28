import styled from "styled-components"
export const BarContainer = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
padding:15px 0;
position: fixed;
bottom:0;
left:0;
right:0;
background-color:white;
max-width:767px;
margin:auto;
`

export const MenuContainer = styled.div<{color:string}>`
display:flex;
flex-direction:column;
align-items:center;
color:${props=>props.color};
>img{
    padding-bottom:5px;
}
`