import React,  { useState } from 'react'
import { Box, FormControlLabel, Switch, FormControl, FormGroup, FormLabel, FormHelperText } from '@mui/material'

const MuiSwitch = () => {
    const [checked, setChecked] = useState(false)
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked)
    }
    console.log('Checked: ', checked)
    const [settings,setSettings]=useState<string[]>([])
    const handleSettingsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index=settings.indexOf(event.target.value);
        if(index===-1){
            setSettings([...settings,event.target.value])
        }
        else{
            setSettings(settings.filter((setting)=>setting!==event.target.value))
        }
    }
    console.log('Your Settings: ', settings);
  return (
    <Box>
        <Box>
        <FormControlLabel label='Dark Mode' control={<Switch checked={checked} onChange={handleChange} size='small' color='success' />}/>
        </Box>
        <Box>
            <FormControl>
                <FormLabel>Select Your Settings Switches</FormLabel>
                <FormGroup row>
                    <FormControlLabel
                        label='Airplane Mode' value='airplaneMode'
                        control={<Switch checked={settings.includes('airplaneMode')} onChange={handleSettingsChange} />}
                    />
                                            <FormControlLabel
                        label='Full Screen' value='fullScreen'
                        control={<Switch checked={settings.includes('fullScreen')} onChange={handleSettingsChange} />}
                    />
                    <FormControlLabel
                        label='Mute' value='mute'
                        control={<Switch checked={settings.includes('mute')} onChange={handleSettingsChange} />}
                    />
                </FormGroup>
                <FormHelperText>Settins is important</FormHelperText>
            </FormControl>
        </Box>
    </Box>
  )
}

export default MuiSwitch
