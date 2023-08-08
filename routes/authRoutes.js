import express from 'express';
import { createAgent } from '../controllers/authController.js';

const router = express.Router();

router.route('/create-agent').post(createAgent);

export default router;
