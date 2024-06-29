import express from 'express';
import gerarQRcode from '../controllers/controllers.js';

const router = express.Router();

router.post('/generate', gerarQRcode);
router.get('/generate', (req, res) => res.send('hello'));

export default router;