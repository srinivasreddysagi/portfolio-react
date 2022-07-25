import React from "react";
import { HiOutlineCode } from "react-icons/hi";
import { BiLinkAlt } from "react-icons/bi";
import { AiFillRightCircle } from "react-icons/ai";
import { AiFillLeftCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import projects from "../projects/projectsDb";
import "./project-slider.css";


function Slide({ cname, playnpause, title, description, live_url, code_url }) {
    return (
        <div className={cname} onClick={playnpause}>
            <h4 className="project-slider__slide__heading">{title}</h4>
            <small className="project-slider__slide__desc">{description}</small>
            <div className="links-wrapper">
                <a href={code_url} target="_blank" rel="noreferrer">
                    Code
                    <HiOutlineCode className="a-in"></HiOutlineCode>
                </a>
                <a href={live_url} target="_blank" rel="noreferrer">
                    Visit
                    <BiLinkAlt className="a-in" />
                </a>
            </div>
        </div>
    );
}

export default function Slider() {
    const [slide, setSlide] = useState(0);
    const [inc, setInc] = useState(1);

    useEffect(() => {
        const last = projects.length - 1;
        if (slide < 0) {
            setSlide(last);
        } else if (slide > last) {
            setSlide(0);
        }
    }, [slide]);

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide(slide + inc);
        }, 3000);
        return () => clearInterval(interval);
    });

    return (
        <section className="projects__main">
            <h2>Projects</h2>
            <div className="projects">
                <div className="project-slider">
                    {projects.map((project, index) => {
                        let position = "project-slider__slide";
                        if (slide === index) {
                            position =
                                "project-slider__slide project-slider__slide--active";
                        } else if (
                            index === slide - 1 ||
                            (slide === 0 && index === projects.length - 1)
                        ) {
                            position =
                                "project-slider__slide project-slider__slide--next";
                        } else {
                            position =
                                "project-slider__slide project-slider__slide--prev";
                        }
                        return (
                            <Slide
                                key={project.title}
                                cname={position}
                                playnpause={() => (inc ? setInc(0) : setInc(1))}
                                {...project}
                            />
                        );
                    })}
                </div>
                <div className="buttons">
                    <button onClick={() => setSlide(slide - 1)}>
                        <AiFillLeftCircle />
                    </button>
                    <button onClick={() => setSlide(slide + 1)}>
                        <AiFillRightCircle />
                    </button>
                </div>
            </div>
        </section>
    );
}
