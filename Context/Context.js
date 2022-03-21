import React, {createContext, useState} from 'react';

export const Datas = createContext();

export const DataProvider = (props) =>{
    const [emailerror, setemailerror] = useState("");
    const [passerror, setpasserror] = useState("");
 
 

    return(
         <div>
            <Datas.Provider value={{emailerror, setemailerror, passerror, setpasserror  }} >
                {props.children}
            </Datas.Provider>
         </div>
     );
}