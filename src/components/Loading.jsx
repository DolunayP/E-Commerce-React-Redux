import { CircularProgress } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <div className='flex justify-center items-center'> <CircularProgress
      variant="determinate"
      sx={{
        color: (theme) =>
          theme.palette.grey['#308fe8'],
      }}
      size={40}
      thickness={4}
      value={100}
    /></div>
  )
}

export default Loading