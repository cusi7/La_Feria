import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';

import { limpiarAlert } from '../Redux/ActionsUser.js';

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

export default function Alert() {

    const alertMsg = useSelector((state) => state.alert);

    const [open, setOpen] = React.useState(true);
    const [msg, setMsg] = React.useState('Hola');

    React.useEffect(() => {
        console.log('ALERT!!');
        if(alertMsg) {
            setOpen(true);
            setMsg(alertMsg.msg)
        }
    }, [alertMsg]);

    

    const dispatch = useDispatch();

    
      const handleClose = (reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
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
    <div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={msg}
        action={action}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        TransitionComponent={TransitionLeft}
      />
    </div>
  );
}
