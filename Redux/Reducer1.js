
import  {actions} from './ActionTypes'
import { adduser, createdata, updateuserintro, updateuserothers, updateuseroverall } from '../firebase';

const initialState = {
    userData: []
};


const Reducer1 = (state = initialState, action) => {
    
    switch (action.type) {

        case actions.INITIALIZE : {
            console.log(action.value.length)

            if((action.value).length){
                console.log("INITIALIZING :" )
                const temp = action.value.filter (obj => obj.uid === action.userid)
                console.log("User Detail : ",temp)
                return { userData : temp }
            }
            else return state
        }

        case actions.ADD_USER : {

            const user = state.userData.filter(obj => obj.uid === action.userid)
            console.log("user.length :", user.length)

            if(!user.length){
               
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
                    console.log("!obj?.Datas", !obj?.Datas)
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

        case actions.UPDATE_USER_INTRO : {
            console.log("UPDATE_USER_INTRO :")

            let temp = state.userData.map( obj => {
                if( obj.uid === action.userid ) {
                    console.log("action.name :" ,action.name)
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
                            updateuserintro(obj, action.name)
                        }
                    }
                return obj
                })

            return {
                userData:temp
            }

        }
        case actions.UPDATE_USER_OVERALL_BASICS : {
            console.log("UPDATE_USER_OVERALL_BASICS :")

            let temp = state.userData.map(obj => {
                if( obj.uid === action.userid ) {
                    console.log("action.name :" ,action.name)
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
                                            // View : false,
                                            // Text : false,
                                            // Image : false,
                                            // TextInput : false,
                                            // ScrollView : false,
                                            // StyleSheet : false,
                                        }
                                    }
                                }
                            }
                            console.log("send Data :", obj)
                            updateuseroverall(obj, action.name)

                        }
                   
                    return obj
                }
                
                return obj
                })

            return {
                userData: temp
            }

        }

        case actions.UPDATE_USER_OTHERS : {
            console.log("UPDATE_USER_OTHERS :")

            // const array = ["View", "Text", "Image", "TextInput", "ScrollView", "StyleSheet"]
            let newname = false

            let temp = state.userData.map(obj => {
                if( obj.uid === action.userid ) {
                    console.log("action.name :" ,action.name)
                    
                    // array.map (name => {
                    //     if( name == action.name){
                            console.log(`obj.Datas?.Basics?.${action.name} :`, obj.Datas?.Basics?.[action.name])
                            console.log(`obj.Datas?.Basics?.Total?.${action.name} :`, obj.Datas?.Basics?.Total?.[action.name])
                            if( obj.Datas?.Basics?.[action.name] >= action.precent ){
                                return obj
                            }
                            else if( action.precent == 90 ){

                                // if(obj.Datas?.Basics?.Total?.[action.name] == false){
                                    console.log("reducer-newname")
                                    newname = true
                                    const tot = ((obj.Datas.Basics.Total.completed + 1)  / 26 * 100)
                                    obj = {
                                        ...obj,
                                        Datas : {
                                            ...obj.Datas,
                                            Basics : {
                                                ...obj.Datas.Basics,
                                                [action.name] : action.precent,
                                                Total : {
                                                    ...obj.Datas.Basics.Total,
                                                    completed :  (obj.Datas.Basics.Total.completed + 1),
                                                    Overall_Basics : Math.round(tot),
                                                    // [action.name] : true
                                                }
                                            }
                                        }
                                    }
                                    console.log("send Data :", obj)
                                    updateuserothers(obj, action.name, newname)
                                // }
                            }
                            else {
                                obj = {
                                    ...obj,
                                    Datas : {
                                        ...obj.Datas,
                                        Basics : {
                                            ...obj.Datas.Basics,
                                            [action.name] : action.precent
                                        } 
                                    }
                                }
                                console.log("send Data :", obj)
                                updateuserothers(obj, action.name, newname)
                            }
                        }
                        return obj
                    })
                    
                // }
                
                // return obj
                // })
            return {
                userData:temp
            }

        }

    default:  return state;

    }
    
}

export default Reducer1


