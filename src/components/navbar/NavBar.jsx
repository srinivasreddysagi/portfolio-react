import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import "./navbar.css";

export default function NavBar() {
    const [menu, setMenu] = useState(false);
    const menuItems = ["Home", "Projects", "Services", "About Me", "Contact"];

    return (
        <header className="navbar">
            <div className="navbar__menu--icon" onClick={() => setMenu(!menu)}>
                <TiThMenu />
            </div>
            <div
                className={
                    menu
                        ? "navbar__menu--mobile navbar__menu--mobile--show navbar__menu--desktop"
                        : "navbar__menu--mobile navbar__menu--mobile--hide navbar__menu--desktop"
                }
            >
                <ul>
                    {menuItems.map((item) => (
                        <li
                            className="navbar__menu__item navbar__menu__item--hover" key={item}
                            onClick={() => setMenu(false)}
                        >
                            <a href="./">{item}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
