import React, { useState } from 'react'
import { Box, MenuItem, TextField } from '@mui/material'

const MuiSelect = () => {
    const [country, setCountry] = useState('')
    console.log(country);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string)
    }
    return (
        <Box width='250px' >
            <TextField label='Select Country' select value={country} onChange={handleChange} fullWidth size='small' color='secondary'
                    helperText='Please select one country' maxRows='5'>
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>United States</MenuItem>
                <MenuItem value='AU'>Australia</MenuItem>
                <MenuItem value='PK'>Pakistan</MenuItem>
                <MenuItem value='NP'>Nepal</MenuItem>
                <MenuItem value='BD'>Bangladesh</MenuItem>
                <MenuItem value='CA'>Canada</MenuItem>
                <MenuItem value='NZ'>New Zealand</MenuItem>
                <MenuItem value='UK'>United Kingdom</MenuItem>
                <MenuItem value='GR'>Germany</MenuItem>
                <MenuItem value='CH'>China</MenuItem>
                <MenuItem value='SR'>Srilanka</MenuItem>
                <MenuItem value='BR'>Brazil</MenuItem>
                <MenuItem value='SP'>Spain</MenuItem>
                <MenuItem value='IT'>Italy</MenuItem>
                <MenuItem value='AF'>Afghanistan</MenuItem>
                <MenuItem value='KE'>Kenya</MenuItem>
                <MenuItem value='UA'>United Arab Emirates</MenuItem>
            </TextField>

        </Box>
    )
}

export default MuiSelect
