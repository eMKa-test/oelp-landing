import React, { memo, Fragment } from "react";
import * as PropTypes from "prop-types";
import Input from "../../Input";
import Button from "../../Button";

const LoginFields = ({ load }) => (
    <Fragment>
        <Input
            type="text"
            name="email"
            placeholder="Почта" />
        <Input
            type="password"
            name="password"
            placeholder="Пароль" />
        <Button
            loader={load}
            disabled={load}
            type="submit">
            войти
        </Button>
    </Fragment>
);

LoginFields.propTypes = {
    load: PropTypes.bool.isRequired,
};

export default memo(LoginFields);
