import React from 'react'
import { Box, Stack, Divider, Grid, Paper } from '@mui/material'

const MuiLayout = () => {
    return (
        <Paper sx={{ padding: '32px' }} elevation={4}>
            {/* <Stack sx={{ border: 'red 1px solid' }} >
            <Stack sx={{ border: 'red 1px solid' }} direction='row-reverse'>
            <Stack sx={{ border: 'red 1px solid' }} direction='column-reverse' spacing={2}> */}
            <Stack sx={{ border: 'red 1px solid' }} direction='row' spacing={2} divider={<Divider orientation='vertical' flexItem/>}>
                <Box component='span'>
                    Anodiam
                </Box>
                <Box
                    sx={{
                        backgroundColor: 'primary.main',
                        color: 'white',
                        height: '100px',
                        width: '100px',
                        padding: '16px',
                        '&:hover': {
                            backgroundColor: 'primary.light',
                        },
                    }}
                >
                    Education that enlightens
                </Box>
                <Box
                    display='flex'
                    height='100px'
                    width='100px'
                    bgcolor='success.light'
                    color='red'
                    p={2}
                >
                    Clone Box for component system properties
                </Box>
            </Stack>
            {/* The Grid component under the hood uses the flexbox module. The Grid consists of 12 columns
                Each item in the grid can take up one or more columns as its width
                There are five breakpoints each corresponding to a certain device width
                xs for mobile device size, sm for tablet, md for desktop, Ig and xI for larger monitors */}
            <Grid container my={4}>
                <Grid item xs={12} sm={6} lg>
                    <Box bgcolor='primary.light' p={2}>
                        Item 1
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg>
                    <Box bgcolor='success.main' p={2}>
                        Item 2
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg>
                    <Box bgcolor='primary.main' p={2}>
                        Item 3
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg>
                    <Box bgcolor='success.light' p={2}>
                        Item 4
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6} lg    >
                    <Box bgcolor='error.light' p={2}>
                        Item 5
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default MuiLayout
