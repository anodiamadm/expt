import {Box,FormControlLabel,Checkbox, FormControl, FormGroup} from '@mui/material'
import {useState} from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

const MuiCheckbox = () => {
    const [acceptTns,setAcceptTns]=useState(false);
    const [skills,setSkills]=useState<string[]>([])
    console.log(skills);
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>) =>{
        setAcceptTns(event.target.checked);
    }
    const handleSkillChange=(event:React.ChangeEvent<HTMLInputElement>) =>{
        const index=skills.indexOf(event.target.value);
        if(index===1){
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
                    control={<Checkbox checked={acceptTns} onChange={handleChange} />}
                />
            </Box>
            <Box>
                <Checkbox 
                    icon={<BookmarkBorderIcon />} 
                    checkedIcon={<BookmarkIcon />} 
                    checked={acceptTns} 
                    onChange={handleChange}/>
            </Box>
            {/* <Box>
                <FormControl>
                    <FormGroup>
                        <FormControlLabel
                            label='HTML' 
                            control={<Checkbox value=''html' checked={acceptTns} onChange={handleChange} />}
                        />
                    </FormGroup>
                </FormControl>
            </Box> */}
        </Box>
  )
}

export default MuiCheckbox