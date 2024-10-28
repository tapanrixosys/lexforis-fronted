import React, { useState } from 'react';
import { Grid, Box, Typography, TextField, Button, InputAdornment, IconButton } from '@mui/material';
import { MailOutlined, UserOutlined, EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import companyLogo from "./../../assets/images/icons/componay log.png";

export default function AuthPage() {
  const navigate = useNavigate();  // Correctly use the navigate hook inside the component

  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Toggle password visibility
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };

  // Function to handle sign up button click
  const handleLoginClick = () => {
    navigate('/login');  // Use navigate correctly within the component
  };

  return (
    <Grid container sx={{ height: '100vh' }}>
      {/* Left Side (Branding Section) */}
      <Grid
        item
        xs={8}
        md={8}
        sx={{
          backgroundImage: 'url("/path-to-your-background-image.jpg")',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          padding: '10px',
        }}
      >
        <Box>
          <img src={companyLogo} alt="Company Logo" style={{ width: '100px', height: 'auto' }} />
          <Typography variant="h3" gutterBottom style={{ color: 'black' }}>
            Bienvenido a Ciberconsultores
          </Typography>
          <Typography variant="subtitle1" style={{ color: 'black' }}>
            Su gestor en la nube
          </Typography>
        </Box>
      </Grid>

      {/* Right Side (Login Form Section) */}
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 5,
          backgroundColor: 'white',
        }}
      >
        {/* Logo */}
        <Box sx={{ mb: 2 }}>
          <img src={companyLogo} alt="Company Logo" style={{ width: '100px', height: 'auto' }} />
        </Box>

        {/* Name Input */}
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          sx={{ mb: 3 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton >
                <UserOutlined />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Email Input */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ mb: 3 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton >
                  <MailOutlined />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Password Input */}
        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}  // Toggle between text and password
          variant="outlined"
          fullWidth
          sx={{ mb: 3 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility}>
                  {showPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Confirm Password Input */}
        <TextField
          label="Confirm Password"
          type={showConfirmPassword ? 'text' : 'password'}  // Toggle between text and password
          variant="outlined"
          fullWidth
          sx={{ mb: 3 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleToggleConfirmPasswordVisibility}>
                  {showConfirmPassword ? <EyeInvisibleOutlined /> : <EyeOutlined />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Sign Up Button */}
        <Button variant="contained" color="primary" fullWidth sx={{ mb: 3 }} onClick={handleLoginClick}>
          Sign Up
        </Button>
      </Grid>
    </Grid>
  );
}
