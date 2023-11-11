import { Box, Button } from '@mui/material';
import React, { useState, ChangeEvent } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

export default function UploadImage() {
  const [file, setFile] = useState(null);

  function handleImage(event) {
    setFile(URL.createObjectURL(event.target.files[0]));
    console.log(URL.createObjectURL(event.target.files[0]));


  }

  return (
    <Box>
      <Box className="hero h-[440px]" style={{ backgroundImage: 'url("/teacher.jpg")' }}>
        <Box className="hero-overlay bg-opacity-60"></Box>
        <Box className="hero-content text-center text-neutral-content">
          <Box className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Upload image to Get URL</h1>
          </Box>
        </Box>
      </Box>
      <Box className=' '>
        <form>
          <Box className='text-center text-2xl font-bold uppercase mb-5'>Upload and share your images.</Box>
          <Box className='flex justify-center'>
            <Button component="label"
              onChange={handleImage}
              variant="contained"
              startIcon={<CloudUploadIcon />}>
              Start Uploading
              <VisuallyHiddenInput type="file" />
            </Button>
          </Box>

          <Box className='flex justify-center mb-5' >
            {file && (
              <Box className='mt-5'>

                <img className='h-60 w-52' src={file} alt="Preview" />
              </Box>
            )}
          </Box>
        </form>
      </Box>
    </Box>
  );
}
