import React , { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { styled, alpha, useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import StoreIcon from '@mui/icons-material/Store';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';

import Registro from '../Pages/Register.js';
import Login from '../Pages/Login.js';


const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function NavBar(props) {

  const actualUser = props.usuario;
  const dispatch = useDispatch();

  const mount = async function () {
      try {
          await dispatch(user());
      } catch (error) {
         console.log(error)
      }
  };

  useEffect(() => {
      console.log('Bienvenido');
      mount();
  }, []);

  const [openR, setOpenR] = React.useState(false);
  const openRegister = () => setOpenR(true);
  const closeRegister = () => setOpenR(false);

  const [openL, setOpenL] = React.useState(false);
  const openLogin = () => setOpenL(true);
  const closeLogin = () => setOpenL(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const [user, setUser] = React.useState({});

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Mi Perfil</MenuItem>
      <MenuItem onClick={handleMenuClose}>Mi Tienda</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }} >
      
      <AppBar position="fixed" style={{ background: '#EDB235' }} >
        
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
          >
            La Feria
          </Typography>
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search???"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
          <Box sx={{ flexGrow: 1 }} />
          
          

             {actualUser.nombre ? <>
              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 products" color="inherit">
              <Badge badgeContent={4} color="error">
                 <ShoppingCartIcon />
              </Badge>
            </IconButton>
                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                          <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                          </Badge>
                  </IconButton>

                  <IconButton
                          size="large"
                          edge="end"
                          aria-label="account of current user"
                          aria-controls={menuId}
                          aria-haspopup="true"
                          onClick={handleProfileMenuOpen}
                          color="inherit"
                        >
                          <Avatar alt= {actualUser.nombre} src= {actualUser.avatar} />
                  </IconButton>
                  </Box>
                  <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
                  </Box>
                  </> : <>
                  <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                      <Button variant="contained" size="medium" style={{
            backgroundColor: "#EDB235",
            color: "#FFFFFF"
        }} onClick={openRegister}>REGISTRATE</Button>
                      <Button variant="contained" size="medium" style={{
            backgroundColor: "#EDB235",
            color: "#FFFFFF"}} onClick={openLogin}>INGRESA</Button>
                  </Box>
              </>
             }
        
        </Toolbar>

      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      <Modal
        open={openR}
        onClose={closeRegister}
      >
        <ThemeProvider theme={darkTheme}>
         
               <Registro />
          
        </ThemeProvider>
      </Modal>

      <Modal
        open={openL}
        onClose={closeLogin}
      >
        <ThemeProvider theme={darkTheme}>
         
               <Login />
          
        </ThemeProvider>
      </Modal>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >

        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>

        <Divider />
        
        {/* <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        <ListItem key= 'Favoritos' disablePadding>
              <ListItemButton>
                
                <ListItemIcon>
                   <FavoriteIcon />
                </ListItemIcon>

                <ListItemText primary= 'Favoritos' />

              </ListItemButton>
            </ListItem>

            <ListItem key= 'Carrito' disablePadding>
              <ListItemButton>
                
                <ListItemIcon>
                   <ShoppingCartIcon />
                </ListItemIcon>

                <ListItemText primary= 'Carrito' />

              </ListItemButton>
            </ListItem>

            <ListItem key= 'Compras' disablePadding>
              <ListItemButton>
                
                <ListItemIcon>
                   <ReceiptIcon />
                </ListItemIcon>

                <ListItemText primary= 'Compras' />

              </ListItemButton>
            </ListItem>

            <Divider />

         {actualUser.tienda ? <>
          <ListItem key= 'Mi Tienda' disablePadding>
              <ListItemButton>
                
                <ListItemIcon>
                   <StoreIcon />
                </ListItemIcon>

                <ListItemText primary= 'Mi Tienda' />

              </ListItemButton>
            </ListItem>
           </> : <>
           <ListItem key= 'Crear Tienda' disablePadding>
              <ListItemButton>
                
                <ListItemIcon>
                   <AddBusinessIcon />
                </ListItemIcon>

                <ListItemText primary= 'Crear Tienda' />

              </ListItemButton>
            </ListItem>
           </>
           }
          
           <ListItem key= 'Ventas' disablePadding>
              <ListItemButton>
                
                <ListItemIcon>
                   <BusinessCenterIcon />
                </ListItemIcon>

                <ListItemText primary= 'Ventas' />

              </ListItemButton>
            </ListItem>
        

        <Divider />

        <List>
          {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))} */}
          
          <ListItem key= 'Mensajes' disablePadding>
              <ListItemButton>
                
                <ListItemIcon>
                   <MailIcon />
                </ListItemIcon>

                <ListItemText primary= 'Mensajes' />

              </ListItemButton>
            </ListItem>

            <Divider />

            <ListItem key= 'Ajustes' disablePadding>
              <ListItemButton>
                
                <ListItemIcon>
                   <SettingsIcon />
                </ListItemIcon>

                <ListItemText primary= 'Ajustes' />

              </ListItemButton>
            </ListItem>

        </List>

      </Drawer>
      
    </Box>
  );
}
