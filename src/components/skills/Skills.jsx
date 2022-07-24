import "./skills.css";
import data from "./skillset";

export default function Skills() {
    return (
        <section className="skills">
            <h2>Skills</h2>
            <ul className="skills__container">
                {data.map((i) => (
                    <Skill key={i.key} skill={i.skill}></Skill>
                ))}
            </ul>
        </section>
    );
}

function Skill({ skill }) {
    return <li className="skills__container__skill">{skill}</li>;
}
