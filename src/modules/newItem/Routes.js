import { Router } from 'express';
import newItem from './newItem';

const router = Router();

router.post('/', newItem);

export default router;
