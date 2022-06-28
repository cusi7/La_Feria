import * as React from 'react';
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {confirmarEmail, limpiarAlert } from '../Redux/ActionsUser.js';

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

export default function Confirmar() {
    const dispatch = useDispatch();
    const params = useParams();

    const {token} = params;

    const mensaje = useSelector((state) => state.user.alert)

    React.useEffect(()=> {
        console.log('Confirmación de Email')
        dispatch(confirmarEmail(token))

        return () => dispatch(limpiarAlert())
    },[])
  const [open, setOpen] = React.useState(true);
  
  const handleClose = () => setOpen(false);
 

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });


  return (
    <ThemeProvider theme={darkTheme}>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ThemeProvider theme={darkTheme}>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" style={{color: "#FFFFFF"}}>
            {mensaje.msg}
          </Typography>
          <Link to= '/'>
          <Button variant="contained" size="medium" 
          style={{
            m: 1,
            backgroundColor: "#E47713",
            color: "#FFFFFF",
        }}>
            HOME
        </Button>

          </Link>
          
        </Box>
        </ThemeProvider>
      </Modal>
    </ThemeProvider>
  );
}
