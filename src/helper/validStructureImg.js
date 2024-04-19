// Extension of the file valid for uploading
const uploadExtension = {
  jpg: "jpg",
  jpeg: "jpg",
  png: "png",
  gif: "gif",
  svg: "svg",
  webp: "webp",
};

const objectExtensionFile = (file) => {
  return file.split(".").pop();
};

const validateSise = (size) => {
  if (size > 10000000) {
    return false;
  }
  return true;
};

/**
 * This function is used to validate the structure of the image is True or False
 * @param {object} file
 * @returns {object} Returns response true or false
 */
export const fileUploadCloud = (file) => {
  // Exists the file and check the extension
  !file ? false : true;
  const extension = objectExtensionFile(file?.name);

  // Check the extension of the file is valid
  if (!uploadExtension[extension]) {
    return {
      err: "Extension not allowed, please insert a valid image",
      code: false,
      status: 400,
    };
  }
  // Check the size of the file is less than 10000000 bytes
  if (!validateSise(file?.size)) {
    return {
      err: "The size of the image is too big, please insert a smaller image",
      code: false,
      status: 400,
    };
  }
  return { err: null, code: true, status: 200 };
};
