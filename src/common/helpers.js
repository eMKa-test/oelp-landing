import memoize from "lodash/memoize";

export const getUrl = memoize((type) => {
    switch (type) {
        case "login": return "/api/login";
        case "register": return "/user/api/user";
        default: return "/user/api/user/remindPassword";
    }
});

export const checkFields = (type, fields, setError) => {
    switch (type) {
        case "login": {
            if (!fields.email || !fields.password) {
                setError("Не все поля заполнены");
                return false;
            }
            return true;
        }
        case "register": {
            if (!fields.email || !fields.password || !fields.confirmPassword || !fields.name) {
                setError("Не все поля заполнены");
                return false;
            }
            if (fields.password !== fields.confirmPassword) {
                setError("Пароли не совпадают");
                return false;
            }
            delete fields.confirmPassword;
            return true;
        }
        case "restore": {
            if (!fields.email) {
                setError("Не все поля заполнены");
            }
            return true;
        }
        default: return false;
    }
};

export const successHandler = (type, email, successMsg, redirect = "/") => {
    switch (type) {
        case "login": window.location.href = redirect; break;
        case "register": return successMsg("Вам на почту отправлено письмо с подтверждением");
        case "restore": return successMsg(`Проверьте Вашу почту ${email}`);
        default: return null;
    }
    return null;
};

export default null;
