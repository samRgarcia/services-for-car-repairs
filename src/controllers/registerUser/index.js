import {createNewUser} from '../../service/registerUser';

export async function postRegisterUser(req, res) {
    try {
        const {data,rol} = req.query;

        createNewUser(data, rol)
        res.status(200).json({messsage: "ok"})
    } catch (e) {
        res.status(500).json({messsage: "server error"})
    }
}
