import { ReactNode } from "react";
import ButtonReturnStyled from "./ButtonReturnStyled"

interface ButtonReturnProps{
    onClick?: () => void;
    children: ReactNode
}

function ButtonReturn({children, onClick}:ButtonReturnProps){
    return(
        <ButtonReturnStyled onClick={onClick}>{children}</ButtonReturnStyled>
    )
}

export default ButtonReturn