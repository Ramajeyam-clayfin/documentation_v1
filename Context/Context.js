import React, {createContext, useState} from 'react';

export const Datas = createContext();

export const DataProvider = (props) =>{
    const [emailerror, setemailerror] = useState("");
    const [passerror, setpasserror] = useState("");
    const [login, setLogin] = useState(true);
    const [number, setnumber] = useState();

    return(
         <>
            <Datas.Provider value={{emailerror, setemailerror, passerror, setpasserror, login, setLogin, number, setnumber  }} >
                {props.children}
            </Datas.Provider>
         </>
     );
}