import {registerSuggestSolution, registerStartJob} from '../../service/mechanic/serviceMechanic';

export async function postStartJob(req, res) {
    try {
        const {idCar, idMechanical} = req.body
        await registerStartJob(idCar, idMechanical)
        res.status(200).json({message: "ok"})
    } catch (e) {
        res.status(500).json({message: "server error"})

    }
}



export async function postSuggestSolution(req, res) {
    try {
        const {suggestions, price, idCard, mechanicalStaff} = req.body;
        console.log(req.body)
        await registerSuggestSolution(suggestions, price, idCard, mechanicalStaff)
        res.status(200).json({message: "ok"})
    } catch (e) {
        console.log(e)
        res.status(500).json({message: "server"})

    }
}
