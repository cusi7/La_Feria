import React, { useEffect }from "react";
import { useSelector, useDispatch } from 'react-redux';
import { allProducts } from '../Redux/Reducer.js';
import ProductCard from './Product.js';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


import NavBar from './Navbar.js';


export default function Home () {

    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    const mount = async function () {
        try {
            await dispatch(allProducts());
        } catch (error) {
           console.log(error)
        }
    };

    useEffect(() => {
        console.log('Bienvenido');
        mount();
    }, []);


    return (

        <Box sx={{ display: 'flex' }} bgcolor="#F5EFF3" >
            <NavBar />
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