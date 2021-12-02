import React from 'react'
import { Checkbox, FormControlLabel, Typography } from '@mui/material';

function CheckboxLabel({label = 'Padrão'}) {
    return (
        <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }} />} 
        label={<Typography style={{ fontSize: 15 }}>{label}</Typography>}
        />
    )
}

export default CheckboxLabel
