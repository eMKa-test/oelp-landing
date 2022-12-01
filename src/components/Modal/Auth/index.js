import React, { memo, useCallback, useState } from "react";
import * as PropTypes from "prop-types";
import axios from "axios";
import { Switch, Route } from "react-router-dom";
import LoginFields from "../../Forms/Auth/LoginFields";
import RegisterFields from "../../Forms/Auth/RegisterFields";
import RestoreFields from "../../Forms/Auth/RestoreFields";
import { checkFields, successHandler, getUrl } from "../../../common/helpers";

const AuthModal = ({ type, setError, successMsg }) => {
    const [load, setLoad] = useState(false);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        const fields = Array.from(e.target.elements).reduce((acc, cur) => {
            if (cur.tagName === "INPUT") {
                acc[cur.name] = cur.value;
            }
            return acc;
        }, {});
        const isOk = checkFields(type, fields, setError);
        if (isOk) {
            setLoad(true);
            axios.post(getUrl(type), { ...fields }).then(({ data: res }) => {
                if (res.success) {
                    successHandler(type, fields.email, successMsg, res.redirect);
                } else {
                    setError("Ошибка авторизации");
                }
            }).catch((err) => {
                console.warn(err?.response?.message || err.message);
                switch (err?.response.status) {
                    case 401: return setError("Не верный логин или пароль");
                    case 409: return setError("Пользователь с указанной почтой уже зарегистрирован");
                    default: return setError("Ошибка");
                }
            }).finally(() => {
                setLoad(false);
            });
        } else {
            setLoad(false);
        }
    }, [type]);

    return (
        <form
            style={{ textAlign: "center" }}
            onSubmit={onSubmit}>
            <Switch>
                <Route path="/login">
                    <LoginFields load={load} />
                </Route>
                <Route path="/register">
                    <RegisterFields load={load} />
                </Route>
                <Route path="/restore">
                    <RestoreFields load={load} />
                </Route>
            </Switch>
        </form>
    );
};

AuthModal.propTypes = {
    setError: PropTypes.func.isRequired,
    successMsg: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
};

export default memo(AuthModal);
