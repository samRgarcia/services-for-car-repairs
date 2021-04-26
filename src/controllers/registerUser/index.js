import {createNewUser, verifyLogin} from '../../service/registerUser';

export async function postRegisterUser(req, res) {
    try {
        const {name, last_name, first_name, gender, phone, email, user, password, rol} = req.body;

        await createNewUser(name, last_name, first_name, gender, phone, email, user, password, rol)
        res.status(200).json({messsage: "ok"})
    } catch (e) {
        res.status(500).json({messsage: "server error"})
    }
}

export async function postLogin(req, res) {
    try {
        const {user, password} = req.body;

        let data = await verifyLogin(user, password)
        if (data) {
            res.status(200).json(data)
        } else {
            res.status(404).json({message:"Incorrect user or Incorrect password"})
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({messsage: "server error"})
    }
}
