import logo from '../logo.svg';
import '../App.css';


function About() {
  return (
    <div className="About">

      <h1>about page</h1>
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
      <section className='education'>
        <h1>Educational Qualifications</h1>

        
        <div className='edu-item flex-box'>
        <img src='https://d2lk14jtvqry1q.cloudfront.net/media/large_University_of_Kerala_Kerala_University_96cd13928f_5c26665bba.png'></img>
          <div className='about-right'>
          <h1>University of Kerala</h1>
          <h2>MSc. Computer Science (2024 - Present)</h2>
          <p>I am currently doing my Post Graduation in Computer Science from Karyavattam Campus, Trivandrum</p>
          </div>
        </div>
        
         
         <div className='edu-item flex-box'>
         <img src='https://d2lk14jtvqry1q.cloudfront.net/media/large_University_of_Kerala_Kerala_University_96cd13928f_5c26665bba.png'></img>
          <div className='about-right'>
          <h1>University of Kerala</h1>
          <h2>BSc. Computer Science (2021 - 2024)</h2>
          <p>I have completed my Under Graduation in Computer Science from College of Applied Science ,Adoor </p>
          </div>
        </div>
        <div className='edu-item flex-box'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnHLmpRKy66B6fUtScsFNmca1XemBaCwLQbA&s'></img>
          <div className='about-right'>
          <h1> Kerala State Board of Higher Secondary Education</h1>
          <h2>Higher Secondary Education (2021)</h2>
          <p>I have completed my Higher Secondary Education from Government Higher Secondary School, Kalanjoor</p>
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

export default About;