import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "./Header.scss";
function Header() {
    return (
        <header className="header">
            <div className="header__left">
                <img src={logo} alt="VuaTro" className="logo" />

                <select className="location">
                    <option>Ninh Thuận</option>
                    <option>Khánh Hòa</option>
                    <option>TP HCM</option>
                </select>

                <div className="search">
                    <input
                        type="text"
                        placeholder="Tìm Bất Động Sản..."
                    />
                    <button className="search__btn">🔍</button>
                </div>
            </div>

            <div className="header__right">
                <span className="icon">♡</span>
                <span className="icon">🔔</span>

                <button className="btn btn--outline">Đăng nhập</button>
                <button className="btn btn--primary">Đăng tin</button>

                <div className="avatar">
                    <img src="https://i.pravatar.cc/32" alt="user" />
                </div>
            </div>
        </header>
    );
}

export default Header;
