import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { logInUser } from 'Redux/auth/operations';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
  },
});

export default function LoginPage() {
  const dispatch = useDispatch();
  const [empty, setEmpty] = useState({ email: false, password: false });

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    const user = {
      email: data.get('email'),
      password: data.get('password'),
    };

    if (user.email === '') {
      setEmpty(prev => ({ ...prev, email: true }));
      return;
    }
    if (user.password === '') {
      setEmpty(prev => ({ ...prev, password: true }));
      return;
    }

    dispatch(logInUser(user));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid
        container
        component="main"
        sx={{
          height: '100vh',
          backgroundImage: `url("https://pixabay.com/get/g0fe96f89752457f700d1aecf789db8f1ea81d38689de2ed71829ca6c0a1e52cbcb43472274315b05e58b164af75f35af_1920.jpg")`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: t =>
            t.palette.mode === 'light'
              ? t.palette.grey[150]
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
              Sign In
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  error={empty.email}
                  sx={{ boxShadow: 3 }}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={empty.password}
                  sx={{ boxShadow: 3 }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, boxShadow: 3 }}
                >
                  Sign In
                </Button>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
