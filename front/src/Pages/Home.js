import React, { useEffect }from "react";
import { useSelector, useDispatch } from 'react-redux';
import { allProducts } from '../Redux/ReducerProducts.js';
import ProductCard from '../Components/Product.js';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


import NavBar from '../Components/Navbar.js';
import {getUsuario} from '../Redux/ActionsUser.js';


export default function Home () {

    const dispatch = useDispatch();

    const mount = async function () {
        try {
            await dispatch(allProducts());
            await dispatch(getUsuario());
        } catch (error) {
           console.log(error)
        }
    };

    useEffect(() => {
        console.log('Bienvenido');
        mount();
    }, []);

    const products = useSelector(state => state.products.products);
    const userActual = useSelector(state => state.user.user);


    return (

        <Box sx={{ display: 'flex' }} bgcolor="#F5EFF3" >
            <NavBar usuario = {userActual}/>
             <Box mt= {9} >
             <Grid container spacing={1} >
            
            { products.length > 0 ? (
                    products.map( (p, index) => {
                        return (
                            <Grid item xs={6} sm={3}>
                                 <ProductCard data ={p}/>
                            </Grid>
                        )
                    })
                ) : (
                    <p>Lo siento, no se encontraron productos</p>
                )}

            </Grid>
                
            </Box> 
              
      </Box>
    )


}