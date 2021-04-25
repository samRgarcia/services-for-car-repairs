import Client from "../../model/client";
import Mechanical from "../../model/mechanical";
import User from "../../model/user";

export async function createNewUser(name,last_name,first_name,gender,phone,email,user,password,rol) {
    if (rol === "client") {
        await createClient(name,last_name,first_name,gender,phone,email,user,password,rol)
    } else {
        await createMechanical(name,last_name,first_name,gender,phone,email,user,password,rol)
    }
}

async function createClient(name,last_name,first_name,gender,phone,email,user,password,rol) {
    await Client.create({
        name,
        last_name,
        first_name,
        gender,
        phone,
        email,
    }).then((res) => {
        const idUser = res.null;
        registerUsuario(idUser, password,user,rol);
    }).catch((e) => console.log(e))
}

async function createMechanical(name,last_name,first_name,gender,phone,email,user,password,rol) {
    await Mechanical.create({
        name,
        last_name,
        first_name,
        gender,
        phone,
        email,
    }).then((res) => {
        const idUser = res.null;
        registerUsuario(idUser, password,user,rol);
    }).catch((e) => console.log(e))
}

async function registerUsuario(idUser, password,user,rol) {
    await User.create({
        rol,
        password,
        user,
        idt_type_user:idUser
    })
}
