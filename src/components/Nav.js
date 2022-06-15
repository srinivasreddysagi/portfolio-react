/* eslint-disable no-array-constructor */

const menuButton = document.getElementById("menu");
const menuList = document.getElementById("menu-list");
// const links = Array(
//     document.getElementById("item-1"),
//     document.getElementById("item-2"),
//     document.getElementById("item-3")
// );

// menuButton.addEventListener("click", () =>

function toggle() {
    menuButton.classList.toggle("show");
    menuList.classList.toggle("show");
}

// links.forEach((e) => {
//     e.addEventListener("click", () =>

function remove() {
    menuButton.classList.remove("show");
    menuList.classList.remove("show");
}

export default function Nav(props) {
    return (
        <header className="topbar">
            <div className="menu" id="menu" onClick={props.handleClick}>
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
