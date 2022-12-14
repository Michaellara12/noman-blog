// Next JS
import NextLink from 'next/link';
import Router from 'next/router';

// Dependencies
import { useFormik } from 'formik';
import * as Yup from 'yup';

// MUI
import { Box, Button, Grid, Link, TextField, Typography, Alert, Snackbar } from '@mui/material';

// Icons
import GoogleIcon from '@mui/icons-material/Google';

// Firebase
import { useAuth } from '../../contexts/AuthContext';
import { useState, useRef } from 'react';
import { setDoc } from 'firebase/firestore'
import db from '../../lib/firebase';

// <-----------------------------------------> //

function LoginForm() {

  const { signInWithGoogle, login } = useAuth()
  const [open, setOpen] = useState(false)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  // Snackbar
  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // Auth 
  async function ingresarConGoogle(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      const userCredential = await signInWithGoogle()
      const name = userCredential.user.displayName.split(" ")
      const dbRef = db.collection("users").doc(userCredential.user.uid)
      dbRef.get()
        .then((snapshot) => {
          if(snapshot.exists) {
            Router.push("/")
          } else {
            setDoc(dbRef, {
            primerNombre: name[0],
            apellido: name[1],
            fotoPerfil: userCredential.user.photoURL
          })
        }
      })
    } catch {
      setError('Oops algo salió mal, por favor intentalo más tarde')
    }
  }

  async function ingresarConEmail(e) {
    e.preventDefault()
    try {
        // Reset error to empty
        setError('')
        setLoading(true)
        // console.log(formik.values.email, formik.values.password)
        await login(formik.values.email, formik.values.password)
        router.push("/")

    } catch(error) {
      handleClick()
    }

    setLoading(false)


  }
  

    const formik = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        validationSchema: Yup.object({
          email: Yup
            .string()
            .email('Por favor agrega un email válido')
            .max(255)
            .required('Este campo es obligatorio'),
          password: Yup
            .string()
            .max(255)
            .required('Este campo es obligatorio')
        }),
      });
    
  return (
    <>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
            El usuario o contraseña son incorrectos
          </Alert>
        </Snackbar>
        <Box
            component="main"
            sx={{
            alignItems: 'center',
            display: 'flex',
            flexGrow: 1,
            minHeight: '100%'
            }}
        >
     
            <form>
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
              <Grid
                item
                xs={12}
                md={12}
              >
                <Button
                  color="secondary"
                  fullWidth
                  size="large"
                  startIcon={<GoogleIcon />}
                  variant="contained"
                  onClick={ingresarConGoogle}
                  // disabled={loading}
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
                // type="submit"
                variant="contained"
                onClick={ingresarConEmail}
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
        </Box>


    </>
  )
}

export default LoginForm