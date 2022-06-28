
import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';

import { ValidacionL } from '../helpers/ValidacionL.js';
import { login } from '../Redux/ActionsUser.js';
import { limpiarAlert } from '../Redux/ActionsUser.js';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

export default function Login() {

  const dispatch = useDispatch();

  const alertMsg = useSelector((state) => state.user.alert);

  React.useEffect(() => {
    console.log('Bienvenido al login de usuario');
    dispatch(limpiarAlert())

    return () => dispatch(limpiarAlert())
   }, []);

   const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false
  });

  const [errors, setErrors] = React.useState({});
    
      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        setErrors(ValidacionL({
          ...values,
          [event.target.id]: event.target.value
          }) 
          )
      };
    
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      function disabledButton() {
        if (Object.keys(errors).length > 0 || !values.email || !values.password) return true
        else return false
      };

      async function loginUsuario() {
        try {
          const usuarioLogin = {
            email: values.email,
            password: values.password
          };
          await dispatch( login(usuarioLogin) )

        }catch (error) {
          console.log(error)
        }
      };

    const [oopen, setOOpen] = React.useState(false);
      
      const handleClose = (reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOOpen(false);
        dispatch(limpiarAlert());
      };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );


  return (
    <>
    <Snackbar
        autoHideDuration={6000}
        open={alertMsg.msg ? true : oopen}
        onClose={handleClose}
        message={alertMsg.msg}
        action={action}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        TransitionComponent={TransitionLeft}
      />
    <Box
      component="form"
      sx={ style }
      noValidate
      autoComplete="off"
    >
        <TextField
          required
          error= {errors.email ? true : false}
          id="email"
          label="Email"
          variant="filled"
          value={values.email}
          onChange={handleChange('email')}
          helperText= {errors.email ? errors.email : ''}
          sx={{ m: 1, width: '25ch' }}
        />
        
        <TextField
          error= {errors.password ? true : false}
          id="password"
          label="password"
          variant="filled"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          helperText= {errors.password ? errors.password : ''}
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            endAdornment:
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
          }}
        />
        
        <Button variant="contained" size="medium" style={{
            m: 1,
            backgroundColor: "#E47713",
            color: "#FFFFFF"
        }}
        disabled= {disabledButton()}
        onClick={loginUsuario}
        onMouseDown={handleMouseDownPassword}
        >INGRESAR</Button>
      
    </Box>
    </>
  );
};