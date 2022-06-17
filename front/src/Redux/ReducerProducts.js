import { createSlice } from '@reduxjs/toolkit'

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: []
  },
  reducers: {
    allProducts: state => {
        state.products =
      [
        {
            nombre: "Taza code",
            stock: true,
            precio: 500,
            descripcion: ['Taza de cerámica sublimada con diseño "Code".', 'Ideal para programadores.', 'Apta para microondas.'],
            imagen: "https://desarrolladores.me/wp-content/uploads/2018/06/mockup-27614189-600x600.jpg",
            usuario : {
                id: 2,
              avatar: "https://img.freepik.com/vector-gratis/mujer-avatar-mujer-negocios_38295-63.jpg"
            }
        },
        {
            nombre: "Maceta calaca 3D",
            stock: true,
            precio: 600,
            descripcion: ['Maceta 3D con forma de calavera', 'Ideal para suculentas y cactus', 'Medidas: 12 cm x 11 cm x 17 cm'],
            imagen: "https://http2.mlstatic.com/D_NQ_NP_866097-MLM45296701514_032021-V.jpg",
            usuario : {
                id: 2,
                avatar: "https://img.freepik.com/vector-gratis/mujer-avatar-mujer-negocios_38295-63.jpg"
            }
        },
        {
            nombre: "Puff para mascotas",
            stock: false,
            precio: 1500,
            descripcion: ['Largo x Ancho: 50 cm x 50 cm', 'Raza de perro recomendada: mediana,chica', 'Material: polar-corderito', 'Es lavable: Sí'],
            imagen: "https://http2.mlstatic.com/D_NQ_NP_722591-MLA49958417590_052022-V.jpg",
            usuario : {
                id: 3,
                avatar: "https://img.freepik.com/vector-gratis/bulldog-frances-frenchie-perro-gafas-forma-corazon-rojo-aislado-icono-dibujos-animados-plana-mascara-cara-retrato-mascota-vector-cachorro-sonriente-emoji-emoticon-companero-mascota-canino-comico-avatar-vocacion_53500-1087.jpg"
            }
        },
        {
          nombre: "Taza code",
          stock: true,
          precio: 500,
          descripcion: ['Taza de cerámica sublimada con diseño "Code".', 'Ideal para programadores.', 'Apta para microondas.'],
          imagen: "https://desarrolladores.me/wp-content/uploads/2018/06/mockup-27614189-600x600.jpg",
          usuario : {
            id: 2,
            avatar: "https://img.freepik.com/vector-gratis/mujer-avatar-mujer-negocios_38295-63.jpg"
          }
      },
      {
          nombre: "Maceta calaca 3D",
          stock: true,
          precio: 600,
          descripcion: ['Maceta 3D con forma de calavera', 'Ideal para suculentas y cactus', 'Medidas: 12 cm x 11 cm x 17 cm'],
          imagen: "https://http2.mlstatic.com/D_NQ_NP_866097-MLM45296701514_032021-V.jpg",
          usuario : {
              id: 2,
              avatar: "https://img.freepik.com/vector-gratis/mujer-avatar-mujer-negocios_38295-63.jpg"
          }
      },
      {
          nombre: "Puff para mascotas",
          stock: false,
          precio: 1500,
          descripcion: ['Largo x Ancho: 50 cm x 50 cm', 'Raza de perro recomendada: mediana,chica', 'Material: polar-corderito', 'Es lavable: Sí'],
          imagen: "https://http2.mlstatic.com/D_NQ_NP_722591-MLA49958417590_052022-V.jpg",
          usuario : {
              id: 3,
              avatar: "https://img.freepik.com/vector-gratis/bulldog-frances-frenchie-perro-gafas-forma-corazon-rojo-aislado-icono-dibujos-animados-plana-mascara-cara-retrato-mascota-vector-cachorro-sonriente-emoji-emoticon-companero-mascota-canino-comico-avatar-vocacion_53500-1087.jpg"
          }
      },
      ]
    }
  }
})

// Action creators are generated for each case reducer function
export const { allProducts } = productsSlice.actions

export default productsSlice.reducer