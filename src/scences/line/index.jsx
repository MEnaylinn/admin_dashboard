import { Box } from "@mui/material"
import Header from "../../components/Header"
import LineChart from "../../components/LineChart"


const Line = () => {
  return (
    <Box m="25px">
        <Header title="Line Chart" subtitle="Line Chart Sample" />

        <Box height="75vh">
            <LineChart/>
        </Box>
    </Box>
  )
}

export default Line