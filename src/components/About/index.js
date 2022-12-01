import React, { memo } from "react";
import aboutImage from "../../../assets/images/about.jpg";
import "./style.scss";

const About = () => {
    return (
        <div className="about">
            <div className="about-image">
                <img
                    src={aboutImage}
                    alt="about-pic" />
            </div>
            <section className="about-info">
                <h1 className="about-info__title">Немного о нас</h1>
                <div className="about-info__content">
                    <p className="paragraph header-paragraph">
                        «Сфера» – шаг на пути к цифровой трансформации стройконтроля
                    </p>
                    <p className="paragraph">
                        Представляем универсальный инструмент независимого контроля за объектами строительства и реконструкции.
                    </p>
                    <p className="paragraph">
                        Съемку и подготовку данных выполняют специалисты в строительстве и строительном контроле. Они выбирают ракурсы и расставляют акценты съёмки в зависимости от состояния объекта и стадии строительства, а система хранит данные в хронологическом порядке и показывает ход строительства в ретроспективе.
                    </p>
                    <p className="paragraph">
                        Фото, видео, панорамы, инфографика и аналитика по строительным объектам регулярно обновляются и доступны вам круглосуточно, семь дней в неделю.
                    </p>
                    <p className="paragraph">
                        Система создана строителями для строителей, поэтому она зарекомендовала себя среди руководителей строительных компаний, главных инженеров и руководителей объектов. «Сфера» удаленно покажет вам именно то, на что вы обращаете внимание при осмотре объекта.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default memo(About);
