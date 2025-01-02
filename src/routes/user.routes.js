import { Router } from 'express'
import { 
        createUser,
        updateUserById,
        deleteUserById,
        findUserById,
        findAll
    } from '../controllers/user.controller.js';

const router = Router();

router.post('/user', createUser);
router.get('/user', findAll);
router.put('/user/:id', updateUserById);
router.delete('/user/:id', deleteUserById);
router.get('/user/:id', findUserById);

export default router