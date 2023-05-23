import { InputAdornment, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

const MuiTextField = () => {
    const [value,setValue]=useState('');
    return (  
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' variant='outlined' />
                <TextField label='Name' variant='filled' />
                <TextField label='Name' variant='standard' />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Small Secondary' size='small' color='secondary' />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Form Input' 
                required
                value={value} 
                onChange={(e)=>setValue(e.target.value)}
                error={!value}
                helperText={!value?'Required':'Please do not share password'} />   
                <TextField label='Password' type='password' helperText='Do not share password' />
                <TextField label='Readonly' InputProps={{readOnly: true}} />
                <TextField label='Disabed' disabled />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Amount' InputProps={{ startAdornment: <InputAdornment position='start'>$</InputAdornment> }} />
                <TextField label='Weight' InputProps={{ endAdornment: <InputAdornment position='end'>Kg</InputAdornment> }} />
            </Stack>
        </Stack>
    )
}

export default MuiTextField
