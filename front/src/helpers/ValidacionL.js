
export function ValidacionL(usuario) {
    let errors = {};
   
    if(usuario.email.length > 0 && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(usuario.email)) {
        errors.email = 'Email invalido'
    }
    if(usuario.password.length > 0 && usuario.password.length < 7) {
        errors.password = 'Debe contener al menos 7 caracteres'
    }

    return errors
}