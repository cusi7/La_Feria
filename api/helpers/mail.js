const nodemailer = require("nodemailer");

const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;

  var transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  //MAIL
  const mail = await transport.sendMail({
    from: '"La Feria" <cuentas@laFeria.com>',
    to: "receiver@sender.com",
    subject: "La Feria - Confirma tu cuenta",
    text: "Confirma tu cuenta",
    html: `
        <h3>Hola ${nombre}, confirma tu cuenta mediante el siguiente enlace</h3>
        <a href=""><h4>CONFIRMA LA CUENTA</h4></a>
        <p>Si tu no creaste una cuenta en La Feria, ignora este mail</p>
            `,
  });
};

module.exports = {
    emailRegistro
};