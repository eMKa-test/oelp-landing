import React, {
    memo, useCallback, useEffect, useState,
} from "react";
import axios from "axios";
import FeedbackFrom from "./form";
import SentForm from "./SentForm";
import "./style.scss";

const FeedBack = () => {
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(null);
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
                } else {
                    setError("Ошибка");
                }
            }).catch((err) => {
                console.warn(err?.response?.message || err.message);
                setError("Ошибка");
            }).finally(() => setLoad(false));
    }, []);

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(null);
            }, 4000);
        }
    }, [error]);

    return (
        <div className="feedBack-form">
            {success ? (
                <SentForm />
            ) : (
                <div className="feedBack-form__wrapper">
                    <h3 className="title">
                        Консультация по услугам
                    </h3>
                    <p className="description">
                        Менеджеры компании ответят на все Ваши вопросы, подберут необходимое оборудование и подготовят коммерческое предложение
                    </p>
                    <div className="form-inputs">
                        <form onSubmit={onSubmit}>
                            <FeedbackFrom
                                load={load}
                                error={error} />
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

FeedBack.propTypes = {};

export default memo(FeedBack);
