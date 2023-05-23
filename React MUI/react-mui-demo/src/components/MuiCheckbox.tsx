import { Box, FormControlLabel, Checkbox, FormControl, FormGroup, FormLabel, FormHelperText } from '@mui/material'
import { useState } from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

const MuiCheckbox = () => {
    const [acceptTnc,setAcceptTnc]=useState(false);
    console.log('Accept T & C: ', acceptTnc)
    const [skills,setSkills]=useState<string[]>([])
    console.log('Your Skills: ', skills);
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>) =>{
        setAcceptTnc(event.target.checked);
    }
    const handleSkillChange=(event:React.ChangeEvent<HTMLInputElement>) =>{
        const index=skills.indexOf(event.target.value);
        if(index===-1){
            setSkills([...skills,event.target.value])
        }
        else{
            setSkills(skills.filter((skill)=>skill!==event.target.value))
        }
    }
    return (
        <Box>
            <Box>
                <FormControlLabel
                    label='I accept terms and condition' 
                    control={<Checkbox checked={acceptTnc} onChange={handleChange} />}
                />
            </Box>
            <Box>
                <Checkbox 
                    icon={<BookmarkBorderIcon />} 
                    checkedIcon={<BookmarkIcon />} 
                    checked={acceptTnc} 
                    onChange={handleChange}/>
            </Box>
            <Box>
                <FormControl error>
                    <FormLabel>Select Your Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            label='HTML' value='html'
                            control={<Checkbox checked={skills.includes('html')} onChange={handleSkillChange} />}
                        />
                                                <FormControlLabel
                            label='CSS' value='css'
                            control={<Checkbox checked={skills.includes('css')} onChange={handleSkillChange} />}
                        />
                        <FormControlLabel
                            label='JavaScript' value='javascript'
                            control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillChange} />}
                        />
                    </FormGroup>
                    <FormHelperText>Invalid Selection</FormHelperText>
                </FormControl>
            </Box>
        </Box>
  )
}

export default MuiCheckbox