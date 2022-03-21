
export const Validation = (email, password) => {
    let errormessageuser = ''
    let errormessagepass = ''
    if(email === undefined || password === undefined ){
        errormessagepass ='Password is Required'
        errormessageuser = 'Username is Required'
    }
    else if(email.toLowerCase() === 'manager'){
        if(password === 'manager'){
            errormessagepass =''
        }
        else errormessagepass = 'Username and Password did not match'
    }
    else if(  (email.toLowerCase() === "jeyamjeyam6@gmail.com" && password === "jeyamjeyam")
            ||(email.toLowerCase() === "ramajeyam@clayfin.com" && password === "ramajeyam") )
        {
                errormessagepass =''
        }
            else errormessagepass = 'Username and Password did not match'

    return { errormessageuser: errormessageuser, errormessagepass: errormessagepass }
}
