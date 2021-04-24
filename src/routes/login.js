import {Router} from 'express';
import {postRegisterUser} from '../controllers/registerUser';

const router = Router();
router.post('/register-user',postRegisterUser)
export default router;
