import styled from "styled-components";



export const ReadbookList = styled.div`
    display : flex;
    margin:auto;
    margin-top : 25px;
    flex-direction: column;
    width:92%;
`
export const TitleContainer = styled.div`
display:flex;
align-items:center;
font-weight:600;
font-size:1.1em;
>img{
    margin-right:10px;
}
`
export const User_name = styled.div`
    display : flex;
    margin-left: 10px;
    margin-top : 4px;
`

export const ReadList = styled.div`
display:flex;
margin-top : 20px;
overflow:scroll;
@media (min-width:463px){
    justify-content:space-around;
}
>div{
    display : flex;
    flex-direction : column;
    align-items:center;
}
>div > img{
    margin: 0 5px;
    box-shadow : 0 6px 6px -2px gray;
}
>div>span{
    margin-top: 10px;
    text-decoration : underline;
    color : #797979; 
}
`