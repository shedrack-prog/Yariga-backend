import express from 'express';
import { createProperty } from '../controllers/propertyController.js';

const router = express.Router();

router.route('/create').post(createProperty);

export default router;
