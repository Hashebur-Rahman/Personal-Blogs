import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import axios from 'axios';
import { SERVER_URL } from '../../config/config';
import { Box } from '@mui/material';


export default function CVMaker() {
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

  // setImageURL(result.secure_url);
  // console.log("result", result.secure_url);

  // try {
  //   const response = await axios.post(`${SERVER_URL}/api/teachers`, { ...data, image: result.secure_url });
  //   console.log('Data uploaded successfully', response.data);
  // } catch (error) {
  //   console.error('Error uploading data', error);
  // }



  return (
    <Box>
      <Box className="hero h-[440px]" style={{ backgroundImage: 'url("/teacher.jpg")' }}>
        <Box className="hero-overlay bg-opacity-60"></Box>
        <Box className="hero-content text-center text-neutral-content">
          <Box className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Make your Professional CV</h1>
          </Box>
        </Box>

      </Box>
      <Box className='bg-white px-5'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className='text-center bg-white text-4xl mb-5 border-b-2 '> Add Your Information To Make your Professional CV  </Box>

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
                label="Age"
                fullWidth
                type="number"
                {...register("age", { required: 'Age is required' })}
                error={Boolean(errors.age)}
                helperText={errors.age && errors.age.message}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Gender"
                fullWidth
                select
                {...register("gender", { required: 'Gender is required' })}
                error={Boolean(errors.gender)}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
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
              <TextField
                label="Education"
                fullWidth
                {...register("education", { required: 'Education is required' })}
                error={Boolean(errors.education)}
                helperText={errors.education && errors.education.message}
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
                label="Position"
                fullWidth
                select
                {...register("position", { required: 'position is required' })}
                error={Boolean(errors.position)}
              >
                <MenuItem value="Head Teacher">Head Teacher</MenuItem>
                <MenuItem value="Ass. HeadTeacher">Ass. HeadTeacher</MenuItem>
                <MenuItem value="Teacher">Teacher</MenuItem>
                <MenuItem value="Ass.Teacher">Ass.Teacher</MenuItem>
                <MenuItem value="Pion">Pion</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Subject"
                fullWidth
                select
                {...register("subject", { required: 'subject is required' })}
                error={Boolean(errors.subject)}
              >
                <MenuItem value="Bangla">Bangla</MenuItem>
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Math">Math</MenuItem>
                <MenuItem value="Ict">ICT</MenuItem>
                <MenuItem value="Science">Science</MenuItem>
                <MenuItem value="Islam">Islam</MenuItem>
              </TextField>
            </Grid>
             
            <Grid item xs={6}>
              <TextField
                label="NID Card Number"
                fullWidth
                type="number" // Set type as "date"
                {...register("idNumber", { required: 'ID Card Number  is required' })}
                error={Boolean(errors.idNumber)}
                helperText={errors.idNumber && errors.idNumber.message}
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
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  )
}
