import React from 'react';
import '../App.css';

function Contact(){

  return (
    <div className="Contact">
          <h1>contact</h1>
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
      <div className="contactcontainer">
      <div className="contactinfo">
        <h1>Contact Me</h1>
        <p>Let's <span className="highlight">Connect</span>&<span className="highlight">Collabrate</span></p>
        
        <div className="contactdetails">
          <div className="contactitem">
            
            <span>9074235261</span>
          </div>
          <div className="contactitem">
            
            
            <span>anaswaram21@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="contactform">
        <input type="text" placeholder="Your name" />
        <div className="formrow">
          <input type="email" placeholder="Your Email" />
          <input type="number" placeholder="Your Number" />
        </div>
        <input type="" placeholder="Subject" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </div>
    </div>           
      
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

export default Contact;