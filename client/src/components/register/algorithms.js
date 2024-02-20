
const isValidForm = (username, password, confirmPassword) => {
    if(username.length < 3 || password.length < 6 || password !== confirmPassword){
        return false;
    }
    return true;
}

export default isValidForm;