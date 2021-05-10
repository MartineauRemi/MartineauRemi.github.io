import React from 'react'
import logo from "../images/logo-white.svg"

export default function Header({menuActive, setMenuActive}) {
    const onClickHamburger = () => setMenuActive(!menuActive)

    return (
        <header className="header">
            <div className="logo header__logo">
                <a href="#hero">
                    <img src={logo} alt="logo" width="32px" height="32px"/>
                </a>
            </div>
            <div
                className={`header__hamburger ${menuActive? "header__hamburger--active" : ""}`}
                onClick={onClickHamburger}>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
        </header>
    )
}
