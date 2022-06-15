import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { CardActionArea } from '@mui/material';
import Divider from '@mui/material/Divider';
import accounting from 'accounting';


export default function ProductCard(props) {

  const product = props.data;

  return (

        <Card sx={{ maxWidth: 260 }}>
          
          <CardActionArea>
            
            <CardMedia
            component="img"
            Height="250"
            image= {product.imagen}
            alt="Imagen producto"
            />
            
            <Divider />
            
            <CardContent>
              <Typography variant="h5" color="text.secondary">{accounting.formatMoney(product.precio)}</Typography>
              <Typography paragraph>{product.nombre}</Typography>
              <Typography variant="body2" color="text.secondary">{product.stock ? 'en stock' : 'sin stock'}</Typography>
            </CardContent>

            </CardActionArea>
            
            <CardActions disableSpacing>
              <IconButton aria-label="add to shopping cart">
                <AddShoppingCartIcon />
              </IconButton>
              
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>

              <IconButton aria-label="add favorites">
                 <FavoriteBorderIcon />
              </IconButton>
           </CardActions>
           
          
      </Card>
    
  );
}
