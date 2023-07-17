import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { registerUser } from 'Redux/auth/operations';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#608B38',
    },
  },
});

export default function RegisterPage() {
  const dispatch = useDispatch();
  const [empty, setEmpty] = useState({ name: false, email: false });
  const [passwordValid, setPasswordValid] = useState({ password: false });

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const user = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };

    if (user.name === '') {
      setEmpty(prev => ({ ...prev, name: true }));
      return;
    }
    if (user.email === '') {
      setEmpty(prev => ({ ...prev, email: true }));
      return;
    }

    if (user.password.length < 7 && user.password === '') {
      setPasswordValid(prev => ({ ...prev, password: true }));
      return;
    }

    dispatch(registerUser(user));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{
          height: '100vh',
          backgroundImage: `url("https://pixabay.com/get/ga2bb7c3dfd1152abc224fc2d88e0d0f9f7aa59c43aa62e9afdb79eaf767ad78f04dea3e5474852a7e0f181b8df63f2a1b4d064f4d89036f1310267c0e7112300_1920.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: t =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <CssBaseline />
        <Grid item xs={false} sm={6} md={7} />
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          component={Paper}
          elevation={24}
          square
          sx={{
            height: '100vh',
            background: '#ffffffb0',
            backdropFilter: 'blur(7.5px)',
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              component="h1"
              variant="h5"
              sx={{
                color: '#82878f',
                textShadow: '-1px -1px 1px #ffffff31, 1px 1px 1px #00000031',
              }}
            >
              Sign Up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    autoComplete="given-name"
                    name="name"
                    autoFocus
                    error={empty.name}
                    sx={{ boxShadow: 3 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    error={empty.email}
                    sx={{ boxShadow: 3 }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    sx={{ boxShadow: 3 }}
                    error={passwordValid.length < 7}
                    onChange={e => setPasswordValid(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, boxShadow: 3 }}
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
