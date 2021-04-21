import {Router} from 'express';
import {getAllProblems} from '../controllers/client/getClient';
import {postRegisterProblems} from '../controllers/client/postClient';

const router = Router();
router.get('/all-problems',getAllProblems)
router.post('/register-problems',postRegisterProblems)
export default router;
