import { Stack, Rating, FormLabel } from '@mui/material'
import React, {useState} from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

const MuiRating = () => {
    const [value, setValue] = useState<number | null>(null)
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        setValue(newValue)
    }
    console.log('Rating: ', value)
    const [readOnlyValue] = useState<number | null>(3)
    return (
        <Stack spacing={2}>
            <Rating value={value} onChange={handleChange} precision={0.5} size='large' 
                icon={<FavoriteIcon fontSize='inherit' color='error' />}
                emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
                // highlightSelectedOnly
            />
            {/* Read Only Rating */}
            <FormLabel>Read Only Rating</FormLabel>
            <Rating value={readOnlyValue} size='large' 
                icon={<FavoriteIcon fontSize='inherit' color='error' />}
                emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
                readOnly
            />
        </Stack>
    )
}

export default MuiRating
