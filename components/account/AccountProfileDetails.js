import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';

// Firebase
import { getAuth, updateProfile } from "firebase/auth";

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

// <--------------------------------------->//

import { useAuth } from '../../contexts/AuthContext';

export const AccountProfileDetails = (props) => {

  const { currentUser } = useAuth();
  const auth = getAuth();


  const [values, setValues] = useState({
    firstName: currentUser.displayName,
    lastName: 'Smith',
    email: currentUser.email,
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  // function updateProfile(e) {
  //   updateProfile(auth.currentUser, {
  //     displayName: values.firstName
  //   }).then(() => {
  //     // Router.push('/')
  //     console.log("name udated")
  //   }).catch((e) => {
  //     console.log(e)
  //   })
  //   console.log(values.firstName)
  // }

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="Edita tu información personal"
          title="Perfil"
          sx={{
            mb: '1.6rem'
          }}
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Por favor verifica tu primer nombre"
                label="Nombre"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
                disabled
              />
            </Grid>
            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Apellido"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid> */}
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Email"
                name="email"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
                disabled
              />
            </Grid>
            {/* <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Número de teléfono"
                name="phone"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>             */}
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={() => {updateProfile}}
            disabled
          >
            Guardar
          </Button>
        </Box>
      </Card>
    </form>
  );
};
