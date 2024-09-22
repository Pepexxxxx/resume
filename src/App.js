// import logo from './logo.svg';
import './App.css';
import './index.css';


function App() {
  return (
    <div className="App">
      
        <div className="Resume">
          <div className="Header">
            <Header/>
          </div>
          <div className="Content">
            <div className="Contact">
              <Contact/><Education/><Skills/>
            </div>
            <div className="Experience">
              <Experience/>
            </div>
          </div>
        </div>
      
    </div>
  );

}

function Header() {
  return (
    <div>
      <h1>Joe Pete Briola</h1>
      <h3>Web Developer</h3>
    </div>
  );
}

function Contact() {
  return (
    <div >
      <h3>CONTACT</h3>

      <ul>
        <li className="Contact-item">
          briola.joepete@gmail.com
          <span className="material-icons">mail</span>
        </li>

        <li className="Contact-item">
          0967-248-8088
          <span className="material-icons">phone</span>
        </li>

        <li className="Contact-item">
          Mexico, Pampanga 2021
          <span className="material-icons">location_on</span>
        </li>

        <li className="Contact-item">
          <a href='https://www.facebook.com/Pepexxxx'>Facebook</a> 
          <span className="material-icons">facebook</span>
        </li>

        <li className="Contact-item">
          <a href='https://github.com/Pepexxxxx'>Github</a> 
          <span className="material-icons">hub</span>
        </li>
      </ul>
    </div>
    
  );
}

function Education() {
  return (
    <div >
      <h3>EDUCATION</h3>
      <ul>
        <li className="Education-item">
          Bachelor of Science in
        </li>

        <li className="Education-item">
          Information Technology
        </li>

        <li className="Education-item">
          University of the Assumption
        </li>

        <li className="Education-item">
          2023 - Present
        </li>

        <li className="Education-item">
          San Fernando, Pampanga
        </li>
      </ul>
    </div>
    
  );
}

function Skills() {
  return (
    <div >
      <h3>SKILLS</h3>
      <ul>
        <li className="Education-item">
          HTML
        </li>

        <li className="Education-item">
          CSS
        </li>

        <li className="Education-item">
          JavaScript
        </li>

        <li className="Education-item">
          React
        </li>

        <li className="Education-item">
          Python
        </li>

        <li className="Education-item">
          Bootstrap
        </li>

        <li className="Education-item">
          Github
        </li>
      </ul>
    </div>
    
  );
}

function Experience() {
  return (
    <div>
      <h2>WORK EXPERIENCE</h2>

      <h4>Web Developer</h4>
      <h5>TechWave Solutions</h5>
      <h5>January 2023 – Present | Makati City, Philippines </h5>

      <ul className="Experience-item">
        <li>
          Developed and maintained responsive websites using HTML, CSS, JavaScript, and React.
        </li>

        <li>
          Collaborated with cross-functional teams to design and implement new features for client projects.
        </li>

        <li>
          Ensured website optimization for mobile devices, resulting in a 30% increase in mobile traffic.
        </li>

        <li>
          Integrated third-party APIs, improving application functionality and user experience.
        </li>

        <li>
          Conducted code reviews and implemented best practices for version control using Git.
        </li>
      </ul>

      <h4>Front-End Developer</h4>
      <h5>Innovative Web Labs</h5>
      <h5>June 2021 – December 2022 | Quezon City, Philippines</h5>
      <ul className="Experience-item">
        <li>
          Built and optimized user interfaces for web applications using React and Bootstrap.
        </li>

        <li>
          Worked closely with designers to implement visually appealing and functional designs.
        </li>

        <li>
          Improved website performance by optimizing code and utilizing caching techniques.
        </li>

        <li>
          Implemented testing procedures with Jest to ensure high-quality deliverables.
        </li>

        <li>
          Deployed web applications to cloud platforms such as Netlify and Vercel.
        </li>
      </ul>

      <h4>Junior Web Developer</h4>
      <h5>PixelForge Digital</h5>
      <h5>August 2020 – May 2021 | Cebu City, Philippines</h5>
      <ul className="Experience-item">
        <li>
          Assisted in the development and maintenance of e-commerce websites using Shopify and WordPress.
        </li>

        <li>
         Debugged and resolved front-end issues to enhance user experience and functionality.
        </li>

        <li>
          Designed wireframes and prototypes to streamline the development process for client projects.
        </li>
        <li>
          Managed website updates and feature enhancements using Git and version control practices.
        </li>

        <li>
        Collaborated with the marketing team to optimize SEO and improve site ranking.
        </li>
      </ul>
    </div>
  );
}



export default App;
