import express from 'express';
import { createVenda } from '../controllers/vendaController.js';

const router = express.Router();

router.post('/', createVenda);

export default router;