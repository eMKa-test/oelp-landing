import React, { memo } from "react";
import { Element } from "react-scroll";
import FeedBack from "../../components/Forms/Feedback";
import Contacts from "../../components/Contacts";
import "./style.scss";

const FooterPane = () => (
    <Element name="contacts">
        <footer className="footer__wrapper-container">
            <div className="footer__top">
                <FeedBack />
                <div className="stub-middle" />
                <Contacts />
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom-container">
                    <p className="copyright">
                        Copyright © 2021 ООО "ОЕЛП"
                    </p>
                </div>
            </div>
        </footer>
    </Element>
);

export default memo(FooterPane);
