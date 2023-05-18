import { Button, Stack, IconButton } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import React from 'react'

const MuiButton = () => {
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant='text' href='https://google.com'>Text</Button>
            <Button variant='contained'>Contained</Button>
            <Button variant='outlined'>Outlined</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='text' color='primary'>Primary text</Button>
            <Button variant='text' color='secondary'>Secondary text</Button>
            <Button variant='text' color='error'>Error text</Button>
            <Button variant='text' color='info'>Info text</Button>
            <Button variant='text' color='success'>Success text</Button>
            <Button variant='text' color='warning'>Warning text</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>Primary contained</Button>
            <Button variant='contained' color='secondary'>Secondary contained</Button>
            <Button variant='contained' color='error'>Error contained</Button>
            <Button variant='contained' color='info'>Info contained</Button>
            <Button variant='contained' color='success'>Success contained</Button>
            <Button variant='contained' color='warning'>Warning contained</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='outlined' color='primary'>Primary outlined</Button>
            <Button variant='outlined' color='secondary'>Secondary outlined</Button>
            <Button variant='outlined' color='error'>Error outlined</Button>
            <Button variant='outlined' color='info'>Info outlined</Button>
            <Button variant='outlined' color='success'>Success outlined</Button>
            <Button variant='outlined' color='warning'>Warning outlined</Button>
        </Stack>
        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small'>Small contained</Button>
            <Button variant='contained' size='medium'>Medium contained</Button>
            <Button variant='contained' size='large'>Large contained</Button>
        </Stack>
        <Stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon/>} disableRipple onClick={()=>alert('Buttion Clicked')}>Send</Button>
            <Button variant='contained' endIcon={<SendIcon/>} disableElevation>Send</Button>
            <IconButton aria-label='send' color='info' size='small'>
                <SendIcon/>
            </IconButton>
        </Stack>
    </Stack>
  )
}

export default MuiButton
