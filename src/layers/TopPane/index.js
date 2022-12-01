import React, { memo } from "react";
import { BrowserRouter } from "react-router-dom";
import Banner from "./Banner";
import Header from "./Header";
import "./style.scss";

const TopPane = () => (
    <div className="landing-page__top-pane">
        <BrowserRouter>
            <Banner />
            <Header />
        </BrowserRouter>
    </div>
);

export default memo(TopPane);
