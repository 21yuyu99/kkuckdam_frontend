import styled from "styled-components";



export const ReadbookList = styled.div`
    display : flex;
    margin-top : 25px;
    margin-left : 15px;
    flex-direction: column;
    .text-style{
        margin-top : -24px;
        margin-left : 40px;
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

>div{
    display : flex;
    flex-direction : column;
    
}

>div > img{
    margin: 0 5px;
    box-shadow : 0 6px 6px -5px black;
  
}
.write-style{
    margin: 10px 5px 100px 30px;
    display : flex;
    text-decoration : underline;
    color : #797979; 
}
`





