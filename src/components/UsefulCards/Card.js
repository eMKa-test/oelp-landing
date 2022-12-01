import React, { memo } from "react";
import * as PropTypes from "prop-types";

const Card = ({ card }) => (
    <div className="useful-card__wrapper">
        <div className="useful-card">
            <div className="useful-card__image">
                <img
                    src={card.img}
                    alt="useful-objects" />
                <span className="useful-overlay" />
            </div>
            <div className="useful__info">
                <div className="useful__info-title">
                    <span className="list-sign" />
                    <span className="title">
                        {card.title}
                    </span>
                    <span className="list-sign list-sign__mobile" />
                </div>
                <div className="useful__info-description">
                    {card.description}
                </div>
            </div>
        </div>
    </div>
);

Card.propTypes = {
    card: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    }),
};

export default memo(Card);
