import {
    registerNewProblems,
    approveSolution,
    denySolution,
    acceptedSuggestion, acceptedJobs, denyJobs
} from '../../service/client/serviceClient';

export async function postRegisterProblems(req, res) {
    try {
        console.log("Register data",req.body)
        const {registerProblems,problems,listProblems,client_idclient} = req.body;
        await registerNewProblems(registerProblems,problems,listProblems,client_idclient)
        res.status(200).json({message: "register"})
    } catch (e) {
        res.status(500).json({data: "server error"})
    }
}

export async function postApproveSolution(req, res) {
    try {
        const {idMechanical} = req.query;
        await approveSolution(idMechanical)
        res.status(200).json({messsage: "ok"})
    } catch (e) {
        res.status(500).json({messsage: "server error"})
    }
}

export async function postDenySolution(req, res) {
    try {
        const {idMechanical} = req.query;
       await denySolution(idMechanical)
        res.status(200).json({messsage: "ok"})
    } catch (e) {
        res.status(500).json({messsage: "server error"})
    }
}


export async function postAcceptedJobs(req, res) {
    try {
        const {idmechanic_suggestions} = req.body;
        await acceptedJobs(idmechanic_suggestions)
        res.status(200).json({message: "register"})
    } catch (e) {
        res.status(500).json({data: "server error"})
    }
}
export async function postDenyJobs(req, res) {
    try {
        const {idmechanic_suggestions} = req.body;
        await denyJobs(idmechanic_suggestions)
        res.status(200).json({message: "register"})
    } catch (e) {
        res.status(500).json({data: "server error"})
    }
}
