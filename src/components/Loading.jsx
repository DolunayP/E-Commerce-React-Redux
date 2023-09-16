import { LinearProgress } from '@mui/material'
import React from 'react'

const Loading = () => {
  return (
    <div className='absolute w-full top-40'><LinearProgress color="secondary" /></div>
  )
}

export default Loading