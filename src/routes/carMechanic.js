import {Router} from 'express';
import {postSuggestSolution,postStartJob} from '../controllers/mechanic/postMechanic';
import {
    getAllProblemsOpen,
    getItemProblems,
    getMySuggestion,
    getMyAllJobs,
    getGenerateIncomeByDate
} from '../controllers/mechanic/getMechanic';
import {updateFinishJob} from '../controllers/mechanic/updateMechanic';

const router = Router();
router.get('/view-problems-open',getAllProblemsOpen)
router.get('/view-item-problems',getItemProblems)
router.get('/view-my-suggestions',getMySuggestion)
router.get('/view-my-all-jobs',getMyAllJobs)
router.get('/view-date-end-start',getGenerateIncomeByDate)

router.post('/register-suggest',postSuggestSolution)
router.post('/job-start',postStartJob)
router.put('/job-finish',updateFinishJob)

export default router;
