import React, {useState} from "react"
import './styles/styles.scss'
import Header from './components/Header'
import Project from './components/Project'
import webDev from "./images/web-development.svg"
import multiscreen from "./images/multiscreen.svg"
import sketch from "./images/sketch.svg"

import {projects, onGoingProjects} from "./data/Projects"
import Footer from "./components/Footer"
import {FaHtml5, FaNodeJs, FaReact, FaSass} from "react-icons/fa"
import {IoLogoCss3, IoLogoJavascript} from "react-icons/io5"

function App() {
  const [menuActive, setMenuActive] = useState(false)
  const onClickMenuLink = () => setMenuActive(!menuActive)

  return (
    <div className="App">
      <div className={`menu__activation-anim-elt ${menuActive? "menu__activation-anim-elt--active" : ""}`}></div>
      <nav className={`menu ${menuActive? "menu--active" : ""}`}>
        <ul className="menu__links-container">
          <li className="menu__link">
              <span>01</span>
              <a href="#hero" onClick={onClickMenuLink}>Accueil</a>
          </li>
          <li className="menu__link">
              <span>02</span>
              <a href="#about" onClick={onClickMenuLink}>À Propos</a>
          </li>
          <li className="menu__link">
              <span>03</span>
              <a href="#projects" onClick={onClickMenuLink}>Portfolio</a>
          </li>
          <li className="menu__link">
              <span>04</span>
              <a href="#footer" onClick={onClickMenuLink}>Contact</a>
          </li>
        </ul>
      </nav>
      <Header menuActive={menuActive} setMenuActive={setMenuActive}/>

      <section id="hero" className="hero">
        <div className="hero__content">
          <h1>Bonjour, je m'appelle Rémi !</h1>
          <h2>Je suis développeur Web Front-End.</h2>
          <a className="btn btn--cta hero__cta" href="#projects">Voir mon travail</a>
        </div>
      </section>

      <section id="about" className="about">
        <div className="about__cards-container">
          <div className="about-card">
            <img className="about-card__icon" src={webDev} width="72px" height="72px" alt="web developer" />
            <p className="about-card__description">
              Passionné par le Front-End, je développe des applications web et mobile dynamiques et esthétiques.
            </p>
          </div>
          <div className="about-card">
            <img className="about-card__icon" src={multiscreen} width="72px" height="72px" alt="responsive design" />
            <p className="about-card__description">
              J'ai à coeur de créer des sites web Responsive, Mobile-Friendly et qui respectent les normes SEO.
            </p>
          </div>
          <div className="about-card">
            <img className="about-card__icon" src={sketch} width="72px" height="72px" alt="sketch" />
            <p className="about-card__description">
              Je m'intéresse aussi au Back-End,
              à l'UX/UI et au Web Design pour construire des applications complètes.
            </p>
          </div>
        </div>

        <div className="skillset">
          <div className="skillset__heading">
            <h2>Compétences</h2>
            <p>Voici les langages et frameworks que j'utilise au quotidien. Je peux également m'adapter à d'autres outils.</p>
          </div>
          <div className="skillset__skill-cards-container">
            <div className="skillset__skill-card skillset__skill-card--html">
              <FaHtml5 />
              <h3>HTML</h3>
            </div>
            <div className="skillset__skill-card skillset__skill-card--css">
              <IoLogoCss3 />
                <h3>CSS</h3>
            </div>
            <div className="skillset__skill-card skillset__skill-card--javascript">
              <IoLogoJavascript />
              <h3>Javascript</h3>
            </div>
            <div className="skillset__skill-card skillset__skill-card--nodejs">
              <FaNodeJs />
              <h3>NodeJS</h3>
            </div>
            <div className="skillset__skill-card skillset__skill-card--react">
              <FaReact />
              <h3>React</h3>
            </div>
            <div className="skillset__skill-card skillset__skill-card--sass">
              <FaSass/>
              <h3>Sass</h3>
            </div>
          </div>
        </div>
      </section>
      
      <section id="projects" className="projects">
        <div className="projects__main-heading">
          <h2>Projets</h2>
          <p>
            Voici mes projets les plus récents. Vous pouvez retrouver le reste de mon travail sur mon profil Github.
          </p>
        </div>
        <div className="projects__main-content">
          {projects.map(project => {
            return(
              <Project
                title={project.title}
                subtitle={project.subtitle}
                overview={project.overview}
                stack={project.stack}
                github={project.github}
                url={project.url}
                ready={project.ready}/>
            )
          })}
        </div>
        <div className="projects__soon-heading">
          <h2>À Venir</h2>
          <p>
            Les projets ci-dessous sont ce sur quoi je travaille à l'heure actuelle.
            Ils sont encore en développement et seront mis en ligne dans les prochains jours.
          </p>
        </div>
        <div className="projects__soon-content">
          {onGoingProjects.map(project => {
            return (<Project
                      title={project.title}
                      subtitle={project.subtitle}
                      overview={project.overview}
                      stack={project.stack}/>
                    )}
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
