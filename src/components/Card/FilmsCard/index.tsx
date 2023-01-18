import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MoviesType from '../../../store/modules/Filmes/types';

function CardDefault({image, title, release_date, opening_crawl, episode_id} : MoviesType) {

  return (
    <Card sx={{ 
      width: 300, 
      marginTop:'4rem', 
      marginBottom:'4rem', 
      borderRadius:'20px', 
      boxShadow:'5px 5px 24px 6px #000000', 
      backgroundColor:'#038bbb'
    }} elevation={4}>
      <CardMedia
        component="img"
        height="160"
        image={image}
      />
      <CardContent sx={{height:{xs:'23rem', sm:'20rem'}}}>
        <Typography gutterBottom variant="h5" component="div" sx={{color:'#def6ff'}}>
            {title}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="div" 
            sx={{
              color:'#014f6b', 
              fontFamily:'Poppins', 
              fontWeight:'700', 
              fontSize:'0.8rem'
            }}>
            {release_date} | Episode {episode_id}
          </Typography>
          <Typography variant="h6" color="white" sx={{marginTop:'0.8rem'}}>
             Briefly:
          </Typography>
          <Typography color="white" sx={{fontSize:'0.7rem'}}>
             {opening_crawl}
          </Typography>
        </CardContent>
    </Card>
  );
}

export default CardDefault;