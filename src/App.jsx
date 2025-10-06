import ProjectCard from "./components/ProjectCard/ProjectCard";
import SpecialCard from "./components/CMCLicense/CMCLicense";
import ContactCard from "./components/Contacts/Contacts";
import Header from "./components/Header/Header";

import { projects } from "./data/Projects";
import { contacts } from "./data/Contacts";

import style from "./components/Contacts/Contacts.module.css";


function App() {

  return (
    <div className="content">
      {/* HEADER */}
      
      <Header />

      {/* MAIN */}
      <main className="main-content">
        {/* Me */}
        <section id="me" className="about-me">
          <div className="my-photo"><img src="https://github.com/UncleUrRaikov/interactive-cv/blob/main/images/me.png" alt="Photo" /></div>
          <div className="my-discription">
            <p id="name">Hello! Hello! i'm Uncle RaikoV</p>
            <p id="discription">and there is discription</p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="sections">my projects</h2>
          <div className="projects-block">
            
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                description={p.description}
                image={p.image}
              />
            ))}
             
          </div>
        </section>
        {/* Special Card */}
        <section id="card" className="CMCLicense">     
          <SpecialCard />
        </section>
        {/* Contact */}
        <section id="contacts">
          <h2 className="sections">my contact</h2>
          <div className={style.contactBlock}>
            {contacts.map((c) => (
              <ContactCard
                key={c.id}
                url={c.url}
                platform={c.platform}
                icon={c.icon}
              />
            ))}
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer-place">
        <p>© 2024 Sam Nachos. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

