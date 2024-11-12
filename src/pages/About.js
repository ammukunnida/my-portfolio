import logo from '../logo.svg';
import '../App.css';


function About() {
  return (
    <div className="About">

      
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
      <section className='education'>
        <h1> About Me</h1>
        <img src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='about-img'></img>
        <p className='about-p'> I am a passionate  front-end developer  with a focus on building clean, responsive, and user-friendly websites and web applications.</p>
         
        
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
        <div className='edu-item flex-box'>
          <h1> SKILLS</h1>
          <img src='https://verpex.com/assets/uploads/images/blog/Basic-HTML-Codes-for-Websites.webp?v=1691760654' className='about-img'></img>
          <div className='about-right'>
          <h2> HTML</h2>
     
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