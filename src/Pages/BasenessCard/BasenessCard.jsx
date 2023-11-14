import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { SERVER_URL } from '../../config/config';
import { Box } from '@mui/material';
export default function BasenessCard() {
  const [file, setFile] = useState();
  const [imageUrl, setImageURL] = useState(null);

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
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  return (
    <Box>
      <Box className="hero h-[440px]" style={{ backgroundImage: 'url("/teacher.jpg")' }}>
        <Box className="hero-overlay bg-opacity-60"></Box>
        <Box className="hero-content text-center text-neutral-content">
          <Box className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold"> Making Professional a Baseness Card</h1>
          </Box>
        </Box>
      </Box>
      <Box className='bg-white px-5 py-10'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className='text-center bg-white text-4xl mb-5  text-black'> Making Professional a Baseness Card </Box>

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
                label="Company Name"
                fullWidth
                {...register("companyName", { required: 'Company Name is required' })}
                error={Boolean(errors.companyName)}
                helperText={errors.companyName && errors.companyName.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Job Title"
                fullWidth
                {...register("jobTitle", { required: 'Job Title is required' })}
                error={Boolean(errors.jobTitle)}
                helperText={errors.jobTitle && errors.jobTitle.message}
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
                label="Address"
                fullWidth
                {...register("address", { required: 'Address is required' })}
                error={Boolean(errors.address)}
                helperText={errors.address && errors.address.message}
              />
            </Grid>
            {imageUrl && ( // Display the image only when imageURL is not empty
              <Grid item xs={12}>
                <img src={imageUrl} alt="Uploaded" placeholder='photo' className='h-40 w-40 border-2' style={{ maxWidth: '100%' }} />
              </Grid>
            )}
            <Grid item xs={6}>
              <input type="file" accept="image/*" name="image" id="" onChange={handleImage} />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  )
}
