const skills = [
    "HTML",
    "CSS",
    "Java Script",
    "React JS",
    "Node JS",
    "Git/GitHub",
    "MySQL",
    "MongoDB",
    "Java",
    "Python",
];

export default function Skills() {
    return (
        <section className="skills">
            <h2>Skills</h2>
            <div className="skills__skill">
                {
                    skills.map((i) => 
                        <Skill sk={i}></Skill>
                    )
                }
            </div>
        </section>
    );
}

function Skill(props) {
    return <p className="skill">{props.sk}</p>;
}
