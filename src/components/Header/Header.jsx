import { AppBar, UserBlock } from './Header.styled';
import NavbarAuth from 'components/NavbarAuth/NavbarAuth';
import { useAuth } from 'hooks/useAuth';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { Box, Toolbar, Typography } from '@mui/material';

const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box component={'header'} sx={{ position: 'relative', height: '36px' }}>
      <AppBar
        component={'nav'}
        sx={{
          background: '#94aae4',
          backdropFilter: 'blur(6.5px)',
          position: 'relative',
        }}
        elevation={6}
      >
        <Toolbar
          sx={{
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            {isLoggedIn ? <UserMenu /> : <NavbarAuth />}
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ my: 2, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
            }}
          >
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'flex' },
            }}
          >
            <UserBlock>{isLoggedIn ? <UserMenu /> : <NavbarAuth />}</UserBlock>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav"></Box>
      <Box>
        <Toolbar />
      </Box>
    </Box>
  );
};

export default Header;
