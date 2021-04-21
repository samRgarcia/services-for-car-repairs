import {sequelize} from '../../config/database'
import Car from "../../model/car";
import Mechanical_problems from "../../model/mechanical_problems";
import List_problems from "../../model/list_problems";
import {QUERY_TRACING} from "./querys";
//car-model, car-license-place,client
//idClient description-problems, status,cardId
//item-description, mechanial-problems-id

export async function registerNewProblems(data) {
    const ID_CAR_REGISTER = await registerCar();
    const ID_REGISTER_PROBLEMS = await registerMechanicalProblems(ID_CAR_REGISTER)
    await newListProblems([{description: "item1"}, {description: "item2"}], ID_REGISTER_PROBLEMS)
    console.log(ID_CAR_REGISTER, "ID_CAR_REGISTER")
    console.log(ID_REGISTER_PROBLEMS, "ID_REGISTER_PROBLEMS")
}

async function registerCar() {
    let req = await Car.create({
        model: "Ford musthan",
        license_place: "XXXX",
        client_idclient: 1
    });
    const ID_CAR = req.null;
    return ID_CAR;
}

async function registerMechanicalProblems(idCars) {
    let req = await Mechanical_problems.create({
        descriptions: "Description de manera mas general general",
        status: "open",
        cars_idcars: idCars
    });
    const ID = req.null;
    return ID;
}

async function newListProblems(list = [], idMechanicalProblems) {
    for (let index = 0; index < list.length; index++) {
        await List_problems.create({
            description: list[index].description,
            progress: "initial",
            mechanical_problems_idmechanical_problems: idMechanicalProblems
        })
    }
}

export async function tracingStatus(idClient) {
    const req = await sequelize.query(QUERY_TRACING, {
        replacements: [idClient],
        type: sequelize.QueryTypes.SELECT,
        raw: true,
        nest: true
    });
    return req;
}

export async function approveSolution(idMechanical) {
    await Mechanical_problems.update(
        {status: "approve"},
        {
        where: {idmechanical_problems: idMechanical}
    })
}

export async function denySolution(idMechanical) {
    await Mechanical_problems.update(
        {status: "deny"},
        {
            where: {idmechanical_problems: idMechanical}
        })
}
