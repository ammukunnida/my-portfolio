import '../App.css';
function Project() {
    return (
      <div className="Project">
        
        <nav className="nav-bar-container make-sticky">
          <div className="logo-head"><span>Anaswara</span></div>
          <div className="nav-items">
            <div className="item"><a href='/'>Home</a></div>
            <div className="item"><a href='/about'>About</a></div>
            <div className="item"><a href='/project'>Project</a></div>
            <div className="item">Vision</div>
            <div className="item"><a href='/contact'>Contact</a></div>
          </div>
        </nav>
          {/* -- Education item -- */}
          <div className='edu-item flex-box'>
            <h1>PROJECTS</h1>
          <img src='https://www.keralatourism.org/responsible-tourism/static_banner/Village%20Life%20Experience_31082022082718.jpg'className='project-img'></img>
          <div className='about-right'>
          <h1>Village Tourism</h1>
          <p>Our website provides some special features such as tourism spot locating fair charge,taxi availability</p>
           <p> secure stay homes, homely meals etc.Our website more prefer village oriented tourism with less economical features.</p>
          </div>
        </div>
        <div className='edu-item flex-box'>
        <img src='https://www.zippyops.com/api/image-generate-tn-request/28571?finded 'className='project-img'></img>
          <div className='about-right'>
          <h1>Cloud security using hybrid cryptography</h1>
          
          <p>This project proposes a system that aims to enhance cloud security</p>
          <p>through the utilization of hybrid cryptography algorithm.</p>
          </div>
        </div>
        <div className='edu-item flex-box'>
          <h1>INTERNSHIPS</h1>
        <img src=' 'className='project-img'></img>
          <div className='about-right'>
          <h1>Cloud security using hybrid cryptography</h1>
          
          <p>This project proposes a system that aims to enhance cloud security</p>
          <p>through the utilization of hybrid cryptography algorithm.</p>
          </div>
        </div>
        {/* -- end -- */}
        <section class="footer">
      <div class="footer-row">
      <div class="footer-col">
          <h4>Anaswara M A</h4>
          <p>
            Graduated from Kerala University.
          </p>
          <div class="icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-github"></i>
          </div>
        </div>
        <div class="footer-col">
          <h4>Info</h4>
           <ul class="links">
            <li><a href="#">Home Page</a></li>
            <li><a href="#">About Page</a></li>
            <li><a href="#">Vision Page</a></li>
            <li><a href="#">Projects Page</a></li>
            <li><a href="#">Contact Page</a></li>
          </ul> 
        </div>
        <div class="footer-col">
          <h4>Projects</h4>
          <ul class="links">
            <li><a href="#">Cloud security using hybrid cryptography</a></li>
            <li><a href="#">Village Tourism Website</a></li>
            
          </ul>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <ul class="links">
            <li><a href="#">Mobile : +91 9074235261</a></li>
            <li><a href="#">anaswaram21@gmail.com</a></li>
            
          </ul>
        </div>
        
      </div>
      </section>
        </div>
    );

    
}

export default Project;