import React, {useState} from 'react'
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem } from '@mui/material'
import CatchinPokemonIcon from '@mui/icons-material/CatchingPokemon'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const MuiNavbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const handlePodcastClick = () => {
        alert('Podcast Clicked')
        handleClose()
    }
    const handleBlogClick = () => {
        alert('Blog Clicked')
        handleClose()
    }
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <CatchinPokemonIcon/>
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                    POKEMON
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Features</Button>
                    <Button color='inherit'>Pricing</Button>
                    <Button 
                        color='inherit' id='resources-button' onClick={handleClick} endIcon={<KeyboardArrowDownIcon/>}
                        aria-controls={open ? 'resources-menu' : undefined} aria-haspopup='true' aria-expanded={open ? 'true' : undefined}
                    >Resouces</Button>
                    <Button color='inherit'>About</Button>
                    <Button color='inherit'>Login</Button>
                </Stack>
                <Menu 
                    id='resources-menu' anchorEl={anchorEl} open={open}
                    MenuListProps={{ 'aria-labelledby': 'resources-button',  }}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                >
                    <MenuItem onClick={handleBlogClick}>Blog</MenuItem>
                    <MenuItem onClick={handlePodcastClick}>Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default MuiNavbar
