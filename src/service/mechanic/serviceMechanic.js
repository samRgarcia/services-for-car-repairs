import Mechanic_suggestions from "../../model/mechanic_suggestions";
import Jobs_started from "../../model/jobs_started";
import {sequelize} from "../../config/database";
import {
    QUERY_FILTER_ALL_PROBLEMS_OPEN,
    QUERY_VIEW_ALL_JOBS_ACCEPTED,
    QUERY_VIEW_SEARCH_DATE,
    QUERY_VIEW_SUGGESTION_CLIENT
} from "./querys";
import List_problems from "../../model/list_problems";
import Mechanical_problems from "../../model/mechanical_problems";


//suggestions, price, idCars,mechanical-person
export async function registerSuggestSolution(suggestions, price, idCard, mechanicalStaff) {
    await createSuggestions(suggestions, price, idCard, mechanicalStaff)
    //TODO: update status problems
    await updateProblemsStatus(idCard)
}

export async function registerStartJob(idCar, idMechanical) {
    await createJobStart(idCar, idMechanical)
    await updateStatusSuggestionProblems(idCar)
}

export async function registerFinishJob(idjobs_started) {
    await finishJob(idjobs_started)
}

export async function searchEndStartDate(idMechanic, dateStart, dateEnd) {
    return await searcheDate(idMechanic, dateStart, dateEnd)
}

async function searcheDate(idMechanic, dateStart, dateEnd) {
    const req = await sequelize.query(QUERY_VIEW_SEARCH_DATE, {
        replacements: [dateStart, dateEnd, idMechanic],
        type: sequelize.QueryTypes.SELECT,
        raw: true,
        nest: true
    });
    return req;
}

export async function mySuggestions(idMechanic) {
    const req = await sequelize.query(QUERY_VIEW_SUGGESTION_CLIENT, {
        replacements: [idMechanic],
        type: sequelize.QueryTypes.SELECT,
        raw: true,
        nest: true
    });
    return req;
}

export async function myAllJobs(idMechanic) {
    const req = await sequelize.query(QUERY_VIEW_ALL_JOBS_ACCEPTED, {
        replacements: [idMechanic],
        type: sequelize.QueryTypes.SELECT,
        raw: true,
        nest: true
    });
    return req;
}

async function createSuggestions(suggestions, price, idCard, mechanicalStaff) {
    await Mechanic_suggestions.create({
        suggestions: suggestions,
        price: price,
        cars_idcars: idCard,
        mechanical_idmechanical: mechanicalStaff,
        status: "requested"
    })
}

async function updateProblemsStatus(idCars) {
    await Mechanical_problems.update({status: "close"}, {where: {cars_idcars: idCars}})
}

export async function allProblemsOpen() {
    const req = await sequelize.query(QUERY_FILTER_ALL_PROBLEMS_OPEN, {
        replacements: ["open"],
        type: sequelize.QueryTypes.SELECT,
        raw: true,
        nest: true
    });
    return req;
}

export async function listItemProblems(idMechanical) {
    const req = await List_problems.findAll({
        where: {
            mechanical_problems_idmechanical_problems: idMechanical
        }
    });
    return req;
}

async function createJobStart(idCar, idMechanical) {
    await Jobs_started.create({
        advance: "start",
        cars_idcars: idCar,
        mechanical_idmechanical: idMechanical
    })
}

async function finishJob(idjobs_started) {
    await Jobs_started.update({
        advance: "finish"
    }, {
        where: {
            idjobs_started: idjobs_started
        }
    })
}

async function updateStatusSuggestionProblems(idcars) {
    await Mechanic_suggestions.update({status: "progress"}, {where: {cars_idcars: idcars}})
}
