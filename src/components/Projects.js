const projectsDB = [
    {
        title: "Real-time currency converter",
        description:
            "A real-time currency converter developed using Vanilla JS and Exchange Rate API.",
        live_url: "https://niv-js.netlify.app/currency-converter/",
        code_url: "https://github.com/srinivasreddysagi/currency-converter",
    },

    {
        title: "Expense Tracker",
        description:
            "An Expense Tracker built using HTML, CSS, JavaScript and Local Storage.",
        live_url: "https://niv-js.netlify.app/expense-tracker/",
        code_url: "https://github.com/srinivasreddysagi/expense-tracker/",
    },

    {
        title: "Form validations",
        description:
            "Client side form validation using HTML, CSS, JavaScript and Regex.",
        live_url: "https://niv-js.netlify.app/form-validations/",
        code_url: "https://github.com/srinivasreddysagi/form-validations/",
    },

    {
        title: "Rock Paper Scissors Game",
        description:
            "A simple UI based Rock Paper Scissors game built using HTML, CSS and JavaScript. Have fun!",
        live_url: "https://niv-js.netlify.app/game-rock-paper-scissors/",
        code_url:
            "https://github.com/srinivasreddysagi/game-rock-paper-scissors/",
    },

    {
        title: "Fylo landing page",
        description:
            "A beautiful and responsive webpage with pleasing look using grid layout",
        live_url:
            "https://niv-frontend.netlify.app/fylo-landing-page-with-two-column-layout-master/",
        code_url:
            "https://github.com/srinivasreddysagi/fylo-landing-page-with-two-column-layout-master/",
    },

    {
        title: "Clipboard landing page",
        description:
            "A beautiful and responsive webpage using flex layout containing few individual sections",
        live_url:
            "https://niv-frontend.netlify.app/clipboard-landing-page-master/",
        code_url:
            "https://github.com/srinivasreddysagi/clipboard-landing-page-master/",
    },

    {
        title: "Chat app component",
        description:
            "A splendid and complex chat app component designed using HTML and illustrated using CSS",
        live_url:
            "https://niv-frontend.netlify.app/chat-app-css-illustration-master/",
        code_url:
            "https://github.com/srinivasreddysagi/chat-app-css-illustration-master/",
    },

    {
        title: "Testimonials grid section",
        description: "An elegant testimonials section using flex layout",
        live_url:
            "https://niv-frontend.netlify.app/testimonials-grid-section-main/",
        code_url:
            "https://github.com/srinivasreddysagi/testimonials-grid-section-main/",
    },

    {
        title: "Order summary component",
        description:
            "A simple and responsive order summary component using flex layout",
        live_url:
            "https://niv-frontend.netlify.app/order-summary-component-main/",
        code_url:
            "https://github.com/srinivasreddysagi/order-summary-component-main/",
    },

    // {
    //     title: "",
    //     description: "",
    //     live_url: "",
    //     code_url: "",
    // }
];

export default function Skills() {
    return (
        <section className="projects" id="projects">
            <h2>Projects</h2>
            <p>Please do checkout my projects below</p>

            <div className="projects__show">
                {projectsDB.map((obj) => (
                    <Project attr={obj}></Project>
                ))}
            </div>
        </section>
    );
}

function Project(props) {
    return (
        <div className="projects__show-project">
            <h4>{props.attr.title}</h4>
            <p>{props.attr.description}</p>
            <div className="links-wrapper">
                <a href={props.attr.code_url} target="_blank" rel="noreferrer">
                    Code
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
                <a href={props.attr.live_url} target="_blank" rel="noreferrer">
                    Visit
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
        </div>
    );
}
