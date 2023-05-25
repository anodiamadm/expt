import React from 'react'
import { Box, Breadcrumbs, Link, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
        <Breadcrumbs aria-aria-label='breadcrumb' separator={<NavigateNextIcon fontSize='small'/>}>
            <Link underline='hover' href='#'>Home</Link>
            <Link underline='hover' href='#'>Catalog</Link>
            <Link underline='hover' href='#'>Accessories</Link>
            <Typography color='text.prmary'>Shoes</Typography>
        </Breadcrumbs>
    </Box>
  )
}

export default MuiBreadcrumbs
