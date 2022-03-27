import {actions} from './ActionTypes'

export const add_user = (useruid) => {
    return {
        type: actions.ADD_USER,
        value: useruid
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