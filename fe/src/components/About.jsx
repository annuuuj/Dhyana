import React, { useState } from 'react';
import '../styles/AboutUs.css';

// Dummy useToast hook for demonstration purposes (not strictly needed for About Us, but kept for consistency)
const useToast = () => {
    const [toastMessage, setToastMessage] = useState(null);
    const toast = ({ title, description }) => {
        setToastMessage({ title, description });
        setTimeout(() => setToastMessage(null), 3000);
    };
    return { toast, toastMessage };
};

const About = () => {
    const { toastMessage } = useToast(); // Using the dummy useToast for consistency

    return (
        <div className="about-us-container">
            {/* Header - Reusing structure from previous UI (simplified for this page) */}
    

            {/* Main Content Area */}
            <main className="about-us-main">
                <section className="about-section hero-section">
                    <h1 className="about-title">Empowering Your Journey to Inner Peace</h1>
                    <p className="about-description">
                        At Dhyana Web, we believe that mental wellness is a fundamental right. We are dedicated to providing accessible, compassionate, and effective support to help you navigate life's challenges and cultivate a healthier mind.
                    </p>
                </section>

                <section className="about-section mission-values-section">
                    <div className="mission-vision">
                        <h2 className="section-heading">Our Mission & Vision</h2>
                        <p className="section-text">
                            <strong>Mission:</strong> To democratize mental wellness support by offering a safe, intuitive, and comprehensive platform where individuals can find understanding, resources, and professional guidance tailored to their unique needs.
                        </p>
                        <p className="section-text">
                            <strong>Vision:</strong> A world where mental well-being is prioritized, and everyone has the tools and support to lead a fulfilling and balanced life.
                        </p>
                    </div>

                    <div className="our-values">
                        <h2 className="section-heading">Our Core Values</h2>
                        <ul className="values-list">
                            <li><strong>Empathy:</strong> We approach every interaction with understanding and compassion.</li>
                            <li><strong>Accessibility:</strong> We strive to make mental wellness resources available to everyone, everywhere.</li>
                            <li><strong>Confidentiality:</strong> Your privacy and trust are paramount to us.</li>
                            <li><strong>Empowerment:</strong> We equip you with knowledge and tools to take control of your well-being.</li>
                            <li><strong>Growth:</strong> We are committed to continuous learning and improvement in mental health support.</li>
                        </ul>
                    </div>
                </section>

              

                <section className="about-section approach-section">
                    <h2 className="section-heading">Our Approach to Mental Wellness</h2>
                    <p className="section-text">
                        We offer a multi-faceted approach, combining AI-powered insights with human expertise. Our platform provides:
                    </p>
                    <ul className="approach-list">
                        <li>Personalized content and exercises based on your needs.</li>
                        <li>A safe space to articulate feelings and challenges.</li>
                        <li>Connections to vetted mental health specialists and resources.</li>
                        <li>Tools for self-reflection and progress tracking.</li>
                    </ul>
                </section>

                <section className="about-section cta-section">
                    <h2 className="section-heading">Ready to Start Your Journey?</h2>
                    <p className="section-text">
                        Whether you're looking for guidance, support, or just a safe space to share, we're here for you.
                    </p>
                  
                </section>
            </main>

            {/* Toast Message Display */}
            {toastMessage && (
                <div className="toast-message">
                    <strong>{toastMessage.title}</strong>
                    <p>{toastMessage.description}</p>
                </div>
            )}

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

export default About;
