import express from 'express';
import { get_post, create_post } from '../controllers/postControllers.js';

const router = express.Router();

router.get('/', get_post);

router.post('/', create_post);

export default router;
