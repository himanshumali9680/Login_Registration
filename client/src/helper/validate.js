import toast from "react-hot-toast"


/**validate login page username */

export async function usernameValidate(values){
    const errors = usernameVerify({}, values);

    return errors;
}

/**validate password */
export async function passwordValidate(values){
    const errors = passwordVerify({}, values);

    return errors;
}

/**Validate reser passowrd */
export async function resetPassowrdValidation(values){
    const errors = passwordVerify({}, values);

    if(values.password !== values.confirm_pwd){
        errors.exist = toast.error("Password not match...!")
    }

    return errors;
}

/**validate register form */
export async function registerValidation(values){
    const errors = usernameVerify({}, values);
    passwordVerify(errors, values);
    emailVerify(errors, values);

    return errors;
}

/**validate profile page */
export async function profileValidation(values){
    const errors = emailVerify({}, values);
    return errors;
}

/********************************************* */

/**validate passowrd */
function passwordVerify(errors = {}, values){
    const specialChars = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if(!values.password){
        errors.password = toast.error("Password Required...!");
    } else if(values.password.includes(" ")){
        errors.password = toast.error("Wrong Password...!")
    }else if(values.password.length < 4){
        errors.password = toast.error("Password must be more than 4 charcters long");
    }else if(!specialChars.test(values.password)){
        errors.password = toast.error("Password must have special character");
        
    }
    return errors;
}

/**validate username */

function usernameVerify(error = {}, values){
    if(!values.username){
        error.username = toast.error('Username Required...!')
    }else if(values.username.includes(" ")){
        error.username = toast.error('Invalid Username...!')
    }
    return error;
}

/**validate email */
function emailVerify(error ={}, values){
    if(!values.email){
        error.email = toast.error("Email Required...!");
    }else if(values.email.includes(" ")){
        error.email = toast.error("Wrong email...!")
    }else if(/^(?=.*[0-9])(?=.*[!#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(values.email)){
        error.email = toast.error("Invalid email address...!")
    }
    return error;
}