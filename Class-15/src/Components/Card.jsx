import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { addCart } from '../Store/slices/addToCartSlice';

export default function MediaCard({ disc, imgSrc, title, product }) {
    const dispatch = useDispatch()
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={imgSrc}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {disc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => {
                    dispatch(addCart(product))
                }} variant='contained' size="small">Add To Card</Button>
            </CardActions>
        </Card>
    );
}