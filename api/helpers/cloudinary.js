require("dotenv").config();
const cloudinary = require("cloudinary");

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_API_SECRET 
  });

  exports.uploads = (file) => {
    return new Promise((resolve) => {
      cloudinary.uploader.upload(
        file,
        function(error, result) {console.log(result, error)}
      );
    });
  };