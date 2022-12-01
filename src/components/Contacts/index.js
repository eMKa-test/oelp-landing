import React, { memo, useCallback } from "react";
import { animateScroll as scroll } from "react-scroll";
import scrollToTop from "../../../assets/icons/scrollToTop.svg";
import mailIcon from "../../../assets/icons/mailIcon.svg";
import addressIcon from "../../../assets/icons/addressIcon.svg";
import phoneIcon from "../../../assets/icons/phoneIcon.svg";
import "./style.scss";

const scrollOption = {
    duration: 1000,
};

const Contacts = () => {
    const onClick = useCallback(() => {
        scroll.scrollToTop(scrollOption);
    }, []);

    return (
        <div className="contacts">
            <div className="contacts__wrapper">
                <button
                    onClick={onClick}
                    className="scroll-top"
                    type="button">
                    <div className="icon">
                        <img
                            src={scrollToTop}
                            alt="scroll-arrow" />
                    </div>
                </button>
                <div className="raw mail">
                    <img
                        src={mailIcon}
                        alt="mail-icon" />
                    <a
                        title="Написать нам"
                        href="mailto:check@some.ru">
                        <span className="info">
                            check@some.ru
                        </span>
                    </a>
                </div>
                <div className="raw address">
                    <img
                        src={addressIcon}
                        alt="address-icon" />
                    <span className="info">
                        г. Санкт-Петербург, ул. Пушкина
                    </span>
                </div>
                <div className="raw phone">
                    <img
                        src={phoneIcon}
                        alt="phone-icon" />
                    <a
                        title="Позвонить нам"
                        href="tel:+77777777777">
                        <span className="info">
                            +7 777 777-77-77
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default memo(Contacts);
