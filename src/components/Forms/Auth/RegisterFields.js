import React, { memo, Fragment } from "react";
import * as PropTypes from "prop-types";
import Input from "../../Input";
import Button from "../../Button";

const RegisterFields = ({ load }) => (
    <Fragment>
        <Input
            required
            type="text"
            name="name"
            placeholder="Имя" />
        <Input
            required
            type="text"
            name="email"
            placeholder="Почта" />
        <Input
            required
            type="password"
            name="password"
            placeholder="Пароль" />
        <Input
            required
            type="password"
            name="confirmPassword"
            placeholder="Повторно пароль" />
        <Button
            loader={load}
            disabled={load}
            type="submit">
            Зарегистрироваться
        </Button>
    </Fragment>
);

RegisterFields.propTypes = {
    load: PropTypes.bool.isRequired,
};

export default memo(RegisterFields);
