import React, { memo } from "react";
import TitlePane from "./TitlePane";
import bg from "../../../../assets/images/slider1_1.jpg";
import "./style.scss";

const Banner = () => {
    return (
        <div className="banner">
            <div className="banner__image-overlay">
                <img
                    src={bg}
                    alt="bg-slide" />
            </div>
            <div className="banner__overlay" />
            <TitlePane />
        </div>
    );
};

export default memo(Banner);
