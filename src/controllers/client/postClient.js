import {registerNewProblems} from '../../service/client/serviceClient';

export async function postRegisterProblems( req, res) {
    try {
          await registerNewProblems()
        res.status(200).json({message:"register"})
    }catch (e) {
        console.log(e)
        res.status(500).json({data:"server error"})

    }
}

export async function postApproveSolution( req, res) {
    try {
        res.status(200).json({data:"beta"})
    }catch (e) {

    }
}

export async function postDenySolution( req, res) {
    try {
        res.status(200).json({data:"beta"})
    }catch (e) {

    }
}
