import React, { useState } from 'react';
import { Box, Paper, TextField, Button, FilledInput, FormControl, InputLabel, IconButton, InputAdornment } from '@mui/material';
import { useForm } from "react-hook-form";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { SERVER_URL } from '../../../config/config';




export default function Login() {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
    });

    const onSubmit = async (data) => {
        console.log(data);

        try {
            const response = await axios.post(`${SERVER_URL}/api/studentLogin`, data);
            console.log("User Login Successfully", response.data);
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    };

    // Show password start
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Box className='p-10 h-screen'>
            <Paper className='h-full'>
                <Box className="flex h-full gap-10 justify-center items-center">
                    <form onSubmit={handleSubmit(onSubmit)} className="flex-col p-10 w-[650px] gap-5 flex" >
                        <Box className="text-center my-5 text-4xl font-semibold">
                            Student Log In !!!
                        </Box>

                        <Box >
                            <TextField
                                label="Email"
                                variant="filled"
                                fullWidth
                                {...register("email")}
                                error={Boolean(errors.email)}
                                helperText={errors.email?.message}
                            />
                        </Box>
                        <Box>
                            <FormControl variant="filled" fullWidth error={Boolean(errors.password)}>
                                <InputLabel htmlFor="filled-adornment-password">
                                    Password
                                </InputLabel>
                                <FilledInput
                                    id="filled-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    {...register("password")}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                                {errors.password && (
                                    <p className="text-[red]">{errors.password.message}</p>
                                )}
                            </FormControl>

                        </Box>

                        <Button variant="contained" type="submit">Login</Button>
                        <Box className="text-center">I Have No Account, Please <Link className='text-red-500' to='/auth/register'>Register</Link> </Box>
                    </form>
                    {/* image section */}
                    <Box sx={{ backgroundImage: 'url(/auth-bg.jpg)' }} className='flex-grow bg-cover bg-center bg-no-repeat h-full bg-blue-400' />
                </Box>
            </Paper>
        </Box>
    )
}
