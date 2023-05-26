import {Skeleton, Stack, Box, Avatar, Typography} from '@mui/material'
import { useState, useEffect } from 'react'

const MuiSkeleton = () => {
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        }, 3000)
    }, [])
    return (
        <>
            <Stack spacing={1} width='250px'>
                <Skeleton variant='text' animation={false}/>
                <Skeleton variant='circular' width={40} height={40} animation='wave'/>
                <Skeleton variant='rectangular' width={250} height={125} animation='pulse'/>
            </Stack>
            <Box sx={{width: '250px'}}>
                {
                    loading ? (
                        <Skeleton variant='rectangular' width={256} height={144} animation='wave'/>
                    ) : (
                        <img width={256} height={144} alt='skeleton' src='https://picsum.photos/200'/>
                    )
                }
            </Box>
            <Stack 
                spacing={1} 
                sx={{width:'100%', marginTop: '12px'}}
                direction='row'
            >
                {
                    loading ? (
                        <Skeleton variant='circular' width={40} height={40} animation='wave'/>
                    ) : (
                        <Avatar>DN</Avatar>
                    )
                }
            </Stack>
            <Stack sx={{width:'80%'}}>
                {
                    loading ? (
                        <>
                            <Typography variant='body1'>
                                <Skeleton variant='text' width='100%' animation='wave'/>
                            </Typography>
                            <Typography variant='body2'>
                                <Skeleton variant='text' width='100%' animation='wave'/>
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Typography variant='body1'>Anirban Anodiam</Typography>
                        </>
                    )
                }
            </Stack>
        </>
    )
}

export default MuiSkeleton
