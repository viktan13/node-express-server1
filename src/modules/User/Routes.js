import { Router } from 'express';
import userRegister from './userRegister';
import userGetAll from './userGetAll';
import userGetById from './userGetById';
import userUpdateById from './userUpdateById';
import userDeleteById from './userDeleteById';
import userDeleteAll from './userDeleteAll';

const router = Router();

router.post('/', userRegister); //POST localhost:5000/user/
router.get('/', userGetAll); //GET localhost:5000/user/
router.get('/:userID', userGetById); //GET localhost:5000/user/634f0b3e6e6b9ec4fe8d89a4
router.patch('/:userID', userUpdateById); //PATCH localhost:5000/user/634f0b3e6e6b9ec4fe8d89a4
router.delete('/:userID', userDeleteById); //DELETE localhost:5000/user/634f0b3e6e6b9ec4fe8d89a4
router.delete('/', userDeleteAll); //DELETE localhost:5000/user

export default router;
