import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {}
  },
  reducers: {
    user: state => {
        state.user =
        {
            // id: 2,
            // nombre: 'UserWoman',
            // avatar: "https://img.freepik.com/vector-gratis/mujer-avatar-mujer-negocios_38295-63.jpg",
            // mensajes: [{}, {}],
            // favoritos: [{}, {}],
            // carrito: [{}, {}],
            // tienda: [{
            //     nombre: "Taza code",
            //     stock: true,
            //     precio: 500,
            //     descripcion: ['Taza de cerámica sublimada con diseño "Code".', 'Ideal para programadores.', 'Apta para microondas.'],
            //     imagen: "https://desarrolladores.me/wp-content/uploads/2018/06/mockup-27614189-600x600.jpg",
            //     usuario : {
            //         id: 2,
            //         avatar: "https://img.freepik.com/vector-gratis/mujer-avatar-mujer-negocios_38295-63.jpg"
            //     }
            // },
            // {
            //     nombre: "Maceta calaca 3D",
            //     stock: true,
            //     precio: 600,
            //     descripcion: ['Maceta 3D con forma de calavera', 'Ideal para suculentas y cactus', 'Medidas: 12 cm x 11 cm x 17 cm'],
            //     imagen: "https://http2.mlstatic.com/D_NQ_NP_866097-MLM45296701514_032021-V.jpg",
            //     usuario : {
            //         id: 2,
            //         avatar: "https://img.freepik.com/vector-gratis/mujer-avatar-mujer-negocios_38295-63.jpg"
            //     }
            // },],
            // ventas: [{}, {}],
            // compras: [{}, {}],
            // reputacion: [{}, {}]
        }
        
        
    }
  }
})

// Action creators are generated for each case reducer function
export const { user } = userSlice.actions

export default userSlice.reducer