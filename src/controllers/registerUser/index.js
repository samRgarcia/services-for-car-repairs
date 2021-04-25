import {createNewUser} from '../../service/registerUser';

export async function postRegisterUser(req, res) {
    try {
        const {name, last_name, first_name, gender, phone, email, user, password, rol} = req.body;

        await createNewUser(name, last_name, first_name, gender, phone, email, user, password, rol)
        res.status(200).json({messsage: "ok"})
    } catch (e) {
        res.status(500).json({messsage: "server error"})
    }
}
