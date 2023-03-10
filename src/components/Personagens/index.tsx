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
     '/luke.jpg',
     '/c3po.jpg',
     '/r2d2.jpg',
     '/darthVader.jpg',
     '/leia.jpg',
     '/owen.jpg',
     '/beru.jpg',
     '/r5-d4.jfif',
     '/biggs.jpg',
     '/obi.jpg',
];

    return(
        <Box sx={{
            backgroundColor: '#181717',
            paddingTop:'4rem',
            paddingLeft: '4rem',
            paddingRight: '4rem'
          }}>
            <Typography variant="h3" sx={{
                color:'#038bbb', 
                fontFamily:'Poppins', 
                fontWeight:'600', 
                paddingLeft:{md:'3rem'}
                }}>
                    Characters
                </Typography>
            
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