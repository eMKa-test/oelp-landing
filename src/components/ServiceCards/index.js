import React, { memo, useState } from "react";
import { serviceCards } from "../../common/constants";
import Card from "./Card";
import { useScrollPosition } from "../../common/hooks";
import "./style.scss";

const ServiceCards = () => {
    const [scrollPosition, setHideOnScroll] = useState(() => window.innerHeight);
    useScrollPosition(
        setHideOnScroll,
        [],
        null,
        false,
        150,
    );

    return (
        <div className="services-list__wrapper">
            <div className="service-list__body">
                {serviceCards.map((card, i) => (
                    <Card
                        key={card.id}
                        index={i}
                        scrollPosition={scrollPosition}
                        card={card} />
                ))}
            </div>
        </div>
    );
};

export default memo(ServiceCards);
