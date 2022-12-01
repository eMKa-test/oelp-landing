import React, { memo } from "react";
import * as PropTypes from "prop-types";

const SentForm = ({ styles = {} }) => (
    <div
        className="feedBack-form__wrapper"
        style={styles}>
        <span className="sent">Спасибо! Форма отправлена</span>
    </div>
);

SentForm.propTypes = {
    styles: PropTypes.shape({}),
};

export default memo(SentForm);
