// import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlaceholderImage from '../../src/assets/news.jpg';

export interface NwesCardProps {
    title: string;
    description: string;
    image: string | null;
    id: number;
    country: string;
    category: string;
}

export default function NewsCard({ title, description, image, /*id, country, category*/ }: NwesCardProps) {
    // const navigate = useNavigate();
    // const handleLearnMoreClick = () => {
    //     navigate(`/${country}/${category}/article/${id}`);
    // }

  return (
    <Card sx={{ maxWidth: 700, width: '100%' }}>
      <div className='h-[250px] overflow-hidden'>
        <CardMedia
          sx={{
            height: 250,
            transform: 'scale(1)',
             transition: 'transform 0.2s ease-in-out',
            '&:hover': {
              transform: 'scale(1.05)',
              transition: 'transform 0.2s ease-in-out',
            }
          }}
          image={image ? image : PlaceholderImage}
          title={title}
        />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3" sx={{ fontSize: '1.3rem' }}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {/* <Button size="small" onClick={handleLearnMoreClick}>Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
