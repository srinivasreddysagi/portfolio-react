const skills = [
    { key: "1", skill: "HTML" },
    { key: "2", skill: "CSS" },
    { key: "3", skill: "Java Script" },
    { key: "4", skill: "React JS" },
    { key: "5", skill: "Node JS" },
    { key: "6", skill: "Git/GitHub" },
    { key: "7", skill: "MySQL" },
    { key: "8", skill: "MongoDB" },
    { key: "9", skill: "Java" },
    { key: "10", skill: "Python" },
];

export default function Skills() {
    return (
        <section className="skills">
            <h2>Skills</h2>
            <div className="skills__skill">
                {skills.map((i) => (
                    <Skill sk={i.skill}></Skill>
                ))}
            </div>
        </section>
    );
}

function Skill(props) {
    return (
        <p key={props.key} className="skill">
            {props.sk}
        </p>
    );
}
