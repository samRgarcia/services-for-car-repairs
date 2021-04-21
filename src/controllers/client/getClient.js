import {tracingStatus} from '../../service/client/serviceClient';

export async function getAllProblems(req, res) {
    try {
        res.status(200).json({data: "get get"})
    } catch (e) {

    }
}

export async function getTracing(req, res) {
    try {
        const {idClient} = req.query;
       const data = await tracingStatus(idClient)
        res.status(200).json(data)
    } catch (e) {
        console.log(e)
        res.status(500).json({message: "server error"})

    }
}
