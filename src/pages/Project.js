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
          <img src='https://www.istockphoto.com/photo/man-taking-photo-at-tea-plantations-gm949396238-259169448'></img>
          <div className='about-right'>
          <h1>Village Tourism</h1>
          <h2>MSc. Computer Science (2024 - Present)</h2>
          <p>I am currently doing my Post Graduation in Computer Science from Karyavattam Campus, Trivandrum</p>
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