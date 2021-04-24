import {sequelize} from '../../config/database'
import Car from "../../model/car";
import Mechanical_problems from "../../model/mechanical_problems";
import List_problems from "../../model/list_problems";
import {QUERY_ID_VIEW_SUGGESTIONS_CLIENT, QUERY_TRACING} from "./querys";
import {QUERY_FILTER_ALL_PROBLEMS_OPEN} from "../mechanic/querys";
//car-model, car-license-place,client
//idClient description-problems, status,cardId
//item-description, mechanial-problems-id

export async function registerNewProblems(registerProblems,problems,listProblems,idClient) {
    const ID_CAR_REGISTER = await registerCar(registerProblems,idClient);
    const ID_REGISTER_PROBLEMS = await registerMechanicalProblems(problems,ID_CAR_REGISTER)
    await newListProblems(listProblems, ID_REGISTER_PROBLEMS)
    console.log(ID_CAR_REGISTER, "ID_CAR_REGISTER")
    console.log(ID_REGISTER_PROBLEMS, "ID_REGISTER_PROBLEMS")
}

async function registerCar(registerProblems,idClient) {
    let req = await Car.create({
        model: registerProblems.model,
        license_place: registerProblems.license_place,
        client_idclient: idClient
    });
    const ID_CAR = req.null;
    return ID_CAR;
}

async function registerMechanicalProblems(problems,idCars) {
    let req = await Mechanical_problems.create({
        descriptions: problems.descriptions,
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

export async function idSuggestionsClient(idClient) {
    const req = await sequelize.query(QUERY_ID_VIEW_SUGGESTIONS_CLIENT, {
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
