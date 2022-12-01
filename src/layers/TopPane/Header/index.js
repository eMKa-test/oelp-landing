import React, {
    useState, useCallback, useEffect, useRef, Fragment,
} from "react";
import { Link } from "react-scroll";
import {useHistory, useRouteMatch, useLocation} from "react-router-dom";
import classnames from "classnames";
import logo from "../../../../assets/images/primary-logo.png";
import Button from "../../../components/Button";
import { links } from "../../../common/constants";
import Modal from "../../../components/Modal";
import toggleIcon from "../../../../assets/icons/menu2.svg";
import closeIcon from "../../../../assets/icons/closeIcon.svg";
import { useResize } from "../../../common/hooks";
import "./style.scss";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Header = () => {
    const [open, setOpen] = useState(false);
    const [auth, setAuth] = useState(false);
    const match = useRouteMatch("/:formType");
    const query = useQuery();
    const { push } = useHistory();
    const isMobile = /mobile/i.test(window.navigator.userAgent);
    const parent = useRef(null);
    const aside = useRef(null);

    useEffect(() => {
        if (["login", "register", "restore"].includes(match?.params.formType)) {
            setAuth(true);
        }
        if (match?.params.formType === "chgPassword" && query.has("email") && query.has("key")) {
            setAuth(true);
        }
    }, []);

    const onResize = useCallback(({ x }) => {
        if (x > 991 && open) {
            setOpen(false);
        }
    }, [open]);

    useResize(
        onResize,
        [open],
    );

    const handleClick = useCallback((e) => {
        const node = aside.current;
        const { left } = node.getBoundingClientRect();
        const x = isMobile ? e?.touches[0]?.clientX : e.clientX;
        if (Math.floor(left) > x) {
            setOpen(false);
        }
    }, [aside, isMobile]);

    useEffect(() => {
        if (isMobile) {
            parent.current.addEventListener("touchstart", handleClick);
        } else {
            parent.current.addEventListener("click", handleClick);
        }
        return () => {
            if (isMobile) {
                parent.current.removeEventListener("touchstart", handleClick);
            } else {
                parent.current.removeEventListener("click", handleClick);
            }
        };
    }, [open, handleClick, onResize, parent, aside, isMobile]);

    const toggleAsideMenu = useCallback(() => {
        setOpen(!open);
    }, [open]);

    const onOpen = useCallback(() => {
        if (open) {
            setOpen(false);
        }
        setAuth(true);
        push("/login");
    }, [open]);

    const onClose = useCallback(() => {
        setAuth(false);
        push("/");
    }, []);

    return (
        <Fragment>
            <section className="header-section">
                <header className="top-panel">
                    <div className="top-panel__container">
                        <div className="top-panel__logo">
                            <Link
                                className="logo-link"
                                to="/">
                                <img
                                    src={logo}
                                    alt="Sfera-logo" />
                            </Link>
                        </div>
                        <div className="top-panel__control">
                            <nav className="navigation">
                                {links.map((link) => (
                                    <Link
                                        key={link.id}
                                        smooth
                                        spy
                                        duration={700}
                                        hashSpy
                                        className="navigation-link"
                                        to={link.id}>
                                        {link.title}
                                    </Link>
                                ))}
                            </nav>
                            <div className="login-button">
                                <Button onClick={onOpen}>Войти</Button>
                            </div>
                        </div>
                        <div
                            ref={parent}
                            className="top-panel-mobile">
                            <div
                                className={classnames("top-panel-mobile__backdrop", {
                                    hide: !open,
                                    show: open,
                                })} />
                            <button
                                onClick={toggleAsideMenu}
                                type="button"
                                className={classnames("toggle-button")}>
                                <img
                                    src={toggleIcon}
                                    alt="menu-icon" />
                            </button>
                            <div
                                ref={aside}
                                className={classnames("aside", {
                                    hide: !open,
                                    show: open,
                                })}>
                                <div
                                    className={classnames("close-button", {
                                        hide: !open,
                                        show: open,
                                    })}>
                                    <img
                                        src={closeIcon}
                                        alt="close-icon" />
                                </div>
                                <div className="login-button">
                                    <Button onClick={onOpen}>Войти</Button>
                                </div>
                                <nav>
                                    {links.map((link) => (
                                        <Link
                                            key={link.id}
                                            smooth
                                            spy
                                            duration={700}
                                            hashSpy
                                            className="navigation-link"
                                            onClick={() => setOpen(false)}
                                            to={link.id}>
                                            {link.title_mobile}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
            </section>
            <Modal
                open={auth}
                onClose={onClose} />
        </Fragment>
    );
};

export default Header;
