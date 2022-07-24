/* eslint-disable jsx-a11y/img-redundant-alt */

import { HiExternalLink } from "react-icons/hi";
import './intro.css';

export default function Intro() {
    return (
        <section className="intro">
            <div className="intro__img">
                <img
                    src={require("./assets/profile.jpg")}
                    alt="Profile Picture"
                />
            </div>
            <div className="intro__content">
                <h1 className="intro__content__heading">
                    Hi there!
                    <br />
                    I'm{" "}
                    <span>
                        S<span>rinivas</span>
                    </span>{" "}
                    <span>Reddy</span>
                </h1>
                <p className="intro__content__para">
                    An aspiring full stack web developer passionate towards
                    latest technologies.
                </p>
                <p className="intro__content__para">
                    Experienced in working with frontend web technologies and expertise
                    in developing beautiful and responsive websites.
                </p>
                <div className="intro__content__resume">
                    <a
                        href={require("./assets/resume.pdf")}
                        target="_blank"
                        rel="noreferrer"
                    >
                        Resume <HiExternalLink />
                    </a>
                </div>
            </div>
        </section>
    );
}
