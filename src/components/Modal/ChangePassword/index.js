import React, { memo, useCallback, useState } from "react";
import * as PropTypes from "prop-types";
import axios from "axios";
import ChangePasswordFields from "../../Forms/ChangePassword";

const ChangePassword = ({ setError, successMsg }) => {
    const [load, setLoad] = useState(false);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        const pwd = e.target.password.value;
        const cnfPwd = e.target.cnfPassword.value;
        if (!pwd || !cnfPwd) {
            return setError("Необходимо заполнить все поля");
        }
        if (pwd !== cnfPwd) {
            return setError("Введённые пароли не совпадают");
        }
        setLoad(true);
        const params = new URLSearchParams(window.location.search);
        const key = params.get("key");
        const email = params.get("email");
        axios.post("/user/api/user/chgPassword", { key, email, password: pwd })
            .then(({ data: { success = false } }) => {
                if (success) {
                    successMsg("Пароль изменён. Идёт переадресация...");
                    setTimeout(() => {
                        setLoad(false);
                        window.location.href = "/";
                    }, 2000);
                } else {
                    setError("Неизвестная ошибка");
                    setLoad(false);
                }
            }).catch((err) => {
                console.warn(err?.response?.message || err.message);
                setError("Ошибка");
                setLoad(false);
            });
    }, []);

    return (
        <form
            style={{ textAlign: "center" }}
            onSubmit={onSubmit}>
            <ChangePasswordFields load={load} />
        </form>
    );
};

ChangePassword.propTypes = {
    setError: PropTypes.func.isRequired,
    successMsg: PropTypes.func.isRequired,
};

export default memo(ChangePassword);
