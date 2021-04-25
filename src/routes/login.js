import {Router} from 'express';
import {postLogin, postRegisterUser} from '../controllers/registerUser';

const router = Router();
router.post('/register-user',postRegisterUser)
router.post('/login',postLogin)

export default router;
