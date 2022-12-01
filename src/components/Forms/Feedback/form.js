import React, { Fragment, memo } from "react";
import * as PropTypes from "prop-types";
import InputMask from "react-input-mask";
import Button from "../../Button";
import Input from "../../Input";

const FeedbackForm = ({ load, error, disabled }) => (
    <Fragment>
        <Input
            placeholder="Иван Иванович*"
            name="name"
            type="text" />
        {error ? (
            <p className="error-message">
                {error}
            </p>
        ) : null}
        <InputMask
            maskChar="_"
            placeholder="Телефон*"
            mask="8 (999) 999-99-99">
            {(inputProps) => (
                <Input
                    {...inputProps}
                    name="phone" />
            )}
        </InputMask>
        <Button
            disabled={load || disabled}
            type="submit"
            className="submit">
            Отправить
        </Button>
    </Fragment>
);

FeedbackForm.propTypes = {
    load: PropTypes.bool,
    error: PropTypes.string,
    disabled: PropTypes.bool,
};

export default memo(FeedbackForm);
