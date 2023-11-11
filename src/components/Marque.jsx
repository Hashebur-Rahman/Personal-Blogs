import { Button } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Marquee from "react-fast-marquee";
import { SERVER_URL } from '../config/config';

export default function Marque() {
    const [items, setItems] = useState([]);

    // useEffect(() => {
    //     fetch("/countryData.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             const notification = data[data.length - 1]
    //             console.log(notification);
    //             setItems(notification);

    //         })
    // }, [])

    useEffect(() => {
        const getPosts = async () => {
            try {
                const result = await axios(`${SERVER_URL}/api/createNotices`);
                const notification = result.data[result.data.length - 1]

                setItems(notification);
                // console.log(result.data);
            } catch (error) {
                console.error('Error fetching student:', error);
            }
        };
        getPosts();
    }, []);


    console.log(items.createNotices);
    return (
        <div className='flex'>
            <Button color='error' variant="contained">Update</Button>

            <Marquee speed={100} className='border-2 bg-blue-500 text-white'>
              jdjd df sdfjds dfasdfkajsd ddfj fdfjdfdfdfsdfjsdjsd
            </Marquee>
        </div>
    )
}
