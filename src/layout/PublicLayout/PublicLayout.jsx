import { Box } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function PublicLayout() {
    return (
        <Box>

            <Box>
                <Outlet />
            </Box>
            <Box>

            </Box>
        </Box>
    )

}
