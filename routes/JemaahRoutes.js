import express from 'express';
import {
  getJemaah,
  getJemaahByNIK,
  createJemaah,
  updateJemaah,
  deleteJemaah,
} from '../controllers/JemaahController.js';

import { login } from '../controllers/AdminController.js';

const router = express.Router();

router.get('/jemaah', getJemaah);
router.get('/jemaah/:NIK', getJemaahByNIK);
router.post('/jemaah', createJemaah);
router.patch('/jemaah/:NIK', updateJemaah);
router.delete('/jemaah/:NIK', deleteJemaah);
router.post('/login', login);

export default router;
