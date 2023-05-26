import { Stack, Chip, Avatar } from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'
import { useState } from 'react'

const MuiChip = () => {
    const [chips,setChips]=useState(['Chip 1','Chip 2','Chip 3','Chip 4'])
    const handleDelete=(chipToDelete: string)=>{
        setChips((chips)=>chips.filter((chip)=>chip!==chipToDelete))
    }
    return (
        <Stack direction='row' spacing={1}>
            <Chip label='My Chip' icon={<FaceIcon/>} size='small' color='primary' />
            <Chip label='Outlined Chip' icon={<FaceIcon/>} size='small' color='secondary' variant='outlined' avatar={<Avatar>DN</Avatar>} />
            <Chip label='Click This Chip' color='success' onClick={()=>alert('Clicked the Green Chip')} />
            <Chip label='Delete Chip' color='error' 
                onClick={()=>alert('Clicked Delete Chip But Handler Not Called')} 
                onDelete={()=>alert('Clicked Delete icon on the Chip. So the Delete Handler is Called')}
            />
            {
                chips.map((chip)=>(
                    <Chip key={chip} label={chip} onDelete={()=>handleDelete(chip)}/>
                ))
            }
        </Stack>
    )
}

export default MuiChip
