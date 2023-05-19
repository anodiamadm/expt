import React, { useState } from 'react'
import { Box, MenuItem, TextField } from '@mui/material'

const MuiMultiSelect = () => {
    const [countries, setCountries] = useState<string[]>([])
    console.log(countries);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setCountries(typeof value === 'string' ? value.split(',') : value)
    }
    return (
        <Box width='250px' >
            <TextField label='Select Countries' select value={countries} onChange={handleChange} SelectProps={{ multiple: true }}
                    size='small' color='secondary' fullWidth helperText='Please select as many countries'>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>United States</MenuItem>
                <MenuItem value='AU'>Australia</MenuItem>
            </TextField>

        </Box>
    )
}

export default MuiMultiSelect
