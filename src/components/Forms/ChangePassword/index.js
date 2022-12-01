import React, { Fragment, memo } from "react";
import * as PropTypes from "prop-types";
import Input from "../../Input";
import Button from "../../Button";

const ChangePasswordFields = ({ load }) => (
    <Fragment>
        <Input
            type="password"
            name="password"
            placeholder="Новый пароль" />
        <Input
            type="password"
            name="cnfPassword"
            placeholder="Повторно новый пароль" />
        <Button
            loader={load}
            disabled={load}
            type="submit">
            войти
        </Button>
    </Fragment>
);

ChangePasswordFields.propTypes = {
    load: PropTypes.bool.isRequired,
};

export default memo(ChangePasswordFields);
