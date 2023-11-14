import { AddIcCall, Email, Facebook, GitHub, Instagram, LinkedIn, Twitter, } from '@mui/icons-material'
import LanguageIcon from '@mui/icons-material/Language';
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
                <span> <a title='Facebook' href="https://www.facebook.com/dev.hashebur.rahman/"> <Facebook /></a></span>
                <span> <a title='Instagram' href="https://www.instagram.com/hashebur_rahman/"> <Instagram /></a></span>
                <span> <a title='Twitter' href="https://twitter.com/dev_hashebur"> <Twitter /></a></span>
                <span> <a title='Linkedin' href="https://www.linkedin.com/in/hashebur-rahman/"> < LinkedIn /></a></span>
                <span> <a title='GitHub' href="https://github.com/hashebur"> < GitHub /></a></span>
                <span> <a title='Portfolio Web' href="https://dev-hasahebur.vercel.app/"> < LanguageIcon /></a></span>

            </div>
        </div>

    )
}
