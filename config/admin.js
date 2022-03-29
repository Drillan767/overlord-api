module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3b618868a5493958576fed15ba5e932c'),
  },
  watchIgnoreFiles: [
    '**/config/sync/**',
  ],
});
