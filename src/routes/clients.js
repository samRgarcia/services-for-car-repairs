import {Router} from 'express';
import {getAllProblems, getTracing, getIdSuggestios, getTracingHistory} from '../controllers/client/getClient';
import {
    postRegisterProblems,
    postApproveSolution,
    postDenySolution,
    postAcceptedJobs, postDenyJobs
} from '../controllers/client/postClient';
import {updateAcceptedSuggestions} from '../controllers/client/updateClient'

const router = Router();
router.get('/all-problems',getAllProblems)
router.get('/client-tracing',getTracing)
router.get('/client-tracing-history',getTracingHistory)

router.get('/client-suggestions',getIdSuggestios)
router.post('/register-problems',postRegisterProblems)

router.put('/update-accepted-job',postAcceptedJobs)
router.put('/update-deny-job',postDenyJobs)

router.put('/approve-solution',postApproveSolution)
router.put('/deny-solution',postDenySolution)
router.put('/accepted-solution',updateAcceptedSuggestions)


export default router;
