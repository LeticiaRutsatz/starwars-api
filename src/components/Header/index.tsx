import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from "styled-components";


function Header() {

  return (
    <Box sx={{ 
        height:{xs: '70vh', md:'100vh'},
        backgroundImage:'url(https://i0.wp.com/nerdizmo.uai.com.br/wp-content/uploads/sites/29/2021/05/wallpapers-do-star-wars-07.jpg?ssl=1)', 
        backgroundSize:'cover',  
        backgroundPosition: 'center',
        paddingTop:{xs:'12rem', md:'4rem'},
        display: {xs:'block', md:'block'},
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Box sx={{
            height:{xs:'20vh', md:'50vh'},
            backgroundImage:'url(/logo-star.png)', 
            backgroundSize:'contain', backgroundRepeat:'no-repeat', 
            marginLeft: {xs:'2rem', md:'4rem'}
          }}>
        </Box>
        <Box sx={{marginLeft:{xs:'4rem', md:'7rem'}, marginTop:{xs:'1rem', md:'2rem'}}}>
          <Button variant="contained" href="https://www.aficionados.com.br/star-wars/">
            See briefly
          </Button>
          <Button variant="outlined" href="https://www.disneyplus.com/pt-br" sx={{marginLeft:{xs:'0.5rem', md:'1rem'}}}>
            Watch Now
          </Button>
        </Box>
    </Box>
  );
}

export {Header}