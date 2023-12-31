import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { SERVER_URL } from '../../config/config';
import { Box, Paper } from '@mui/material';

export default function StudentCard() {
    const [file, setFile] = useState();
    const [imageUrl, setImageURL] = useState(null);

    const [card, setCard] = useState([]);

    const { register, handleSubmit, formState: { errors } } = useForm();


    function handleImage(event) {
        setFile(event.target.files[0]);
        setImageURL(URL.createObjectURL(event.target.files[0]));

    }


    const onSubmit = async (data) => {
        console.log(data);

        if (!file) {
            console.error('Please select an image');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'seytcuol'); // Replace with your upload preset
        formData.append('api_key', '512147963287944'); // Replace with your API key

        try {
            const response = await fetch('https://api.cloudinary.com/v1_1/dofqwdx2y/image/upload', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();
            console.log('Image uploaded:', result.secure_url);
            const postData = [...card, { image: result.secure_url, ...(typeof data === 'object' ? data : {}) }];
            setCard(postData);
        } catch (error) {
            console.error('Error uploading image:', error);
        }


    };

    console.log(card);

    return (
        <Box className="bg-white">
            <Box>
                <Box className="hero h-[440px]" style={{ backgroundImage: 'url("/teacher.jpg")' }}>
                    <Box className="hero-overlay bg-opacity-60"></Box>
                    <Box className="hero-content text-center text-neutral-content">
                        <Box className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Student ID card Making</h1>
                        </Box>
                    </Box>
                </Box>
                <Box className='bg-white px-5 py-10'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Box className='text-center bg-white text-black text-4xl mb-5 '> Add Your Information To Make your Student ID card</Box>

                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField
                                    label="Name"
                                    fullWidth
                                    {...register("name", { required: 'Name is required' })}
                                    error={Boolean(errors.name)}
                                    helperText={errors.name && errors.name.message}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Father Name"
                                    fullWidth
                                    {...register("fatherName", { required: 'Father Name is required' })}
                                    error={Boolean(errors.fatherName)}
                                    helperText={errors.fatherName && errors.fatherName.message}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label=" Mother  Name"
                                    fullWidth
                                    {...register("motherName", { required: 'Mother Name is required' })}
                                    error={Boolean(errors.motherName)}
                                    helperText={errors.motherName && errors.motherName.message}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="School Name"
                                    fullWidth
                                    {...register("schoolName", { required: 'School Name is required' })}
                                    error={Boolean(errors.schoolName)}
                                    helperText={errors.schoolName && errors.schoolName.message}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Email"
                                    fullWidth
                                    {...register("email", {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /\S+@\S+\.\S+/,
                                            message: 'Invalid email address',
                                        },
                                    })}
                                    error={Boolean(errors.email)}
                                    helperText={errors.email && errors.email.message}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Phone"
                                    fullWidth
                                    {...register("phone", { required: 'Phone is required' })}
                                    error={Boolean(errors.phone)}
                                    helperText={errors.phone && errors.phone.message}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Date of Birth"
                                    fullWidth
                                    type="date"
                                    InputLabelProps={{ shrink: true }} // Add this line
                                    {...register("dateOfBirth", { required: 'Date of Birth is required' })}
                                    error={Boolean(errors.dateOfBirth)}
                                    helperText={errors.dateOfBirth && errors.dateOfBirth.message}
                                />
                            </Grid>


                            <Grid item xs={6}>
                                <TextField
                                    label="Group"
                                    fullWidth
                                    select
                                    {...register("group", { required: 'Group is required' })}
                                    error={Boolean(errors.group)}
                                >
                                    <MenuItem value="Science">Science</MenuItem>
                                    <MenuItem value="Arts">Arts</MenuItem>
                                    <MenuItem value="commerce">Commerce</MenuItem>
                                </TextField>
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Session"
                                    fullWidth
                                    {...register("session", { required: 'session is required' })}
                                    error={Boolean(errors.session)}
                                    helperText={errors.session && errors.session.message}
                                />
                            </Grid>


                            <Grid item xs={6}>
                                <TextField
                                    label="Student Id  Number"
                                    fullWidth
                                    type="number" // Set type as "date"
                                    {...register("idNumber", { required: 'ID Card Number  is required' })}
                                    error={Boolean(errors.idNumber)}
                                    helperText={errors.idNumber && errors.idNumber.message}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Blood Group"
                                    fullWidth
                                    select
                                    {...register("bloodGroup", { required: 'Blood Group is required' })}
                                    error={Boolean(errors.bloodGroup)}
                                >
                                    <MenuItem value="A+">A+</MenuItem>
                                    <MenuItem value="B+">B+</MenuItem>
                                    <MenuItem value="AB+">AB+</MenuItem>
                                    <MenuItem value="O+">O+</MenuItem>
                                </TextField>
                            </Grid>

                            <Grid item xs={6}>
                                <input type="file" accept="image/*" name="image" id="" onChange={handleImage} />
                            </Grid>

                            {imageUrl && ( // Display the image only when imageURL is not empty
                                <Grid item xs={12}>
                                    <img src={imageUrl} alt="Uploaded" placeholder='photo' className='h-40 w-40 border-2' style={{ maxWidth: '100%' }} />
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <Button type="submit" variant="contained" color="primary">
                                    Create
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                </Box>
            </Box>

            <Box className="  w-72 mx-auto">
                {
                    card.map((item, index) => ((
                        <Paper key={index} elevation={2} className='w-72 px-2 py-3' >
                            <Box className="text-center font-bold"> {item.schoolName} </Box>
                            <Box className="flex justify-center"> <img className='h-24 ' src="/hashebur3.png" alt="" /></Box>

                            <div className="overflow-x-auto w-64">
                                <table className="table table-xs">

                                    <tbody>
                                        <tr>
                                            <th>Name </th>
                                            <td>: {item.name}</td>
                                        </tr>
                                        <tr>
                                            <th>Father Name</th>
                                            <td>: {item.fatherName}</td>

                                        </tr>
                                        <tr>
                                            <th>Mother Name</th>
                                            <td>: {item.motherName}</td>
                                        </tr>
                                        <tr>
                                            <th>Date Of Birth</th>
                                            <td>: {item.dateOfBirth}</td>
                                        </tr>
                                        <tr>
                                            <th>Department</th>
                                            <td>: {item.group}</td>
                                        </tr>
                                        <tr>
                                            <th>Session</th>
                                            <td>: {item.session}</td>
                                        </tr>
                                        <tr>
                                            <th>Blood Group</th>
                                            <td>: {item.bloodGroup}</td>
                                        </tr>
                                        <tr>
                                            <th>Student ID</th>
                                            <td>: {item.idNumber}</td>
                                        </tr>

                                    </tbody>

                                </table>
                            </div>

                        </Paper>

                    )))
                }

                <Box className="flex py-5  justify-center">
                    <Button size='small' variant='contained'> Download</Button>
                </Box>
            </Box>
        </Box>
    )
}
