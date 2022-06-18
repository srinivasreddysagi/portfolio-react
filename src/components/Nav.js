/* eslint-disable no-array-constructor */

const menuButton = document.getElementById("menu");
const menuList = document.getElementById("menu-list");

export default function Nav() {
    function toggle() {
        menuButton.classList.toggle("show");
        menuList.classList.toggle("show");
    }

    function remove() {
        menuButton.classList.remove("show");
        menuList.classList.remove("show");
    }

    return (
        <header className="topbar">
            <div className="menu" id="menu" onClick={toggle}>
                <i className="fa-solid fa-align-justify"></i>
            </div>
            <div className="topbar__menu" id="menu-list">
                <ul>
                    <li className="button" id="item-1" onClick={remove}>
                        <a href="#intro">Home</a>
                    </li>
                    <li className="button" id="item-2" onClick={remove}>
                        <a href="#projects">Projects</a>
                    </li>
                    <li className="button" id="item-3" onClick={remove}>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
