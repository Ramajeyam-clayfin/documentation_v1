
import  {actions} from './ActionTypes'
import { adduser, createdata, updateuser1 } from '../firebase';

const initialState = {
    userData: []
};


const Reducer1 = (state = initialState, action) => {
    
    switch (action.type) {

        case actions.INITIALIZE : {
            console.log("INITIALIZE :", action.value )
            const temp = action.value.filter (obj => obj.uid === action.userid)
            console.log("User Detail : ",temp)
            return { userData : temp }
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
                let temp = state.userData.map(obj => {
                if( obj.uid === action.userid ) {
                    if(!obj?.Datas){
                        obj = {
                            ...obj,
                            Datas : {}
                        }
                        console.log("send Data : ", obj)
                        createdata(obj)
                        return obj
                    }
                    else {
                        return obj
                    }
                   
                }
                return obj
                })
                
               
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
                        if( obj.Datas?.Intro >= action.precent ){
                            return obj
                        }
                        else {
                            obj = {
                                ...obj,
                                Datas : {
                                    Intro : action.precent 
                                }
                            }
                            console.log("send Data :", obj)
                            updateuser1(obj, action.name)
                        }
                        
                    }
                    else if( action.name === "Overall_Basics" ){
                        if( obj.Datas?.Basics?.Total?.completed >= action.precent ){
                            return obj
                        }
                        else {
                            console.log("action.prercent :", action.precent)
                            const tot = (action.precent / 26 * 100)

                            obj = {
                                ...obj,
                                Datas : {
                                    ...obj.Datas,
                                    Basics : {
                                        ...obj.Datas.Basics,
                                        Total : {
                                            Total_Basics : 26,
                                            completed :  action.precent,
                                            Overall_Basics : Math.round(tot),
                                            View : false,
                                            Text : false,
                                            Image : false,
                                            TextInput : false,
                                            ScrollView : false,
                                            StyleSheet : false,
                                        }
                                    }
                                }
                            }
                            console.log("send Data :", obj)
                            updateuser1(obj, action.name)

                        }
                    }
                    else {
                        const array = ["View", "Text", "Image", "TextInput", "ScrollView", "StyleSheet"]

                        array.map (name => {
                            
                            if( name === action.name){
                                console.log("obj.Datas?.Basics?.[name] :", obj.Datas?.Basics?.[name])
                                if( obj.Datas?.Basics?.[name] >= action.precent ){
                                    return obj
                                }
                                else if( obj.Datas?.Basics?.[name] === 90 ){

                                    if(!obj.Datas?.Basics?.Total?.[name]){
                                        const newname = "Total"
                                        const tot = ((obj.Datas.Basics.Total.completed + 1)  / 26 * 100)
                                        obj = {
                                            ...obj,
                                            Datas : {
                                                ...obj.Datas,
                                                Basics : {
                                                    ...obj.Datas.Basics,
                                                    [name] : action.precent,
                                                    Total : {
                                                        ...obj.Datas.Basics.Total,
                                                        completed :  (obj.Datas.Basics.Total.completed + 1),
                                                        Overall_Basics : Math.round(tot),
                                                        [name] : true
                                                    }
                                                }
                                            }
                                        }
                                        console.log("send Data :", obj)
                                        updateuser1(obj, action.name, newname)
                                    }
                                }
                                else {
                                    obj = {
                                        ...obj,
                                        Datas : {
                                            ...obj.Datas,
                                            Basics : {
                                                ...obj.Datas.Basics,
                                                [name] : action.precent
                                            } 
                                        }
                                    }
                                    console.log("send Data :", obj)
                                    updateuser1(obj, action.name)
                                }
                            }
                            
                        })
                    }
                    return obj
                }
                
                return obj
                })
                return {
                    userData:temp
                }

        }

        
        default:
        
    }
    return state;
}

export default Reducer1


