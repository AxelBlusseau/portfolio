import React from 'react';
import './portfolio.css'
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg"
import IMG3 from "../../assets/portfolio3.jpg"
import IMG4 from "../../assets/portfolio4.jpg"

const datas = [
    {
        image: IMG1,
        title: "My Super Projet",
        github: "https://github.com",
        demo: "https://dribbble.com/Alien_pixels"
    },
    {
        image: IMG2,
        title: "My Super Projet",
        github: "https://github.com",
        demo: "https://dribbble.com/Alien_pixels"
    },
    {
        image: IMG3,
        title: "My Super Projet",
        github: "https://github.com",
        demo: "https://dribbble.com/Alien_pixels"
    },
    {
        image: IMG4,
        title: "My Super Projet",
        github: "https://github.com",
        demo: "https://dribbble.com/Alien_pixels"
    },
]

const Portfolio = () => {
        return (
            <section id="portfolio">
                <h5>My Recent Work</h5>
                <h2>Portfolio</h2>

                <div className="container portfolio__container">

                    {
                        datas.map(({ image, title, github, demo}, index) => {
                            return (
                                <article key={index} className="portfolio__item">
                                    <div className="portfolio__item-image">
                                        <img src={image} alt={title} />
                                    </div>

                                    <h3>{title}</h3>

                                    <div className="portfolio__item-cta">
                                        <a href={github} className="btn">Github</a>
                                        <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                                    </div>
                                </article>
                            )
                        })
                    }

                </div>
            </section>
        );
}

export default Portfolio;