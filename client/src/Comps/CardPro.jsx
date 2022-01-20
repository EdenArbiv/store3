import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export default function CardPro({prod, AddToCart}) {



    return (
        <div className='prod'>
            
        <Card sx={{ width: 200, height: 310 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="150"
            image={prod.img}
            alt={prod.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {prod.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {prod.price}$
             <br />
             {prod.category}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
          <AddShoppingCartIcon onClick={() => AddToCart(prod.name)}/>
          </Button>
        </CardActions>
      </Card>
      
        </div>
    )
}
