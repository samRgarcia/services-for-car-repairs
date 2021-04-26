import {
    allProblemsOpen,
    listItemProblems,
    mySuggestions,
    myAllJobs,
    searchEndStartDate
} from "../../service/mechanic/serviceMechanic";

export async function getAllProblems(req, res) {
    try {

        res.status(200).json({data: "get get"})
    } catch (e) {

    }
}

export async function getAllProblemsOpen(req, res) {
    try {
        const data = await allProblemsOpen()
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json({message: "server error"})
    }
}

export async function getItemProblems(req, res) {
    try {
        const {idMachinacal} = req.query;
        const data = await listItemProblems(idMachinacal);
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json({message: "server error"})
    }
}
export async function getMySuggestion(req, res) {
    try {
        const {idMachinacal} = req.query;
        const data = await mySuggestions(idMachinacal);
        res.status(200).json(data)
    } catch (e) {
        res.status(500).json({message: "server error"})
    }
}
export async function getMyAllJobs(req, res) {
    try {
        const {idMachinacal} = req.query;
        const data = await myAllJobs(idMachinacal);
        res.status(200).json(data)
    } catch (e) {
        console.log(e)
        res.status(500).json({message: "server error"})
    }
}
export async function getGenerateIncomeByDate(req, res) {
    try {
        const {idMechanic,dateStart,dateEnd} = req.query;
           const data = await searchEndStartDate(idMechanic,dateStart,dateEnd)
        res.status(200).json(data)
    } catch (e) {
        console.log(e)
        res.status(500).json({message: "server error"})
    }
}
