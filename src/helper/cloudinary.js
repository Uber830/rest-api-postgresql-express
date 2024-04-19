import { v2 as cloudinary } from "cloudinary";

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

// Upload image
const uploadImage = async (filepath) => {
  return await cloudinary.uploader.upload(filepath, {
    folder: "forum_db",
    resource_type: "image",
    tags: "images",
    overwrite: true,
  });
};

// Delete image
const deleteImage = async (public_id) => {
  return await cloudinary.uploader.destroy(public_id, {
    folder: "forum_db",
    invalidate: false,
    resource_type: "image",
    tags: "images",
  });
};

export { uploadImage, deleteImage };
