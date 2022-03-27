
import  {actions} from './ActionTypes'
import { adduser } from '../firebase';

const initialState = {
    userData: []
};


const Reducer1 = (state = initialState, action) => {
    
    switch (action.type) {

        case actions.INITIALIZE : {
            console.log("INITIALIZE :", action.value )
            return { userData : action.value }
        }
        case actions.ADD_USER : {
            console.log("ADD_USER :", action.value)
            let uid = state.userData.filter(obj => obj.uid === action.value)
            if(!uid.length){
                console.log("new user")
                const user =  {
                        uid: action.value
                    }
                adduser(user)

                return { 
                    userData : [...state.userData, {
                    uid: action.value
                    }
                ]
            }
                
            }
        }
        case actions.UPDATE_USER : {

           
            if(action.uid !== undefined ){
                console.log("UPDATE_USER_EMAIL :", action.email)
                console.log("UPDATE_USER_UID :", action.uid)
                let send 
                let temp = state.userData.map(obj => {
                if( obj.uid === action.uid ) {
                    obj = {
                        ...obj,
                        email : action.email
                    }
                    send = obj
                    return obj
                }
                return obj
                })
                console.log("temp :",temp)
                console.log("send :",send)
                return {
                    userData:temp
                }

            }
            else return state
            
            
        }

        
        default:
        
    }
    return state;
}

export default Reducer1


