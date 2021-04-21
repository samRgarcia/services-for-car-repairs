import {Router} from 'express';
import {getAllProblems} from '../controllers/client/getClient';

const router = Router();
router.get('/all-problems',getAllProblems)
export default router;
