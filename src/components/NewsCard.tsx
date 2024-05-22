import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PlaceholderImage from '../../src/assets/news.jpg';

export interface NwesCardProps {
    title: string;
    description: string;
    image: string | null;
    id: number;
    country: string;
}

export default function NewsCard({ title, description, image, id, country }: NwesCardProps) {
    const navigate = useNavigate();
    const handleLearnMoreClick = () => {
        navigate(`/${country}/article/${id}`);
    }

  return (
    <Card sx={{ maxWidth: 700, width: '100%' }}>
        <CardMedia
          sx={{ height: 250 }}
          image={image ? image : PlaceholderImage}
          title={title}
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleLearnMoreClick}>Learn More</Button>
      </CardActions>
    </Card>
  );
}
