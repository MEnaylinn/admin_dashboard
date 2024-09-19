import { Box } from '@mui/material'
import React from 'react'
import Barchart from '../../components/Barchart'
import Header from '../../components/Header'

const Bar = () => {
  return (
    <Box m="20px">
        <Header title="BarChart" subtitle="A Sample BarChart" />
        
        <Box height="75vh">
        <Barchart/>
        </Box>
    </Box>
  )
}

export default Bar