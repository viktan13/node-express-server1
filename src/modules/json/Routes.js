import { Router } from 'express';
import json from './json';

const router = Router();

router.get('/', json);

export default router;
