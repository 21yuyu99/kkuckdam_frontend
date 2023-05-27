
import { NavContainer, LibraryContainer, Container} from "./lib_nav.style"
import Image from 'next/image';


export const Nav = () =>{
    return(
            <Container>
                <NavContainer>
                    <span className = "write-style">서재</span>
                    <span className = "write-style">레포트</span>
                </NavContainer>
                <LibraryContainer>
                </LibraryContainer>
            </Container>

            
    )
}