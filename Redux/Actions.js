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

export const updateuser = (uid, email) => {
    return {
        type: actions.UPDATE_USER,
        uid: uid,
        email : email
    }
}