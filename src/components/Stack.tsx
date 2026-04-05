const stackCategories = [
  {
    title: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
      { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
      { name: 'Ruby', icon: 'devicon-ruby-plain colored' },
      { name: 'HTML', icon: 'devicon-html5-plain colored' },
      { name: 'CSS', icon: 'devicon-css3-plain colored' },
      { name: 'GraphQL', icon: 'devicon-graphql-plain colored' },
    ],
  },
  {
    title: 'Frameworks & Libraries',
    items: [
      { name: 'React', icon: 'devicon-react-original colored' },
      { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
      { name: 'Rails', icon: 'devicon-rails-plain colored' },
      { name: 'Sinatra', icon: 'devicon-ruby-plain colored' },
      { name: 'Redux', icon: 'devicon-redux-original colored' },
      { name: 'Astro', icon: 'devicon-astro-plain colored' },
      { name: 'jQuery', icon: 'devicon-jquery-plain colored' },
      { name: 'Vite', icon: 'devicon-vitejs-plain colored' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
      { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
      { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
      { name: 'Elasticsearch', icon: 'devicon-elasticsearch-plain colored' },
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      { name: 'AWS', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
      { name: 'Firebase', icon: 'devicon-firebase-plain colored' },
      { name: 'Heroku', icon: 'devicon-heroku-original colored' },
      { name: 'Docker', icon: 'devicon-docker-plain colored' },
      { name: 'LocalStack', icon: 'devicon-amazonwebservices-plain-wordmark colored' },
      { name: 'GitHub Actions', icon: 'devicon-githubactions-plain colored' },
    ],
  },
  {
    title: 'Testing',
    items: [
      { name: 'Jest', icon: 'devicon-jest-plain colored' },
      { name: 'Selenium', icon: 'devicon-selenium-original colored' },
      { name: 'Cypress', icon: 'devicon-cypressio-plain' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: 'devicon-git-plain colored' },
      { name: 'GitHub', icon: 'devicon-github-original' },
      { name: 'Postman', icon: 'devicon-postman-plain colored' },
      { name: 'ESLint', icon: 'devicon-eslint-plain colored' },
      { name: 'Copilot', icon: 'devicon-github-original' },
      { name: 'PagerDuty', icon: 'fa fa-bell' },
    ],
  },
]

const Stack = () => (
  <div id="stack">
    <p>
      Here are some of the technologies I work with.
    </p>
    <hr />
    {stackCategories.map((category) => (
      <div key={category.title} style={{ marginBottom: '1.5rem' }}>
        <h4 style={{ marginBottom: '0.75rem' }}>{category.title}</h4>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
          }}
        >
          {category.items.map((item) => (
            <div
              key={item.name}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '5rem',
              }}
            >
              <i className={item.icon} style={{ fontSize: '2.5rem' }}></i>
              <span style={{ fontSize: '0.7rem', marginTop: '0.35rem', textAlign: 'center' }}>
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
)

export default Stack
