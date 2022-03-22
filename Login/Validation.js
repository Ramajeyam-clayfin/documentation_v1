
export const Validation = (email, password) => {
    let errormessageuser = ''
    let errormessagepass = ''
    // console.log(email)
    if(email == "" || password == "" ){
        errormessagepass ='Password is Required'
        errormessageuser = 'Username is Required'
    }
    else if(  (email.toLowerCase() === "jeyamjeyam6@gmail.com" && password === "jeyamjeyam")
            ||(email.toLowerCase() === "ramajeyam@clayfin.com" && password === "ramajeyam") )
        {
                errormessagepass =''
        }
            else errormessagepass = 'Username and Password did not match'

    return { errormessageuser: errormessageuser, errormessagepass: errormessagepass }
}
