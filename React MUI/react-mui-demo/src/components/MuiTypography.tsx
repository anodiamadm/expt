import React from 'react'
import { Typography } from '@mui/material'

const MuiTypography = () => {
  return (
    <div>
        <Typography variant='h1'>h1 Heading</Typography>
        <Typography variant='h2'>h2 Heading</Typography>
        <Typography variant='h3'>h3 Heading</Typography>
        <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>
        <Typography variant='h5'>h5 Heading</Typography>
        <Typography variant='h6'>h6 Heading</Typography>
        <Typography variant='subtitle1'>Subtitle 1</Typography>
        <Typography variant='subtitle2'>Subtitle 2</Typography>
        <Typography>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores natus esse ex nostrum, amet id illo, vel ea accusamus explicabo qui placeat beatae eveniet, necessitatibus minus quidem. Corrupti, esse beatae!</Typography>
        <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis explicabo vero quasi! Dolores in quia, laudantium ipsa iure magni numquam sunt similique fugiat odit necessitatibus! Necessitatibus perferendis nisi quisquam tempora.</Typography>
    </div>
  )
}

export default MuiTypography
