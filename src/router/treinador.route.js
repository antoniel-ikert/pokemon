import { Router } from 'express';
import treinadorController from '../controllers/treinador.controller.js';

const router = Router();

router.post('/', treinadorController.create);

router.get('/', treinadorController.getAll);

export default router;