import { Stack, Badge } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
import { useState } from 'react'

const MuiBadge = () => {
    const [unreadEmails] = useState<null | string[]>(['Spam emails', 'Imp Mails'])
    return (
        <Stack direction='row' spacing={2}>
            <Badge badgeContent={5} color='primary'>
                <MailIcon/>
            </Badge>
            <Badge badgeContent={0} color='secondary'>
                <MailIcon/>
            </Badge>
            <Badge badgeContent={0} color='secondary' showZero>
                <MailIcon/>
            </Badge>
            <Badge badgeContent={100} color='primary'>
                <MailIcon/>
            </Badge>
            <Badge badgeContent={100} color='primary' max={999}>
                <MailIcon/>
            </Badge>
            <Badge variant='dot' color='primary' invisible={ unreadEmails?.length === 0 }>
                <MailIcon/>
            </Badge>
        </Stack>
    )
}

export default MuiBadge
