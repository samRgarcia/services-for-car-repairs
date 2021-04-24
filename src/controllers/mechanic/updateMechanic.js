import {registerFinishJob} from '../../service/mechanic/serviceMechanic';

export async function updateQuoteSolution(req, res) {
    try {

        res.status(200).json({data: "get get"})
    } catch (e) {

    }
}

export async function updateSuggestSolution(req, res) {
    try {
        res.status(200).json({data: "get get"})
    } catch (e) {

    }
}

export async function updateFinishJob(req, res) {
    try {
        const {idjobs_started} = req.query;
        console.log("idjobs_started",idjobs_started)
        await registerFinishJob(idjobs_started)
        res.status(200).json({message:"ok"})
    } catch (e) {
        console.log(e)
        res.status(500).json({message:"server error"})
    }
}
