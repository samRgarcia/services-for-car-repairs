import {Router} from 'express';
import {getAllProblems,getTracing,getIdSuggestios} from '../controllers/client/getClient';
import {postRegisterProblems,postApproveSolution,postDenySolution} from '../controllers/client/postClient';

const router = Router();
router.get('/all-problems',getAllProblems)
router.get('/client-tracing',getTracing)
router.get('/client-suggestions',getIdSuggestios)
router.post('/register-problems',postRegisterProblems)
router.put('/approve-solution',postApproveSolution)
router.put('/deny-solution',postDenySolution)

export default router;
