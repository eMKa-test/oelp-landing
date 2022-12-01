import React, { memo, useState } from "react";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";

const TitlePane = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="title">
            <div className="title__wrapper">
                <span className="header">
                    Технологичный мониторинг строительства
                </span>
                <span className="description">
                    Теперь Вам круглосуточно доступны фото, видео, панорамы, инфографика и аналитика по всем вашим объектам
                </span>
                <Button
                    onClick={() => setOpen(true)}
                    className="connect-button">
                    связаться с нами
                </Button>
            </div>
            <Modal
                onClose={() => setOpen(false)}
                open={open} />
        </div>
    );
};

export default memo(TitlePane);
