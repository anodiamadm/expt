import { Link, Stack, Typography } from '@mui/material'
import React from 'react'

const MuiLink = () => {
    return (
        <Stack spacing={2} direction='row' m={4}>
            <Link href='#'>Click Here</Link>
            <Link href='#' color='secondary'>Secondary Color Link</Link>
            <Link href='#' underline='hover'>Underline on Hover Link</Link>
            <Link href='https://google.com' underline='none'>Never Underline Link to Google</Link>
            <Link href='#' variant='h4'>H4 Without Typography Link</Link>
            <Typography variant='h6'>
                <Link href='#'>H6 With Typography Link</Link>
            </Typography>
        </Stack>
    )
}

export default MuiLink
