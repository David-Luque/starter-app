const cloudinary = require('cloudinary');
const { CloudinaryStorage } = require('multer-storge-cloudinary');
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    allowed_formats: ["jpg", "png"],
    folder: "starter-app folder"
  }
});

export default multer({ storage });