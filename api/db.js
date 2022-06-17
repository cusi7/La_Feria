const mongoose = require ('mongoose');

async function DB () {
    try {
      const conection = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Conectado a MongoDB!!');
    } catch (error) {
      console.log(`error: ${error.message}`);
    }
  };
  module.exports = DB;
