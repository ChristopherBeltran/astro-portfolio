import type { HeaderProps } from '../types'

const Header = ({ onOpenArticle, timeout }: HeaderProps) => (
  <header id="header" style={timeout ? { display: 'none' } : {}}>
    <div className="logo">
      <img src="/images/portfolio-logo.png" alt="Logo" />
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
