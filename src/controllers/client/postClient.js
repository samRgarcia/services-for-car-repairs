import {registerNewProblems, approveSolution,denySolution} from '../../service/client/serviceClient';

export async function postRegisterProblems(req, res) {
    try {
        console.log("Register data",req.body)
        const {registerProblems,problems,listProblems} = req.body;
        const idClient = 1;
        await registerNewProblems(registerProblems,problems,listProblems,idClient)
        res.status(200).json({message: "register"})
    } catch (e) {
        console.log(e)
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


