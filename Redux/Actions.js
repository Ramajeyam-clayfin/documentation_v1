import {actions} from './ActionTypes'

export const add_user = (useruid, name, email) => {
    return {
        type: actions.ADD_USER,
        useruid : useruid,
        name : name,
        email : email
    }
}

export const initialize = (users) => {
    return {
        type: actions.INITIALIZE,
        value: users
    }
}

export const updateuser = (userid, precent, name) => {

        return {
            type: actions.UPDATE_USER,
            userid: userid,
            name : name,
            precent : precent
        }
}

export const createData = (userid) => {

    return{
        type: actions.CREATE_DATA,
        userid:userid
        
    }
}

