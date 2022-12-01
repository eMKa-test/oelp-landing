import React, {
    memo, useCallback, useState, useEffect,
} from "react";
import * as PropTypes from "prop-types";
import ReactModal from "react-modal";
import { useRouteMatch } from "react-router-dom";
import closeIcon from "../../../assets/icons/closeIcon.svg";
import AuthForms from "./Auth";
import FeedbackForms from "./Feedback";
import ModalMsg from "./ModalMsg";
import ChangePassword from "./ChangePassword";
import customStyles from "./styles";
import FooterLinks from "./FooterLinks";
import "./style.scss";

const formTypesBody = (type, rest) => {
    switch (type) {
        case "login":
        case "register":
        case "restore": return (
            <AuthForms
                type={type}
                {...rest} />
        );
        case "chgPassword": return (
            <ChangePassword {...rest} />
        );
        default: return <FeedbackForms {...rest} />;
    }
};

const TITLE = {
    login: {
        title: "Вход",
        to: "/login",
    },
    register: {
        title: "Регистрация",
        to: "/register",
    },
    restore: {
        title: "Восстановление пароля",
        to: "/restore",
    },
    chgPassword: {
        title: "Восстановление пароля",
        to: "/chgPassword",
    },
    default: {
        title: "Наш менеджер перезвонит Вам",
    },
};

const Modal = (props) => {
    const {
        open = false,
        onClose = () => null,
    } = props;
    const match = useRouteMatch("/:formType");
    const [error, setError] = useState(null);
    const [success, successMsg] = useState(null);

    useEffect(() => {
        if (error) {
            setTimeout(() => {
                setError(null);
            }, 2000);
        }
        if (success) {
            setTimeout(() => {
                successMsg(null);
            }, 2000);
        }
    }, [error, success]);

    const afterSuccess = useCallback(() => {
        onClose();
    }, [onClose]);

    return (
        <ReactModal
            isOpen={open}
            onRequestClose={onClose}
            style={customStyles}>
            <React.Fragment>
                <div className="modal-header">
                    <div className="modal-header__toggle-buttons">
                        <h3 className="modal-header__title">
                            {(match?.params && TITLE[match?.params?.formType]?.title)
                            || TITLE.default.title}
                        </h3>
                    </div>
                    <div className="separate" />
                    <button
                        type="button"
                        className="modal-header__close"
                        onClick={onClose}>
                        <img
                            src={closeIcon}
                            alt="close-icon" />
                    </button>
                </div>
                <div className="modal-body">
                    {formTypesBody(match?.params?.formType, {
                        setError, afterSuccess, successMsg,
                    })}
                </div>
                {match?.params?.formType ? (
                    <div className="modal-footer">
                        <FooterLinks type={match?.params?.formType} />
                    </div>
                ) : null}
                <ModalMsg
                    success={success}
                    error={error} />
            </React.Fragment>
        </ReactModal>
    );
};

Modal.propTypes = {
    open: PropTypes.bool,
    onClose: PropTypes.func,
    params: PropTypes.shape({
        formType: PropTypes.string,
    }),
};

export default memo(Modal);
