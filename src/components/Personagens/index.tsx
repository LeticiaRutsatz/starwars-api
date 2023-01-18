import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import {useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { buscarPersonagens, getPersonagens } from "../../store/modules/Personagens";
import { CardPersonagens } from "../Card/Personagens";

function Personagens(){
const personagens = useAppSelector(buscarPersonagens);
const dispatch = useAppDispatch();


useEffect(() => {
    dispatch(getPersonagens());
}, []);


let arrayPersonagens = [
     './assets/images/Personagens/luke.jpg',
     './assets/images/Personagens/c3po.jpg',
     './assets/images/Personagens/r2d2.jpg',
     './assets/images/Personagens/darthVader.jpg',
     './assets/images/Personagens/leia.jpg',
     './assets/images/Personagens/owen.jpg',
     './assets/images/Personagens/beru.jpg',
     './assets/images/Personagens/r5-d4.jfif',
     './assets/images/Personagens/biggs.jpg',
     './assets/images/Personagens/obi.jfif',
];

    return(
        <Box sx={{
            backgroundColor: '#181717',
            paddingTop:'4rem',
            paddingLeft: '4rem',
            paddingRight: '4rem'
          }}>
            <Typography variant="h3" sx={{color:'#038bbb', fontFamily:'Poppins', fontWeight:'600', paddingLeft:{md:'3rem'}}}>Characters</Typography>
            
            <Grid container maxWidth='100%'>
                {personagens.map((dado, index) => (
                        <Grid item xs={12} md={6} lg={4} display='flex' justifyContent='center' key={index}>
                            <CardPersonagens 
                                image={arrayPersonagens[index]}
                                name={dado.name} 
                                height={dado.height} 
                                birth_year={dado.birth_year}
                                mass={dado.mass}
                                />
                        </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export {Personagens}