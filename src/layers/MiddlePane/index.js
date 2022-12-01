import React, { memo } from "react";
import { Element } from "react-scroll";
import ServiceCards from "../../components/ServiceCards";
import UsefulCards from "../../components/UsefulCards";
import About from "../../components/About";
import "./style.scss";

const MiddlePane = () => (
    <main className="landing-page__middle-pane">
        <div className="middle-pane__services-list-wrapper">
            <Element name="service">
                <ServiceCards />
            </Element>
        </div>
        <div className="middle-pane__useful-environment">
            <Element name="environment">
                <UsefulCards />
            </Element>
        </div>
        <div className="middle-pane__about">
            <Element name="about">
                <About />
            </Element>
        </div>
    </main>
);

export default memo(MiddlePane);
