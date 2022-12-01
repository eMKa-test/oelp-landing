import React, { memo, useCallback, useState } from "react";
import * as PropTypes from "prop-types";
import axios from "axios";
import FeedbackForm from "../../Forms/Feedback/form";
import SentForm from "../../Forms/Feedback/SentForm";

const Feedback = ({ setError, afterSuccess }) => {
    const [load, setLoad] = useState(false);
    const [success, setSuccess] = useState(false);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const phone = e.target.phone.value;
        const phoneNumber = phone.match(/\d*/g).join("");
        if (!phone && !name) {
            return setError("Необходимо заполнить все поля");
        }
        if (!name) {
            return setError("Не заполнено имя");
        }
        if (!phone) {
            return setError("Не заполнен телефон");
        }
        if (phoneNumber.length < 11) {
            return setError("Не корректно заполнен телефон");
        }
        setLoad(true);
        axios.post("/user/api/user/feedback", { name, phone: phoneNumber })
            .then(({ data: { success = false } }) => {
                if (success) {
                    setSuccess(true);
                    setTimeout(() => {
                        afterSuccess();
                    }, 2000);
                } else {
                    setError("Ошибка");
                }
            }).catch((err) => {
                console.warn(err?.response?.message || err.message);
                setError("Ошибка");
            }).finally(() => setLoad(false));
    }, []);

    if (success) {
        return (
            <SentForm
                styles={{
                    textAlign: "center", fontSize: "20px", fontWeight: 500, color: "#FF3B69FF",
                }} />
        );
    }

    return (
        <form
            style={{ textAlign: "center" }}
            onSubmit={onSubmit}>
            <FeedbackForm
                load={load} />
        </form>
    );
};

Feedback.propTypes = {
    setError: PropTypes.func.isRequired,
    afterSuccess: PropTypes.func.isRequired,
};

export default memo(Feedback);
