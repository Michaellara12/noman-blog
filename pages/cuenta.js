// MUI
import { Box, Container, Grid, Typography } from '@mui/material';

// Components
import AppLayout from '../layout/AppLayout';
import AccountProfile from '../components/account/AccountProfile'
import { AccountProfileDetails } from '../components/account/AccountProfileDetails';

// Auth
import { privatePage } from '../contexts/FirebaseAuth';

// Next JS
import Head from 'next/head';

// <------------------------------------------> //

function cuenta() {

  return (
    <>
    <Head>
      <title>Perfil | Noman</title>
    </Head>
    <AppLayout>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Typography
            sx={{ mb: 3 }}
            variant="h4"
          >
            Cuenta
          </Typography>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={4}
              md={6}
              xs={12}
            >
              <AccountProfile />
            </Grid>
            <Grid
              item
              lg={8}
              md={6}
              xs={12}
            >
              <AccountProfileDetails />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </AppLayout>
    </>
  )
}

export default privatePage(cuenta)