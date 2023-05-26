import { Box, List, ListItem, ListItemIcon, ListItemText, ListItemAvatar, Avatar, ListItemButton, Divider } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

const MuiList = () => {
    return (
        <Box sx={{ bgcolor:'#9d9ac3', width: '400px' }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <MailIcon/>
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary='List Item 1' secondary='Secondary Text 1' />
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <MailIcon/>
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary='List Item 2' secondary='Secondary Text 2' />
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <MailIcon/>
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary='List Item 3' secondary='Secondary Text 3' />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
}

export default MuiList
