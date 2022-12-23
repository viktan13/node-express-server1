import { Router } from 'express';
import math from './math';

const router = Router();

router.post('/', math);

export default router;
