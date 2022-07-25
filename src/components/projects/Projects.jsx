import './projects.css';
import projectsDB from "./projectsDb";
import { BsLink45Deg } from "react-icons/bs";

export default function Projects() {
    return (
        <section className="projects">
            <h2>Projects</h2>
            <p>Please do checkout my projects below</p>

            <ul className="projects__show">
                {projectsDB.map((obj) => (
                    <Project key={obj.key} attr={obj}></Project>
                ))}
            </ul>
        </section>
    );
}

function Project(props) {
    return (
        <li className="projects__show__project">
            <h4>{props.attr.title}</h4>
            <p>{props.attr.description}</p>
            <div className="links-wrapper">
                <a href={props.attr.code_url} target="_blank" rel="noreferrer">
                    Code
                    <BsLink45Deg />
                </a>
                <a href={props.attr.live_url} target="_blank" rel="noreferrer">
                    Visit
                    <BsLink45Deg />
                </a>
            </div>
        </li>
    );
}
