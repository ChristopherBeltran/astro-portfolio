import Stack from './Stack'
import type { MainProps } from '../types'

const Main = ({ article, articleTimeout, timeout, onCloseArticle, setWrapperRef }: MainProps) => {
  const close = (
    <div
      className="close"
      onClick={() => {
        onCloseArticle()
      }}
    ></div>
  )

  return (
    <div
      ref={setWrapperRef}
      id="main"
      style={
        timeout
          ? {
              display: 'flex',
            }
          : {
              display: 'none',
            }
      }
    >
        <article
          id="about"
          className={`${article === 'about' ? 'active' : ''} ${
            articleTimeout ? 'timeout' : ''
          }`}
          style={{
            display: 'none',
          }}
        >
          <h2 className="major"> About </h2>
          <p>
            Hi, I 'm Chris Beltran <span role="img">👋🏼</span>, a Full Stack
            Software Engineer located in Denver, CO. I have over 10 years of
            experience in the tech industry, filling various roles within
            Quality Assurance. After graduating from Flatiron Schools software
            engineering bootcamp in 2019, I slowly started my crossover to the
            development side, taking on a few automation engineering roles,
            before landing my current role as a fullstack engineer.{' '}
          </p>{' '}
          {close}{' '}
        </article>
        <article
          id="projects"
          className={`${article === 'projects' ? 'active' : ''} ${
            articleTimeout ? 'timeout' : ''
          }`}
          style={{
            display: 'none',
          }}
        >
          <h2 className="major"> Projects </h2>
          <p>
            {' '}
            While at Flatiron Schools Software Engineering bootcamp, I worked on
            various projects. After completing the bootcamp, I fine-tuned these
            projects with enhanced features and I' m continuing to develop more.{' '}
          </p>{' '}
          <hr />
          <h3 className="major">Job Bot </h3>{' '}
          <p>
            Job search app that allows the user to trigger and view results of
            automated job searches on major job search engines{' '}
            <span className="image main">
              <img
                src={
                  '/images/jobScraper.jpg'
                }
                alt=""
              />
              <br />{' '}
              <ul
                className="icons"
                style={{
                  textAlign: 'center',
                }}
              >
                <li>
                  <a
                    href="https://github.com/ChristopherBeltran/job-scraper"
                    className="icon fa-github"
                    style={{
                      float: 'left',
                    }}
                  ></a>{' '}
                  <p
                    style={{
                      display: 'inline',
                    }}
                  >
                    <b
                      style={{
                        paddingLeft: '10px',
                      }}
                    >
                      {' '}
                      Stack:{' '}
                    </b>{' '}
                    Javascript, React, Node.js, Puppeteer, Cheerio, Ant Design{' '}
                  </p>{' '}
                </li>{' '}
                <li></li>{' '}
              </ul>{' '}
            </span>{' '}
          </p>{' '}
          <hr />
          <h3 className="major">Stash App </h3>{' '}
          <p>
            News aggregate app allowing users to curate a custom news page and
            save articles.{' '}
            <span className="image main">
              <img
                src={
                  '/images/stashapp.jpg'
                }
                alt=""
              />
              <br />{' '}
              <ul
                className="icons"
                style={{
                  textAlign: 'center',
                }}
              >
                <li>
                  <a
                    href="https://github.com/ChristopherBeltran/stash-app-client"
                    className="icon fa-github"
                    style={{
                      float: 'left',
                    }}
                  ></a>{' '}
                  <a
                    href="https://stashapp.herokuapp.com/"
                    className="icon fa-external-link"
                    style={{
                      float: 'left',
                      marginLeft: '0px',
                    }}
                    target="_blank"
                  ></a>{' '}
                  <p
                    style={{
                      display: 'inline',
                    }}
                  >
                    <b
                      style={{
                        paddingLeft: '10px',
                      }}
                    >
                      {' '}
                      Stack:{' '}
                    </b>{' '}
                    Javascript, React, Rails API, Material-UI{' '}
                  </p>{' '}
                </li>{' '}
                <li></li>{' '}
              </ul>{' '}
            </span>{' '}
          </p>{' '}
          <hr />
          <h3 className="major">Pawsitive Outreach </h3>{' '}
          <p>
            Mock pet adoption platform with Omniauth social login and admin
            backdoor login.{' '}
            <span className="image main">
              <img
                src={
                  '/images/pawsitive.jpg'
                }
                alt=""
              />
              <br />{' '}
              <ul
                className="icons"
                style={{
                  textAlign: 'center',
                }}
              >
                <li>
                  <a
                    href="https://github.com/ChristopherBeltran/pawsitive_outreach"
                    className="icon fa-github"
                  ></a>{' '}
                  <p
                    style={{
                      display: 'inline',
                    }}
                  >
                    <b
                      style={{
                        paddingLeft: '10px',
                      }}
                    >
                      {' '}
                      Stack:{' '}
                    </b>{' '}
                    Javascript, Rails, Bootstrap{' '}
                  </p>{' '}
                </li>{' '}
              </ul>{' '}
            </span>{' '}
          </p>{' '}
          <hr />
          <h3 className="major">Concert Scrapbook </h3>{' '}
          <p>
            Application for a user to log concerts they 've attended,
            demonstrating complex database relationships.{' '}
            <span className="image main">
              <img
                src={
                  '/images/concert.jpg'
                }
                alt=""
              />
              <br />{' '}
              <ul
                className="icons"
                style={{
                  textAlign: 'center',
                }}
              >
                <li>
                  <a
                    href="https://github.com/ChristopherBeltran/concert-scrapbook"
                    className="icon fa-github"
                  ></a>{' '}
                  <a
                    href="https://concert-scrapbook.herokuapp.com"
                    className="icon fa-external-link"
                    style={{
                      float: 'left',
                      marginLeft: '10px',
                    }}
                    target="_blank"
                  ></a>{' '}
                  <p
                    style={{
                      display: 'inline',
                    }}
                  >
                    <b
                      style={{
                        paddingLeft: '10px',
                      }}
                    >
                      {' '}
                      Stack:{' '}
                    </b>{' '}
                    Ruby, Sinatra, Bootstrap{' '}
                  </p>{' '}
                </li>{' '}
              </ul>{' '}
            </span>{' '}
          </p>{' '}
          <hr />
          <h3 className="major">Fantasy Projections </h3>{' '}
          <p>
            A Command Line Interface program that scrapes the Fantasy Pros
            website and provides the user with their projected stats.{' '}
            <span className="image main">
              <img
                src={'/images/fantasy.jpg'}
                alt=""
              />
              <br />{' '}
              <ul
                className="icons"
                style={{
                  textAlign: 'center',
                }}
              >
                <li>
                  <a
                    href="https://github.com/ChristopherBeltran/fantasy-projections"
                    className="icon fa-github"
                  ></a>{' '}
                  <p
                    style={{
                      display: 'inline',
                    }}
                  >
                    <b
                      style={{
                        paddingLeft: '10px',
                      }}
                    >
                      {' '}
                      Stack:{' '}
                    </b>{' '}
                    Ruby{' '}
                  </p>{' '}
                </li>{' '}
              </ul>{' '}
            </span>{' '}
          </p>{' '}
          <hr />
          {close}{' '}
        </article>
        <article
          id="stack"
          className={`${article === 'stack' ? 'active' : ''} ${
            articleTimeout ? 'timeout' : ''
          }`}
          style={{
            display: 'none',
          }}
        >
          <h2 className="major"> Stack </h2> <Stack /> {close}{' '}
        </article>
        <article
          id="contact"
          className={`${article === 'contact' ? 'active' : ''} ${
            articleTimeout ? 'timeout' : ''
          }`}
          style={{
            display: 'none',
          }}
        >
          <h2 className="major"> Contact </h2>{' '}
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/christopherbeltran24/"
                className="icon fa-linkedin"
              >
                <span className="label"> LinkedIn </span>{' '}
              </a>{' '}
            </li>{' '}
            <li>
              <a
                href="https://github.com/ChristopherBeltran"
                className="icon fa-github"
              >
                <span className="label"> GitHub </span>{' '}
              </a>{' '}
            </li>{' '}
            <li>
              <a
                href="mailto:christod.beltran@gmail.com"
                className="icon fa-google"
              >
                <span className="label"> GMail </span>{' '}
              </a>{' '}
            </li>{' '}
          </ul>{' '}
          {close}{' '}
        </article>{' '}
      </div>
    )
}

export default Main
