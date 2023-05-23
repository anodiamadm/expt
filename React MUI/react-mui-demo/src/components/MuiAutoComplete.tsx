import React, { useState } from 'react'
import { Stack, Autocomplete, TextField } from '@mui/material'

type Skill = {
    id: number
    label: string
}
const MuiAutoComplete = () => {
    const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React']
    const [value, setValue] = useState<string | null>(null)
    console.log('Value: ', value);
    const [skill, setSkill] = useState<Skill | null>(null)
    const skillOptions = skills.map((skill, index)=>({
        id: index + 1,
        label: skill
    }))
    console.log('Skill: ', skill);
    return (
        <Stack spacing={2} width='250px'>
            <Autocomplete options={skills} renderInput={(params)=> <TextField {...params} label='Skills' />} 
                value={value} onChange={(event: any, newValue: string | null)=>setValue(newValue)}
                freeSolo
            />
            <Autocomplete options={skillOptions} renderInput={(params)=> <TextField {...params} label='Skills' />} 
                value={skill} onChange={(event: any, newValue: Skill | null)=>setSkill(newValue)}
            />        
        </Stack>
    )
}

export default MuiAutoComplete
