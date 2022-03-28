
import  {actions} from './ActionTypes'
import { adduser, createdata, updateuser1 } from '../firebase';

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

            const user = state.userData.filter(obj => obj.uid === action.userid)

            if( user.length ){
               
                console.log("ADD_USER :", action.email)
                console.log("new user")
                const user =  {
                        uid: action.useruid,
                        name : action.name,
                        email : action.email
                    }
                adduser(user)

                return { 
                    userData : [
                        ...state.userData, 
                        {
                            uid: action.useruid,
                            name : action.name,
                            email : action.email
                        }
                    ]
                }
            }
            else  return state
        }
        
        case actions.CREATE_DATA : {
            if(action.userid !== undefined ){
                console.log("CREATE_DATA :", action.userid)
                let send 
                let temp = state.userData.map(obj => {
                if( obj.uid === action.userid ) {
                    if(!obj.Datas){
                        obj = {
                            ...obj,
                            Datas : {}
                        }
                        send = obj
                        return obj
                    }
                    else return obj
                   
                }
                return obj
                })
                console.log("temp :",temp)
                console.log("send :",send)
                createdata(send)
                return {
                    userData:temp
                }

            }
            else return state
        }

        case actions.UPDATE_USER : {

            let temp = state.userData.map(obj => {
                if( obj.uid === action.userid ) {
                    console.log("action.name :" ,action.name)
                    if( action.name === "Intro"){
                        obj = {
                            ...obj,
                            Datas : {
                                Intro : action.precent 
                            }
                        }
                    }
                    else if( action.name === "Overall" ){
                        obj = {
                            ...obj,
                            Datas : {
                                Overall : action.precent,
                                ...obj.Datas, 

                            }
                        }
                    }
                   
                    send = obj
                    return obj
                }
                
                return obj
                })
                console.log("temp :",temp)
                console.log("send :",send)
                updateuser1(send, action.name)

                return {
                    userData:temp
                }

        }

        
        default:
        
    }
    return state;
}

export default Reducer1


