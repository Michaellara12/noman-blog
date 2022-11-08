// Next JS
import NextLink from 'next/link';
import Router from 'next/router';

// Dependencies
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

// MUI
import {
  Box,
  Paper,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@mui/material';

// Icons
import GoogleIcon from '@mui/icons-material/Google';

// Components
import { useAuth } from "../../contexts/AuthContext"
import { googleAuthProvider, auth } from '../../lib/firebase';
import { getAuth, updateProfile } from "firebase/auth";



const RegisterForm = () => {

  // useState
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Auth
  const { signup, signInWithGoogle, currentUser } = useAuth();

  async function ingresarConGoogle(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await signInWithGoogle()
      Router.push('/')
    } catch {
      setError('Oops algo salió mal, por favor intentalo más tarde')
    }
  }

  async function handleSubmit(e) {

    try {
      setError('')
      setLoading(true)
      await signup(formik.values.email, formik.values.password)
      const auth = getAuth();
      updateProfile(auth.currentUser, {
        displayName: formik.values.firstName + " " + formik.values.lastName
      }).then(() => {
        Router.push('/')
      }).catch((e) => {
        console.log(e)
      })
    } catch {
      setError('No fue posible crear una cuenta, por favor intentalo más tarde')
    }
  }

  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      policy: false
    },
    validationSchema: Yup.object({
      email: Yup
        .string()
        .email('Por favor agrega un email válido')
        .max(255)
        .required(
          'Este campo es obligatorio'),
      firstName: Yup
        .string()
        .max(255)
        .required('Este campo es obligatorio'),
      lastName: Yup
        .string()
        .max(255)
        .required('Este campo es obligatorio'),
      password: Yup
        .string()
        .max(255)
        .required('Este campo es obligatoriod'),
      policy: Yup
        .boolean()
        .oneOf(
          [true],
          'Para crear una cuenta debes aceptar nuestros Terminos & Condiciones'
        )
    }),
    onSubmit: () => {
      handleSubmit()
    }
  });

  return (
    <Paper
        sx={{
            py: '2rem',
            bgcolor: { xs: '#F4F6F8' }
        }}
    >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Crear una cuenta
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Utiliza tu email para crear una cuenta nueva
              </Typography>
            </Box>
            <Button
                  color="secondary"
                  fullWidth
                  onClick={ingresarConGoogle}
                  size="large"
                  startIcon={<GoogleIcon />}
                  variant="contained"
                >
                  Ingresa con Google
            </Button>
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
                o crea una cuenta con tu email
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              fullWidth
              helperText={formik.touched.firstName && formik.errors.firstName}
              label="Primer nombre"
              margin="normal"
              name="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              fullWidth
              helperText={formik.touched.lastName && formik.errors.lastName}
              label="Apellido"
              margin="normal"
              name="lastName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastName}
              variant="outlined"
            />
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
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
              <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              />
              <Typography
                color="textSecondary"
                variant="body2"
              >
                He leído los
                {' '}
                <NextLink
                  href="https://entey.net/terminos-y-condiciones-de-uso/"
                  passHref
                >
                  <Link
                    color="primary"
                    underline="always"
                    variant="subtitle2"
                  >
                    Términos & Condiciones
                  </Link>
                </NextLink>
              </Typography>
            </Box>
            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>
                {formik.errors.policy}
              </FormHelperText>
            )}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Crear cuenta
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              ¿Tienes una cuenta creada?
              {' '}
              <NextLink
                href="/ingresar"
                passHref
              >
                <Link
                  variant="subtitle2"
                  underline="hover"
                >
                  Ingresar
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
    </Paper>
  );
};

export default RegisterForm;