import React from "react";
import * as PropTypes from "prop-types";
import classNames from "classnames";
import "./style.scss";

const ModalMsg = ({ success, error }) => {
    return (
        <div
            className={classNames(
                "Modal-message-wrapper",
                {
                    "Modal-message_show": error || success,
                    "Modal-message_hide": (!error && !success),
                    "Modal-message_error": false,
                },
            )}>
            {error && (
                <p className="sign error">{error}</p>
            )}
            {success && (
                <p className="sign success">{success}</p>
            )}
        </div>
    );
};

ModalMsg.propTypes = {
    error: PropTypes.string,
    success: PropTypes.string,
};

export default ModalMsg;
