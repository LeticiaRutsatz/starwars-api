import React, {useEffect} from "react";
import { Filmes } from "../../components/Filmes";
import { Header } from "../../components/Header";
import { Personagens } from "../../components/Personagens";
import { useAppDispatch } from "../../store/hooks";
import { getPersonagens } from "../../store/modules/Personagens";

import GlobalStyle from "../../style"

function Home(){
    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(getPersonagens());
        console.log(getPersonagens)
    },[])

    return(
        <>
           <GlobalStyle />
           <Header />
           <Filmes />
           <Personagens/>
        </>
    )
}

export {Home}