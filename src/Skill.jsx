import LogoLoop from './LogoLoop';
import { SiReact, SiTypescript, SiTailwindcss, SiJavascript,SiHtml5,SiCss3, SiPython,SiDjango, SiMysql,SiBootstrap } from 'react-icons/si';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiJavascript />, title: "javascript", href: "https://www.javascript.com" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  {node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" }, 
  { node: <SiHtml5 />, title: "HTML", href: "https://html.com" },
  { node: <SiCss3 />, title: "CSS", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { node: <SiPython />, title: "Python", href: "https://www.python.org" },
  { node: <SiDjango />, title: "Django", href: "https://www.djangoproject.com" },
  { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
  { node: <SiBootstrap />, title: "Bootstrap", href: "https://getbootstrap.com" },
 

];


// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];



function Skill(){
    return(
        <>
      <section id="skills" className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">My Skills</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <h5 className="fw-semibold text-dark">Web Technologies</h5>
              {["HTML", "CSS", "JavaScript", "React", "Bootstrap", "PHP"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="badge bg-dark me-2 mb-2"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
            <div className="col-md-4 mb-4">
              <h5 className="fw-semibold text-dark">Programming</h5>
              {["Java", "C", "Python"].map((lang) => (
                <span key={lang} className="badge bg-primary me-2 mb-2">
                  {lang}
                </span>
              ))}
            </div>
            <div className="col-md-4 mb-4">
              <h5 className="fw-semibold text-dark">Database & Tools</h5>
              {["MySQL", "Excel", "PowerPoint"].map((tool) => (
                <span key={tool} className="badge bg-success me-2 mb-2">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="log" style={{ height: '100px', position: 'relative', overflow: 'hidden'}}>
  
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction="left"
        logoHeight={48}
        gap={90}
        pauseOnHover
        scaleOnHover
        fadeOut
        
        ariaLabel="Technology partners"
      />
      
    </div>



      
      </>
    );
}
export default Skill;