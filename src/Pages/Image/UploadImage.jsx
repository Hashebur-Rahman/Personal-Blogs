import { Box, Button, TextField } from '@mui/material';
import React, { useState, ChangeEvent, useRef } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { CopyToClipboard } from 'react-copy-to-clipboard';

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
  const [imageUrl, setImageURL] = useState(null);
  const [copyUrl, setCopyUrl] = useState('')
  const inputRef = useRef(null);

  function handleImage(event) {
    setFile(event.target.files[0]);
    setImageURL(URL.createObjectURL(event.target.files[0]));
  }

  const onSubmit = async (event) => {
    event.preventDefault();

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
      setCopyUrl(result);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };



  console.log(copyUrl);
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
      <Box className='bg-white pb-10'>
        <form onSubmit={onSubmit}>
          <Box className='text-center text-2xl font-bold uppercase mb-5'>Upload and share your images.</Box>
          <Box className='flex justify-center  mb-5' >
            {imageUrl && (
              <Box className='mt-5'>
                <img className='h-60 w-52' src={imageUrl} alt="Preview" />
              </Box>
            )}
          </Box>
          <Box className='flex flex-col space-y-2 items-center justify-center'>
            <Button component="label"
              onChange={handleImage}
              variant="contained"
              startIcon={<CloudUploadIcon />}>
              Start Uploading
              <VisuallyHiddenInput type="file" />
            </Button>
            {file && (
              <Button variant='contained' className='pt-5' type='submit'>Upload</Button>
            )}
          </Box>
        </form>
        {
          copyUrl && (
            <Box className=' pt-5  flex justify-center'>
              <Box className='w-1/2'>

                {
                  copyUrl?.secure_url != undefined &&
                  <TextField
                    fullWidth
                    value={copyUrl.secure_url}
                    readOnly
                    defaultValue={copyUrl.secure_url} />
                }
              </Box>

              <Box>
                <CopyToClipboard text={copyUrl.secure_url}>
                  <Button size='large' variant='contained'>Copy</Button>
                </CopyToClipboard>
              </Box>
            </Box>
          )
        }
      </Box>
    </Box>
  );
}
