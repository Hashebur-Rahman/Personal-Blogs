import React from 'react'
import { Box } from "@mui/material";

export default function About() {
    return (
        <div className='pt-20'>
            <Box className='pt-10'>  {/*  Student banner */}
                <Box className="hero h-[440px]" style={{ backgroundImage: 'url("/about.jpg")' }}>
                    <Box className="hero-overlay bg-opacity-60"></Box>
                    <Box className="hero-content text-center text-neutral-content">
                        <Box className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">About Us</h1>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <div> Coming Soon</div>

        </div>
    )
}
