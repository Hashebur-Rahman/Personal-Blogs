import { Box } from '@mui/material'
import React from 'react'

export default function CVMaker() {
  return (
    <Box className="hero h-[440px]" style={{ backgroundImage: 'url("/teacher.jpg")' }}>
        <Box className="hero-overlay bg-opacity-60"></Box>
        <Box className="hero-content text-center text-neutral-content">
          <Box className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Teacher Panel</h1>
          </Box>
        </Box>
      </Box>
  )
}
