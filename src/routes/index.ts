import express from 'express';

const router = express.Router();

router.get('/images/:filename', (req, res) => {
  res.sendFile(req.params.filename, { root: './images' });
});

export default router;