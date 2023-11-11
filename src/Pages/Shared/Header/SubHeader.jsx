import { AddIcCall, Email, Facebook, GitHub, Instagram, LinkedIn, Twitter, } from '@mui/icons-material'
import React from 'react'

export default function SubHeader() {
    return (
        <div className='fixed px-5 md:px-10 py-1 flex justify-between gap-2 w-full text-white bg-red-500'>
            <div>
                <span><AddIcCall /> 01777441366</span >
                <span className='ml-5'><Email /> dev.hashebur@gmail.com</span>
            </div>
 
            <div >
                Follow Us :
                <span> <a href="#"> <Facebook /></a></span>
                <span> <a href="#"> <Instagram /></a></span>
                <span> <a href="#"> <Twitter /></a></span>
                <span> <a href="#"> < LinkedIn /></a></span>
                <span> <a href="#"> < GitHub /></a></span>

            </div>
        </div>

    )
}
