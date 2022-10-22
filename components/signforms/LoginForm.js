// Next JS
import NextLink from 'next/link';
import Router from 'next/router';

// Dependencies
import { useFormik } from 'formik';
import * as Yup from 'yup';

// MUI
import { Box, Button, Container, Grid, Link, TextField, Typography, Paper } from '@mui/material';

// Icons
import GoogleIcon from '@mui/icons-material/Google';

function LoginForm() {

    const formik = useFormik({
        initialValues: {
          email: 'demo@devias.io',
          password: 'Password123'
        },
        validationSchema: Yup.object({
          email: Yup
            .string()
            .email('Must be a valid email')
            .max(255)
            .required('Email is required'),
          password: Yup
            .string()
            .max(255)
            .required('Password is required')
        }),
        onSubmit: () => {
          Router
            .push('/')
            .catch(console.error);
        }
      });
    
  return (
    <>
        <Box
            component="main"
            sx={{
            alignItems: 'center',
            display: 'flex',
            flexGrow: 1,
            minHeight: '100%'
            }}
        >
     
            <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Ingresar
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Ingresa a la plataforma
              </Typography>
            </Box>
            <Grid
              container
              spacing={3}
            >
              {/* <Grid
                item
                xs={12}
                md={6}
              >
                <Button
                  color="info"
                  fullWidth
                  startIcon={<ArrowBackIosIcon />}
                  onClick={() => formik.handleSubmit()}
                  size="large"
                  variant="contained"
                >
                  Login with Facebook
                </Button>
              </Grid> */}
              <Grid
                item
                xs={12}
                md={12}
              >
                <Button
                  color="error"
                  fullWidth
                  onClick={() => formik.handleSubmit()}
                  size="large"
                  startIcon={<GoogleIcon />}
                  variant="contained"
                >
                  Ingresa con Google
                </Button>
              </Grid>
            </Grid>
            <Box
              sx={{
                pb: 1,
                pt: 3
              }}
            >
              <Typography
                align="center"
                color="textSecondary"
                variant="body1"
              >
                o ingresa con tu email
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Contraseña"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Ingresar ahora
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              ¿Aún no tienes una cuenta?
              {' '}
              <NextLink
                href="/registro"
              >
                <Link
                  // to="/registro"
                  variant="subtitle2"
                  underline="hover"
                  sx={{
                    cursor: 'pointer'
                  }}
                >
                  Regístrate
                </Link>
              </NextLink>
            </Typography>
          </form>
          {/* </Container> */}
        </Box>


    </>
  )
}

export default LoginForm