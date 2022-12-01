import React, { memo, Fragment } from "react";
import * as PropTypes from "prop-types";
import Input from "../../Input";
import Button from "../../Button";

const RestoreFields = ({ load }) => (
    <Fragment>
        <Input
            required
            type="email"
            name="email"
            placeholder="Введите почту" />
        <Button
            loader={load}
            disabled={load}
            type="submit">
            Отправить
        </Button>
    </Fragment>
);

RestoreFields.propTypes = {
    load: PropTypes.bool.isRequired,
};

export default memo(RestoreFields);
