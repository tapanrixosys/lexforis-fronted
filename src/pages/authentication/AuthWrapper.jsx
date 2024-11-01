import React from 'react';
import { Grid, Box, Typography, TextField, Button, Link, InputAdornment, IconButton } from '@mui/material'; // Import InputAdornment
import { Link as RouterLink, useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import { MailOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'; // Include UserOutlined for the candidate icon
import companyLogo from "./../../assets/images/icons/componay log.png";

export default function AuthPage() {
  const navigate = useNavigate();  // Initialize the useNavigate hook

  const handleRegisterClick = () => {
    navigate('/register');  // Correctly using navigate here
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
          padding: "10px",
        }}
      >
        <Box>
          <img src={companyLogo} alt="Company Logo" style={{ width: '100px', height: 'auto' }} />
          <Typography variant="h3" gutterBottom style={{ color: "black" }}>
            Bienvenido a Ciberconsultores
          </Typography>
          <Typography variant="subtitle1" style={{ color: "black" }}>
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

        {/* Email Input */}
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ mb: 3 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <UserOutlined /> {/* Candidate icon */}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Password Input */}
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          sx={{ mb: 3 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <LockOutlined />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        {/* Forgot Password Link */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', mb: 3 }}>
          <Link href="#" sx={{ alignSelf: 'flex-start' }}>
            Forget Password?
          </Link>
          <Typography variant="body2">
            Not a Member? <span onClick={handleRegisterClick} style={{ cursor: 'pointer', color: 'blue' }}>Register Now</span>
          </Typography>
        </Box>

        {/* Login Button */}
        <Button variant="contained" color="primary" fullWidth sx={{ mb: 3 }}>
          Login
        </Button>

        {/* Create Account Link */}
        <Button variant="text" fullWidth>
          Crear una cuenta
        </Button>
      </Grid>
    </Grid>
  );
}
