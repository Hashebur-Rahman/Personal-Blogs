import { Box } from '@mui/material'
import React from 'react'
import Header from '../../Pages/Shared/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../Pages/Shared/Footer/Footer'

export default function PrivateLayout() {
    return (
        <div>
            <Box>
                <Header/>
                <Outlet />
                <Footer />
            </Box>
        </div>
    )
}
