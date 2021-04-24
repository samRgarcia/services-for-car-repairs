import Client from "../../model/client";
import Mechanical from "../../model/mechanical";
import User from "../../model/user";

export async function createNewUser(data, rol) {
    if (rol === "client") {
        await createClient(data)
    } else {
        await createMechanical(data)
    }
}

async function createClient(data) {
    await Client.create({
        name: data.name,
        last_name: data.last_name,
        first_name: data.first_name,
        gender: data.gander,
        phone: data.phone,
        email: data.email,
    }).then((res) => {
        const idUser = res.null;
        registerUsuario(idUser, data);
    }).catch((e) => console.log(e))
}

async function createMechanical(data) {
    await Mechanical.create({
        name: data.name,
        last_name: data.last_name,
        first_name: data.first_name,
        gender: data.gander,
        phone: data.phone,
        email: data.email,
    }).then((res) => {
        const idUser = res.null;
        registerUsuario(idUser, data);
    }).catch((e) => console.log(e))
}

async function registerUsuario(idUser, data) {
    await User.create({
        rol: data.rol,
        password: data.password,
        user: data.user,
        idt_type_user: idUser
    })
}
