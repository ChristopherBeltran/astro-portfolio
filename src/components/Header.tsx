import React from 'react'
import { HeaderProps } from '../types'

const text = '< / >'

const Header: React.FC<HeaderProps> = ({ onOpenArticle, timeout }) => (
  <header id="header" style={timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <span className='icon'><b>{text}</b></span>
    </div>
    <div className="content">
      <div className="inner">
        <h1>Christopher Beltran</h1>
        <p>
          Full Stack Engineer
          <br></br>

        </p>
      </div>
    </div>
    <nav>
      <ul style={{ alignItems: 'center' }}>
        <li>
          <button
            onClick={() => {
              onOpenArticle('about')
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onOpenArticle('projects')
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onOpenArticle('stack')
            }}
          >
            Stack
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header
