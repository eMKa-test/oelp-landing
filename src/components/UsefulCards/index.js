import React, { memo } from "react";
import { usefulCards } from "../../common/constants";
import Card from "./Card";
import "./style.scss";

const UsefulCards = () => (
    <div className="useful-environment__wrapper">
        <div className="separate-container">
            <span className="separate" />
        </div>
        <div className="useful__wrapper">
            <span className="useful__title">Область применения</span>
            <div className="useful__example-title">
                Несколько примеров использования наших продуктов:
            </div>
            <div className="useful-list__wrapper">
                <div className="useful-list">
                    {usefulCards.map((card) => (
                        <Card
                            key={card.title}
                            card={card} />
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default memo(UsefulCards);
