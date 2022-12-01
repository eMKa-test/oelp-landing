import React, { memo, useCallback } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./style.scss";

const Button = (props) => {
    const {
        children = "",
        type = "button",
        onClick = () => null,
        className = "",
        disabled,
        loader,
    } = props;

    const _onClick = useCallback((...rest) => {
        if (typeof onClick === "function") {
            onClick(...rest);
        }
    }, [onClick]);

    return (
        <button
            disabled={disabled}
            className={classnames("custom-button", className)}
            onClick={_onClick}
            type={type}>
            {loader ? (
                <div className="loader-container">
                    <span className="loader" />
                </div>
            ) : null}
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    loader: PropTypes.bool,
};

export default memo(Button);
