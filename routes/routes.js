import express from 'express'
import gerarQRcode from '../controllers/controllers.js';
const router = express.Router()

router.post('/generate', gerarQRcode);

export default router