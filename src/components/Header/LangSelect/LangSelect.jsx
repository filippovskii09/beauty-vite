import { Box, FormControl, NativeSelect } from '@mui/material'
import React from 'react'
import './LangSelect.css'
const LangSelect = () => {

 return (
	<Box sx={{ minWidth: 120 }} >
      <FormControl fullWidth>
        <NativeSelect
          defaultValue='ukr'
          inputProps={{
            name: 'age',
            id: 'uncontrolled-native',
          }}
        >
          <option value='ukr'>Ukr</option>
          <option value='eng'>En</option>
        </NativeSelect>
      </FormControl>
    </Box>
  )
}

export default LangSelect
