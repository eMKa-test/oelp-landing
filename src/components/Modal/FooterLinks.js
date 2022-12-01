import React, { memo } from "react";
import * as PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LINKS = {
    login: [
        {
            title: "Регистрация",
            to: "/register",
        },
        {
            title: "Забыли пароль",
            to: "/restore",
        },
    ],
    register: [
        {
            title: "Вход",
            to: "/login",
        },
    ],
    restore: [
        {
            title: "Вход",
            to: "/login",
        },
        {
            title: "Регистрация",
            to: "/register",
        },
    ],
};

const FooterLinks = ({ type }) => {
    if (!Object.keys(LINKS).includes(type)) {
        return null;
    }

    return LINKS[type].map(({ title, to }, i) => (
        <div
            key={String(i)}
            className="modal-footer__link">
            <Link to={to}>
                {title}
            </Link>
        </div>
    ));
}

FooterLinks.propTypes = {
    type: PropTypes.string,
};

export default memo(FooterLinks);
