import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { Section } from 'components/Section/Section';

const HomePage = () => {
  return (
    <Grid
      container
      component="main"
      sx={{
        height: '100vh',
        backgroundImage: `url("https://pixabay.com/get/g972f53e45937e65b544148a3822a32514af6772e10cc69c67478db3aa836afa20f171b08b932057e03ee8a4e0a42847ec1217559d4dff176789fb33423ace158_1920.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundColor: t =>
          t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
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
          backdropFilter: 'blur(6.5px)',
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
          <Grid container spacing={2}>
            <Section title="Welcome to Phonebook!"></Section>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomePage;
