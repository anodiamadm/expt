import React from 'react'
import { Avatar, Stack} from '@mui/material'

const MuiAvatar = () => {
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={1}>
                <Avatar sx={{bgcolor:'primary.light'}}>BW</Avatar>
                <Avatar sx={{bgcolor:'success.light'}}>CK</Avatar>
            </Stack>
            <Stack direction='row' spacing={1}>
                <Avatar sx={{bgcolor:'primary.light'}}>BW</Avatar>
                <Avatar sx={{bgcolor:'success.light'}}>CK</Avatar>
                <Avatar 
                    src='https://randomuser.me/api/portraits/women/79.jpg'
                    alt='Jane Doe'
                />
                <Avatar 
                    src='https://randomuser.me/api/portraits/men/61.jpg'
                    alt='John Doe'
                />
            </Stack>
        </Stack>
    )
}

export default MuiAvatar


