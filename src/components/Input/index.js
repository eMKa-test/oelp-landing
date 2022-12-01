import React, {
    memo, useRef, useState, useCallback, useEffect,
} from "react";
import * as PropTypes from "prop-types";
import classnames from "classnames";
import showPassword from "../../../assets/icons/showPassword.svg";
import hidePassword from "../../../assets/icons/hidePassword.svg";
import "./style.scss";

const Input = (props) => {
    const {
        placeholder = "Default",
        type = "text",
        wrapperClassname = "",
        inputClassname = "",
        name = "",
        pattern = ".*",
        required = false,
        ...restProps
    } = props;
    const [showPwd, setShowPwd] = useState(false);
    const input = useRef(null);
    const isPwd = type === "password";

    const _showPwd = useCallback(() => {
        setShowPwd(!showPwd);
    }, [showPwd, input]);

    useEffect(() => {
        if (isPwd) {
            if (showPwd) {
                input.current.type = "text";
            } else {
                input.current.type = "password";
            }
        }
    }, [showPwd, isPwd]);

    return (
        <div className={classnames("input-wrapper", wrapperClassname)}>
            <input
                pattern={pattern}
                {...restProps}
                required={required}
                name={name}
                ref={input}
                className={classnames("input", inputClassname)}
                placeholder={placeholder}
                type={type} />
            {isPwd ? (
                <button
                    className="password-button"
                    onClick={_showPwd}
                    type="button">
                    <img
                        src={!showPwd ? showPassword : hidePassword}
                        alt="show-icon" />
                </button>
            ) : null}
        </div>
    );
};

Input.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    wrapperClassname: PropTypes.string,
    inputClassname: PropTypes.string,
    name: PropTypes.string,
    required: PropTypes.bool,
    pattern: PropTypes.string,
};

export default memo(Input);
