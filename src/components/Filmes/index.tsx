import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { buscarFilmes, getMovies } from "../../store/modules/Filmes";
import CardDefault from "../Card/FilmsCard";

interface FilmesType {
    image: string;
    title: string;
    opening_crawl: string;
    release_date : string;
    episode_id: string;
}

function Filmes(){
    const dispatch = useAppDispatch();
    const movies = useAppSelector(buscarFilmes);

useEffect(() => {
    dispatch(getMovies());
}, []);


let arrayFilms = [
     './assets/images/Filmes/newHope.jpg',
     './assets/images/Filmes/theEmpire.jpg',
     './assets/images/Filmes/ReturnOfTheJedi.jpg',
     './assets/images/Filmes/thePanton.jpg',
     './assets/images/Filmes/atackClones.jpg',
     './assets/images/Filmes/revenge.jpg',
    ];

    return(
        <Box sx={{
            backgroundColor: '#181717',
            paddingTop:'4rem',
            paddingLeft: '4rem',
            paddingRight: '4rem'
          }}>
            <Typography variant="h3" sx={{color:'#038bbb', fontFamily:'Poppins', fontWeight:'600', paddingLeft:{md:'3rem'}}}>Movies</Typography>
            
            <Grid container maxWidth='100%'>
                {movies.map((dado, index) => (
                        <Grid item xs={12} md={6} lg={4} display='flex' justifyContent='center'>
                            <CardDefault 
                                key={dado.image} 
                                image={arrayFilms[index]} 
                                title={dado.title} 
                                opening_crawl={dado.opening_crawl} 
                                release_date={dado.release_date} 
                                episode_id={dado.episode_id}
                            ></CardDefault>
                        </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export {Filmes}