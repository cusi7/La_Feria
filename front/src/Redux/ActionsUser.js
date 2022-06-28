import axios from 'axios';

const ALERT = 'ALERT';
const LIMPIAR_ALERT = 'LIMPIAR_ALERT';
const GET_USUARIO = 'GET_USUARIO';

export function registroUsuario(usuario) {
    return async function(dispatch) {
        try {
              const back = await axios.post('http://localhost:3001/usuario/registro', usuario);
    
              return dispatch({
                type: ALERT,
                payload: back.data
              });
            
        } catch (error) {
            return dispatch({
                type: ALERT,
                payload: error.response.data
            })
        }

    }
    
};
export function limpiarAlert() {
    return function(dispatch) {
        return dispatch({
            type: LIMPIAR_ALERT
        })
    }

};
export function confirmarEmail(token) {
    return async function(dispatch) {
        try {
              const back = await axios.put(`http://localhost:3001/usuario/confirmarEmail/${token}`);
    
              return dispatch({
                type: ALERT,
                payload: back.data
              });
            
        } catch (error) {
            return dispatch({
                type: ALERT,
                payload: error.response.data
            })
        }

    }
};
export function login(usuario) {
    return async function(dispatch) {
        try {
            const back = await axios.post('http://localhost:3001/usuario/login', usuario);

            localStorage.setItem("token", back.data.token);

            return dispatch({
                type: ALERT,
                payload: back.data.mensaje? back.data.mensaje : null
            })

        } catch(error) {
            return dispatch({
                type: ALERT,
                payload: error.response.data
            })
        }
    }
};

export function getUsuario() {
    return async function (dispatch) {
      try {
        const token = localStorage.getItem("token");
      
        const config = {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: token,
          },
        };
  
        const back = await axios.get('http://localhost:3001/usuario/perfil', config);
  
        return dispatch({
          type: GET_USUARIO,
          payload: back.data,
        });
      } catch (error) {
        return dispatch({
            type: ALERT,
            payload: error.response.data
        })
      }
    };
  }

export {
    ALERT,
    LIMPIAR_ALERT,
    GET_USUARIO
}