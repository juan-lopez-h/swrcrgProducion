'use strict';

const multer = require('multer');
const streamifier = require('streamifier');
const { v2: cloudinary } = require('cloudinary');

const ALLOWED_TYPES = /jpeg|jpg|png|webp/;
const MAX_SIZE_MB = 5;

/**
 * Multer en memoria (NO disco)
 */
const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const extOk = ALLOWED_TYPES.test(file.originalname.toLowerCase());
  const mimeOk = ALLOWED_TYPES.test(file.mimetype);

  if (extOk && mimeOk) return cb(null, true);

  cb(new Error('Solo se permiten imágenes JPEG, PNG o WebP'));
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: MAX_SIZE_MB * 1024 * 1024 },
});

/**
 * Subida a Cloudinary
 */
const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        folder: 'reportes',
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    streamifier.createReadStream(fileBuffer).pipe(stream);
  });
};

/**
 * Middleware con manejo de errores
 */
const uploadWithErrorHandling = (fieldName) => (req, res, next) => {
  upload.single(fieldName)(req, res, (err) => {
    if (err) {
      if (err.code === 'LIMIT_FILE_SIZE') {
        return res.status(400).json({
          error: `La imagen no puede superar ${MAX_SIZE_MB} MB`,
        });
      }
      return res.status(400).json({
        error: err.message || 'Error al subir archivo',
      });
    }
    next();
  });
};

module.exports = {
  upload,
  uploadWithErrorHandling,
  uploadToCloudinary,
};