import {acceptedSuggestion} from "../../service/client/serviceClient";

export async function updateAcceptedSuggestions(req, res) {
    try {
        const {idSuggestion} = req.body;
        await acceptedSuggestion(idSuggestion)
        res.status(200).json({messsage: "ok"})
    } catch (e) {
        console.log(e)
        res.status(500).json({messsage: "server error"})
    }
}
