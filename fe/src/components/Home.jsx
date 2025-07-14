import '../styles/Home.css';
import heroImage from '../assets/hero.png';
import activityImage from '../assets/depresn.png';
import anxietyImage from '../assets/anxiety.png';
import relaxImage from '../assets/heart.png';
import journal from '../assets/journal.png';
import anger from '../assets/anger.png';
import ai from '../assets/ai.jpg'

import { useNavigate } from "react-router-dom";

const Home = () => {
   const navigate = useNavigate();

    const handleImageClick = () => {
    navigate("/journal");
  };

   const handleImageAI = () => {
    navigate("/AI");
  };

  const handlelearn = () => {
    navigate("/Login");
  };
  return (
    <div className="home">
      {/* Hero Section */}
      <div className="hero-section">
        <img src={heroImage} alt="hero" />
        <div className="hero-text">
          <h1>A JOURNEY TO</h1>
          <h1>MENTAL WELLNESS</h1>
          <button>TAKE A MENTAL HEALTH TEST</button>
        </div>
      </div>

      {/* Activity & Chatbot Section */}
      <div className="activity-chatbot">
        <div>
          <img src={journal} alt="journal"  onClick={handleImageClick}/>
          <h2 className='active'>JOURNAL</h2>
        </div>
        <div>
          <h1 className='chat1'>Track Your Daily Activity</h1>
          {/* <button>JOURNAL</button> */}
        </div>
      </div>
      {/* {AI chat} */}
       <div className="activity-ai">
        <div>
          <img src={ai} alt="ai"  onClick={handleImageAI} />
        </div>
        <div className='active'>
          <h1 >ChatBot</h1>
          <h1 > Chat with our </h1>
          <button  onClick={handleImageAI}>ACTIVITY</button>
        </div>
      </div>


      {/* Common Issues */}
      <div className="issues-section">
        <h2>-ISSUES-</h2>
        <h1>COMMON MENTAL HEALTH ISSUES WE IDENTIFY</h1>
        <div className="issues-container">
          <div className='anx1'>
            <img src={anxietyImage} alt="anxiety" />
            <p>Anxiety</p>
          </div>
          <div className='anx2'>
            <img src={activityImage} alt="depression" />
            <p>Depression</p>
          </div>
          <div className='anx3'>
            <img src={anger} alt="anger" />
            <p>Anger Issues</p>
          </div>
        </div>
        <button onClick={handlelearn}>LEARN MORE</button>
      </div>

      {/* Relax Section */}
      <div className="relax-section">
        <div>
          <h2>READY TO RELAX , AND LET</h2>
          <h2>YOURSELF GROW</h2>
          <p>
            Dhyana is a user-friendly mental health website designed to provide support, resources,
            and guidance to individuals struggling with mental health challenges.
          </p>
        </div>
        <div>
          <h3 className='relax1'>#STAYHEALTHY</h3>
          <img src={relaxImage} alt="relax" />
          <p className="highlight">FREE MENTAL HEALTH TEST</p>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div>
          <h3>DHYANA</h3>
          <p>
            Your Path to Mental Wellness. Discover a sanctuary of support and guidance where you can
            explore mindfulness techniques, access resources for managing stress and anxiety, and
            connect with a community dedicated to nurturing mental health.
          </p>
        </div>
        <div>
          <p>About | FAQs | Services | Support</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
