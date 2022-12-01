import React, {
    memo, useRef, useEffect, useState,
} from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Card = (props) => {
    const { card, scrollPosition, index } = props;
    const [loaded, setLoaded] = useState(false);
    const [yCoord, setYCoord] = useState(0);
    const [show, setShow] = useState(false);
    const childNode = useRef();

    useEffect(() => {
        if (loaded) {
            const { top } = childNode.current.getBoundingClientRect();
            setYCoord(top);
        }
    }, [loaded]);

    useEffect(() => {
        if (scrollPosition >= yCoord && yCoord) {
            setShow(true);
        }
    }, [yCoord, scrollPosition]);

    return (
        <div
            id={`test_${card.id}`}
            onLoad={() => setLoaded(true)}
            className="service-card__wrapper">
            <div className="service-card">
                <span
                    ref={childNode}
                    className={classnames("service-card__id", {
                        animate_active: show,
                    })}>
                    {card.id}
                </span>
                <div className="service-card__middle">
                    <span className="service-card__middle__image">
                        <img
                            src={card.img}
                            alt={`service_${card.title}`} />
                    </span>
                    <span className="service-card__title">
                        {card.title}
                    </span>
                </div>
                <div className="service-card__separate" />
                <span className="service-card__description">
                    {card.description}
                </span>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    }),
    scrollPosition: PropTypes.number,
    index: PropTypes.number,
};

export default memo(Card);
