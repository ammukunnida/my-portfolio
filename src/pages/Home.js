import logo from '../logo.svg';
import '../App.css';

function Home() {
  return (
    <div className="App">
    <nav className="nav-bar-container make-sticky">
        <div className="logo-head"><span>Anaswara</span></div>
        <div className="nav-items">
        <div className="item"><a href='/'>Home</a></div>
        <div className="item"><a href='/about'>About</a></div>
          <div className="item">Projects</div>
          <div className="item">Vision</div>
          <div className="item"><a href='/contact'>Contact</a></div>
        </div>
      </nav>
      <section className="hero">
        <div className="hero-container">
        <img src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img> 
         <div className="l-item">
          <h1>I'm Anaswara M A</h1>
          <h2>I'm an <span>Android Developer</span></h2>
          <p>I'm dedicated in building intuitive and high-performance mobile applications. With a deep understanding of Android frameworks and a passion for crafting seamless user experiences. With a deep understanding of Android frameworks and a passion for crafting seamless user experiences.</p>
          <a href="#">My Resume</a>
        </div>
        </div>
        </section>
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

export default Home;