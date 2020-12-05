export default function validateInfo(values)
{
    let errors = {}

    if(!values.username.trim())
    {
        errors.username = "Username Required"
    }
    //Email
    if(!values.email)
    {
        errors.email = "email Required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
    {
        errors.email = "email address is invalid"
    }

    if(!values.password){
        errors.password = 'Password is Requried'
    }else if(values.password.length < 6)
    {
        errors.password = 'Password needs to be 6 characters or more';
    }

    
    if(!values.password2){
        errors.password2 = 'Confirm Password is Requried'
    }else if(values.password2 !== values.password)
    {
        errors.password2 = 'Password do not match';
    }

    return errors;
}






