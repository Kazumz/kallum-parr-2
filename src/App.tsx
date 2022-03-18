import React from 'react';

import Agile from './assets/agile.svg';
import ASP from './assets/asp.svg';
import Git from './assets/git.svg';
import Rct from './assets/react.svg';
import Sass from './assets/sass.svg';
import Sql from './assets/sql.svg';
import TypeScript from './assets/typescript.svg';

import './App.scss';

function App() {
    return (
        <div className="app">
            <main className="app__main">
                <article className="app__business-card">
                    <span className="app_hyphen-divider"/>

                    <span>
                      <h1 className="app__header">Kallum Parr</h1>
                      <p>Lead Software Engineer</p>
                    </span>

                    <span className="app_hyphen-divider"/>
                </article>

                <article className="app__business-card app__business-card--content-card">
                    <section aria-labelledby="tech-list" className="app__business-card-tech">
                        <h2 id="tech-list" className="visually-hidden">Skills</h2>
                        <ul className="app__business-card-tech__list">
                            <img alt="Agile Methodology" className="app__icon" src={Agile}/>
                            <img alt="Microsoft Technologies" className="app__icon" src={ASP}/>
                            <img alt="Git Source Control" className="app__icon" src={Git}/>
                            <img alt="React and Redux" className="app__icon" src={Rct}/>
                            <img alt="CSS and SCSS" className="app__icon" src={Sass}/>
                            <img alt="Database Technologies" className="app__icon" src={Sql}/>
                            <img alt="JavaScript and TypeScript" className="app__icon" src={TypeScript}/>
                        </ul>
                    </section>

                    <div className="app__business-card-content">
                        <div>
                            <h2>Kallum Parr</h2>
                            <p>Mumbles, Swansea</p>
                            <small>(Fully Remote)</small>
                        </div>

                        <hr className="app_vertical-divider"/>

                        <address className="app__contact-info">
                            <a className="app__contact-info app__contact-info--email"
                               href="mailto:kallum_parr@hotmail.com">Email</a>
                            <a className="app__contact-info app__contact-info--mobile"
                               href="tel:+447508787497">Mobile</a>
                            <a className="app__contact-info app__contact-info--github"
                               href="https://github.com/Kazumz">GitHub</a>
                            <a className="app__contact-info app__contact-info--linkedin"
                               href="https://www.linkedin.com/in/kallum-parr-83394465/">LinkedIn</a>
                        </address>
                    </div>
                </article>
            </main>
        </div>
    );
}

export default App;