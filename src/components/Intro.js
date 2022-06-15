/* eslint-disable jsx-a11y/img-redundant-alt */


export default function Intro() {
    return (
        <section className="intro" id="intro">
            <div className="intro__img">
                <img
                    src={require("../resources/images/profile-picture.jpg")}
                    alt="Profile Picture"
                    className="intro__img-image"
                />
            </div>
            <div className="intro__text">
                <h1 className="intro__text-h">
                    Hi,
                    <br />
                    I'm Srinivas Reddy
                </h1>
                <p className="intro__text-para">
                    An aspiring full stack web developer passionate towards
                    latest technologies.
                </p>
                <p className="intro__text-para">
                    Experienced in working with web technologies and expertise
                    in building beautiful and responsive websites.
                </p>
                <div className="intro_text-resume">
                    <a href={require('../resources/files/resume.pdf')}
                        target="_blank" rel="noreferrer">
                        Resume
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>
                    </a>
                </div>
            </div>
        </section>
    );
}
