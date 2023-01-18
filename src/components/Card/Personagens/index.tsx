import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export default interface PersonangensProps {
  image?: string;
  name: string;
  height: string;
  birth_year: string;
  mass: number;
}


function CardPersonagens({name, height, birth_year, image, mass } : PersonangensProps) {
  return (
    <Card sx={{ 
      width: 300, 
      marginTop:'4rem', 
      marginBottom:'4rem', 
      borderRadius:'20px', 
      boxShadow:'5px 5px 24px 6px #000000', 
      backgroundColor:'#038bbb'
    }}> 
      <CardMedia
        component="img"
        height="160"
        image={image}

      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div" sx={{color:'#def6ff'}}>
            {name}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="div" sx={{color:'#014f6b', fontFamily:'Poppins', fontWeight:'700', fontSize:'0.8rem'}}>
            Age: {birth_year}
          </Typography>
          <Typography variant="caption" color="white" component="div">
            Height: {height}
          </Typography>
          <Typography variant="caption" color="white" component="div">
              Mass: {mass}
          </Typography>
      </CardContent>
     </Card> 
    
  );
}

export {CardPersonagens}