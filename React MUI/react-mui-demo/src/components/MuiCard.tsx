import { Box, Card, CardContent, Typography, CardActions, CardMedia, Button } from '@mui/material'
import React from 'react'

const MuiCard = () => {
    return (
        <Box width='300px'>
            <Card>
                <CardMedia
                    component='img'
                    height='140'
                    image='https://picsum.photos/200'
                    alt='random unsplash image'
                />
                <CardContent>
                    <Typography variant='h5' component='div'>
                        Anodiam
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit qui fugiat dolorum eligendi doloremque, eius quibusdam? Velit, reiciendis, eum soluta deserunt magni officiis iste et molestiae perferendis ut quibusdam totam?
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size='small'>Share</Button>
                    <Button size='small'>Learn More</Button>
                </CardActions>
            </Card>
        </Box>
    )
}

export default MuiCard
