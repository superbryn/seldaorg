import { useRef } from 'react';
import Textcard from './cards/Textcard';
import './homepage.css'
import BgVid from './assets/bgVid.mp4'
import { useNavigate } from 'react-router-dom';
import { FaTwitter, FaGithub, FaLinkedin, } from 'react-icons/fa';

function Homepage() {
  const navigator = useNavigate();
  const sectionTwoRef = useRef(null);
  const sectionThreeRef = useRef(null);

  const scrollToSectionTwo = () => {
    if (sectionTwoRef.current) {
      sectionTwoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSectionThree = () => {
    if (sectionThreeRef.current) {
      sectionThreeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToSelda = () => {
    navigator('/selda')
  }
 
  return (
    <>
    {/* lemme start this project by sayin fuldge off fish miss */}

      <div className="container">

        <section className="sectionOne">
          
        <video className="backgroundVid" autoPlay loop muted playsInline>
            <source src={BgVid} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <div className="vignette"></div> {/* Add this line for the vignette effect */}

        <header className="header"> 
          <div className="title">
            <p>SELDA</p>
          </div>
          <nav className="navbar">
            <button onClick={() => window.scrollTo(0, 0)}>Home</button>
            <button onClick={scrollToSectionTwo}>About Us</button>
            <button onClick={scrollToSectionThree}>Contact Us</button>
          </nav>
        </header>

        <div className="line"></div>
        <div className="introduction">
          <h2>Have A Try</h2>
          <p>Break Your Barriers</p>
          <button className="rectangle" onClick={navigateToSelda}>Try Now</button>
        </div>

        </section>
        
        <div className="sectionBlue">
        <Textcard  className="textcard"/>
        </div>

        <div className="sectionTwo" ref={sectionTwoRef}>
          <h2>About</h2>
        </div>
      
        
        <footer className='sectionThree' ref={sectionThreeRef}>
          <a href="https://github.com/superbryn/SeldaByPGT" target='_blank' rel='noopener noreferrer'><FaGithub/></a>
          <a href="https://linkedin.com" target='_blank' rel='noopener noreferrer'><FaLinkedin/></a>
          <a href="https://x.com" target='_blank' rel='noopener noreferrer'><FaTwitter/></a>
        </footer>
      </div>
    </>
  );
}

export default Homepage;
