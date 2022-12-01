import virtualModel from "../../assets/icons/virtual-model.svg";
import aero from "../../assets/icons/aero.png";
import timelapse from "../../assets/icons/timelapse.svg";
import promoVideo from "../../assets/icons/promo-video.svg";
import streamVideo from "../../assets/icons/stream-video.svg";
import geoInfo from "../../assets/icons/geo-info.svg";
import industrialObjects from "../../assets/images/industrial-objects.jpg";
import buildControl from "../../assets/images/build-control.jpg";
import distantObjects from "../../assets/images/distant-objects.jpg";
import socialObjects from "../../assets/images/social-objects.jpg";
import security from "../../assets/images/security.png";
import watchBuild from "../../assets/images/watch-build.png";
import linearBuild from "../../assets/images/linear-build.jpg";
import restoration from "../../assets/images/restoration.jpg";

export const serviceCards = [
    {
        id: "01",
        title: "виртуальная модель",
        description: "Представление окружающей реальности, созданное на основе панорамных фотографий объекта",
        img: virtualModel,
    },
    {
        id: "02",
        title: "аэросъёмка",
        description: "Видеосъемка с использованием дронов, создание аэропанорам для удобной навигации по объекту",
        img: aero,
    },
    {
        id: "03",
        title: "таймлапс",
        description: "Наглядное отображение всего процесса строительства",
        img: timelapse,
    },
    {
        id: "04",
        title: "создание промо роликов",
        description: "Видеомонтаж презентационных и промороликов для отчетов и совещаний",
        img: promoVideo,
    },
    {
        id: "05",
        title: "онлайн видеотрансляция",
        description: "Видеотрансляция с объекта строительства на сайт заказчика",
        img: streamVideo,
    },
    {
        id: "06",
        title: "гео информационные системы",
        description: "Сбор и визуализация любых данных о процессе строительства",
        img: geoInfo,
    },
];

export const usefulCards = [
    {
        title: "промышленные объекты",
        description: "Мониторинг всех этапов строительства объектов промышленности",
        img: industrialObjects,
    },
    {
        title: "жилые комплексы и благоустройство",
        description: "Строительный контроль за возведением жилых комплексов",
        img: buildControl,
    },
    {
        title: "объекты, расположенные в трудноступных местах",
        description: "Наша команда имеет обширный опыт и штат для работы в любых погодных и географических условиях",
        img: distantObjects,
    },
    {
        title: "объекты социальной инфраструктуры",
        description: "Осуществление контроля за возведением и реконструкцией детских садов, школ, больниц и т.п.",
        img: socialObjects,
    },
    {
        title: "охранные задачи",
        description: "Визуальный мониторинг для нужд безопасности",
        img: security,
    },
    {
        title: "мониторинг обслуживания спортивных сооружений",
        description: "Для строящихся объектов и для отслеживания состояния конструкций уже построенных",
        img: watchBuild,
    },
    {
        title: "линейное строительство",
        description: "Контроль строительства магистральных трубопроводов, автодорог и коммуникаций",
        img: linearBuild,
    },
    {
        title: "реставрация памятников архитектуры и культурных объектов",
        description: "Отслеживание хода глубокой реставрации храмовых комплексов",
        img: restoration,
    },
];

export const links = [
    {
        title: "услуги",
        title_mobile: "Услуги",
        id: "service",
    },
    {
        title: "область применения",
        title_mobile: "Область применения",
        id: "environment",
    },
    {
        title: "о компании",
        title_mobile: "О компании",
        id: "about",
    },
    {
        title: "контакты",
        title_mobile: "Контакты",
        id: "contacts",
    },
];

export default null;
