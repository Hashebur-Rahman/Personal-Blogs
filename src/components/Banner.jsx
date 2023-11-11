import React from 'react'
import { Box, Button } from '@mui/material';

export default function Banner() {
    return (

        <Box >  {/*  Student banner */}
            <Box className="hero h-[440px]" style={{ backgroundImage: 'url("/banner.jpg")' }}>
                <Box className="hero-overlay bg-opacity-60"></Box>
                <Box className="hero-content text-center text-neutral-content">
                    <Box  >
                        <h1 className="mb-5 whitespace-nowrap lg:text-5xl text-2xl font-bold">Programming Agency Public School</h1>
                        <Button variant='contained'> Learn More</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
        // <div className="carousel h-[450px] w-full">
        //     <div id="slide1" className="carousel-item relative w-full">
        //         <img src="/banner.jpg" className="w-full" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide4" className="btn btn-circle">❮</a>
        //             <a href="#slide2" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide2" className="carousel-item relative w-full">
        //         <img src="/banner2.jpg" className="w-full" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide1" className="btn btn-circle">❮</a>
        //             <a href="#slide3" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide3" className="carousel-item relative w-full">
        //         <img src="/banner4.jpg" className="w-full" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide2" className="btn btn-circle">❮</a>
        //             <a href="#slide4" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        //     <div id="slide4" className="carousel-item relative w-full">
        //         <img src="/banner1.jpeg" className="w-full" />
        //         <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        //             <a href="#slide3" className="btn btn-circle">❮</a>
        //             <a href="#slide1" className="btn btn-circle">❯</a>
        //         </div>
        //     </div>
        // </div>
    )
}
