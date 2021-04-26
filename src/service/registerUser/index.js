import Client from "../../model/client";
import Mechanical from "../../model/mechanical";
import bcrypt from "bcrypt";
import {sequelize} from "../../config/database";
import {QUERY_SEARCH_CLIENT} from "./Query";
import User from "../../model/user";

export async function createNewUser(name, last_name, first_name, gender, phone, email, user, password, rol) {
    const newPassword = await passwordEncrip(password)
    if (rol === "client") {
        await createClient(name, last_name, first_name, gender, phone, email, user, newPassword, rol)
    } else {
        await createMechanical(name, last_name, first_name, gender, phone, email, user, newPassword, rol)
    }
}


export async function verifyLogin(user, password) {
    let userData = await searchUser(user)
    if (userData.length) {
        let dbPassword = userData[0].password;
        let validatePassword = await bcrypt.compare(password, dbPassword);
        if (validatePassword) {
            return {
                name: userData[0].name,
                first_name: userData[0].first_name,
                last_name: userData[0].last_name,
                idClient: userData[0].idclient,
                rol: userData[0].rol,
                email: userData[0].email,
                phone: userData[0].phone
            }
        }
        return false
    }
    return false
}

async function passwordEncrip(password) {
    let res = await bcrypt.hash(password, 10)
        .then((passwordHash) => passwordHash)
        .catch((e) => {
            console.log(e)
        })
    return res
}

async function searchUser(user) {
    const req = await User.findOne({where: {user: user}});
    if (Boolean(req)) {
        let rol = req.rol;
        let idUser = req.idt_type_user
        if (rol === "client") {
            //TODO: Search for table client
            let data = await searchClient(idUser)
            return [{
                name: data.name,
                first_name: data.first_name,
                last_name: data.last_name,
                idclient: data.idclient,
                rol: req.rol,
                password: req.password,
                email: data.email,
                phone: data.phone
            }]
        } else {
            let data = await searchMechanical(idUser)
            return [{
                name: data.name,
                first_name: data.first_name,
                last_name: data.last_name,
                idclient: data.idmechanical,
                rol: req.rol,
                password: req.password,
                email: data.email,
                phone: data.phone
            }]
        }
    }
    return req || [];
}

async function searchClient(id) {
    let res = await Client.findOne({where: {idclient: id}})
    return res;
}

async function searchMechanical(id) {
    let res = await Mechanical.findOne({where: {idmechanical: id}});
    return res;
}

async function searchUserx(user) {
    const req = await sequelize.query(QUERY_SEARCH_CLIENT, {
        replacements: [user],
        type: sequelize.QueryTypes.SELECT,
        raw: true,
        nest: true
    });

    return req;
}


async function createClient(name, last_name, first_name, gender, phone, email, user, password, rol) {
    await Client.create({
        name,
        last_name,
        first_name,
        gender,
        phone,
        email,
    }).then((res) => {
        const idUser = res.null;
        console.log("idUser", idUser)
        registerUsuario(idUser, password, user, rol);
    }).catch((e) => console.log(e))
}

async function createMechanical(name, last_name, first_name, gender, phone, email, user, password, rol) {
    await Mechanical.create({
        name,
        last_name,
        first_name,
        gender,
        phone,
        email,
    }).then((res) => {
        const idUser = res.null;
        registerUsuario(idUser, password, user, rol);
    }).catch((e) => console.log(e))
}

async function registerUsuario(idUser, password, user, rol) {
    await User.create({
        rol,
        password,
        user,
        idt_type_user: idUser
    })
}
