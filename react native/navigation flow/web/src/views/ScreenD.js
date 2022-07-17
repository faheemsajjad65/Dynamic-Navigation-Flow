import React from 'react'

import { 
  Box,
  Container
} from '@mui/material';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ScreenD() {
  return (
    <Box 
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{
          width: 412,
          height: 700,
          backgroundColor: '#d4e2f5'
      }}
    >
      <Container maxWidth="sm" style={{textAlign:'center'}}>
        <CheckCircleIcon style={{color:'#0080f0',height:'150px',width:'150px'}}/>
      </Container>
    </Box>
  )
}
