import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';
import axios from 'axios'; // Make sure axios is imported
import '../styles/Talk.css';

// Dummy useToast hook for demonstration purposes.
const useToast = () => {
    const [toastMessage, setToastMessage] = useState(null);

    const toast = ({ title, description }) => {
        setToastMessage({ title, description });
        setTimeout(() => setToastMessage(null), 3000);
    };
    return { toast, toastMessage };
};

const Talk = () => {
    const [formData, setFormData] = useState({
        feelings: [],
        feelingsDescription: '',
        problems: [],
        problemsDescription: '',
        seekingSpecialist: '',
        specialistType: '',
        fullName: '',
        email: '',
        phone: '',
        preferredContact: '',
        availability: '',
        agreePrivacy: false,
        agreeEmergencyDisclaimer: false,
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const { toast, toastMessage } = useToast();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: checked
                ? [...prev[name], value]
                : prev[name].filter(item => item !== value),
        }));
    };

    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleConsentChange = (e) => {
        const { name, checked } = e.target;
        setFormData(prev => ({ ...prev, [name]: checked }));
    };

    const handleSubmit = async (e) => { 
        e.preventDefault();

        if (!formData.fullName || !formData.email) {
            toast({
                title: "Validation Error",
                description: "Please fill in all required contact fields (Full Name, Email).",
            });
            return;
        }
        if (!formData.agreePrivacy || !formData.agreeEmergencyDisclaimer) {
            toast({
                title: "Validation Error",
                description: "Please agree to the Privacy Policy and Emergency Disclaimer.",
            });
            return;
        }

        try {
            // URL for your backend
            const res = await axios.post(
                'http://localhost:5000/api/talk/submit', // THE CHANGE
                formData
            );

            console.log('Form submission successful:', res.data);
            toast({
                title: "Form Submitted!",
                description: "Thank you for reaching out. We will review your message shortly.",
            });
            setIsSubmitted(true);
            // Optionally clear the form 
            setFormData({
                feelings: [],
                feelingsDescription: '',
                problems: [],
                problemsDescription: '',
                seekingSpecialist: '',
                specialistType: '',
                fullName: '',
                email: '',
                phone: '',
                preferredContact: '',
                availability: '',
                agreePrivacy: false,
                agreeEmergencyDisclaimer: false,
            });
        } catch (err) {
            console.error('Error submitting Talk form:', err.response?.data || err.message);
            toast({
                title: "Submission Error",
                description: err.response?.data?.message || "Something went wrong while submitting your request.",
            });
        }
    };

    return (
        <div className="talk-to-us-container">
            {/* Header section (if it exists in your actual layout) */}

            {/* Main Content Area */}
            <main className="talk-to-us-main">
                {/* Images, Thoughts, and Quotes Section */}
                <div className="visual-elements-section">
                    <div className="image-gallery">
                        <img src="https://placehold.co/400x250/b5e8b5/000000?text=Calm+Mind" alt="Calm Mind" className="wellness-image" />
                        <img src="https://placehold.co/400x250/b5e8b5/000000?text=Positive+Outlook" alt="Positive Outlook" className="wellness-image" />
                        <img src="https://placehold.co/400x250/b5e8b5/000000?text=Support+System" alt="Support System" className="wellness-image" />
                    </div>
                    <div className="quotes-section">
                        <p className="quote">"The greatest wealth is health." - Virgil</p>
                        <p className="quote">"You are not alone. Your feelings are valid."</p>
                        <p className="quote">"Every step forward, no matter how small, is progress."</p>
                    </div>
                </div>

                <div className="form-section-wrapper">
                    <h1 className="section-title">We're Here to Listen</h1>
                    <p className="section-description">
                        Taking the first step can be brave. Please use the form below to share what's on your mind.
                        This helps us understand how best to support you. All information is kept confidential.
                    </p>

                    <form onSubmit={handleSubmit} className="talk-to-us-form">
                        {/* Section 1: How Are You Feeling? */}
                        <div className="form-group">
                            <label className="form-label">How have you been feeling lately? (Select all that apply or describe)</label>
                            <div className="checkbox-group">
                                {['Anxious', 'Stressed', 'Sad', 'Overwhelmed', 'Exhausted', 'Numb'].map(feeling => (
                                    <label key={feeling} className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            name="feelings"
                                            value={feeling}
                                            checked={formData.feelings.includes(feeling)}
                                            onChange={handleCheckboxChange}
                                            className="checkbox-input"
                                        />
                                        {feeling}
                                    </label>
                                ))}
                            </div>
                            <textarea
                                name="feelingsDescription"
                                placeholder="Please describe your feelings in your own words. (e.g., When did this start? What triggers these feelings?)"
                                value={formData.feelingsDescription}
                                onChange={handleInputChange}
                                rows="4"
                                className="textarea-field"
                            ></textarea>
                        </div>

                        {/* Section 2: What Problems Are You Facing? */}
                        <div className="form-group">
                            <label className="form-label">What specific challenges or problems are you currently facing?</label>
                            <div className="checkbox-group">
                                {['Relationship Issues', 'Work/School Stress', 'Grief/Loss', 'Self-Esteem Issues', 'Major Life Changes', 'Addiction'].map(problem => (
                                    <label key={problem} className="checkbox-label">
                                        <input
                                            type="checkbox"
                                            name="problems"
                                            value={problem}
                                            checked={formData.problems.includes(problem)}
                                            onChange={handleCheckboxChange}
                                            className="checkbox-input"
                                        />
                                        {problem}
                                    </label>
                                ))}
                            </div>
                            <textarea
                                name="problemsDescription"
                                placeholder="How do these problems impact your daily life and reactions? (e.g., Are you withdrawing from activities? Difficulty concentrating? Changes in appetite?)"
                                value={formData.problemsDescription}
                                onChange={handleInputChange}
                                rows="4"
                                className="textarea-field"
                            ></textarea>
                        </div>

                        {/* Section 3: Seeking Professional Support? */}
                        <div className="form-group">
                            <label className="form-label">Are you currently seeking professional support, or would you like to explore options for working with a specialist?</label>
                            <div className="radio-group">
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="seekingSpecialist"
                                        value="yes"
                                        checked={formData.seekingSpecialist === 'yes'}
                                        onChange={handleRadioChange}
                                        className="radio-input"
                                    />
                                    Yes, I'm interested in connecting with a specialist.
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="seekingSpecialist"
                                        value="considering"
                                        checked={formData.seekingSpecialist === 'considering'}
                                        onChange={handleRadioChange}
                                        className="radio-input"
                                    />
                                    I'm considering it, but not sure yet.
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="seekingSpecialist"
                                        value="no"
                                        checked={formData.seekingSpecialist === 'no'}
                                        onChange={handleRadioChange}
                                        className="radio-input"
                                    />
                                    No, I'm just looking for information/resources for now.
                                </label>
                            </div>
                            {(formData.seekingSpecialist === 'yes' || formData.seekingSpecialist === 'considering') && (
                                <input
                                    type="text"
                                    name="specialistType"
                                    placeholder="What kind of specialist are you interested in? (e.g., Therapist, Counselor, Psychiatrist)"
                                    value={formData.specialistType}
                                    onChange={handleInputChange}
                                    className="text-input"
                                />
                            )}
                        </div>

                        {/* Section 4: Contact Information */}
                        <div className="form-group">
                            <label className="form-label">Contact Information (Required for follow-up)</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name *"
                                value={formData.fullName}
                                onChange={handleInputChange}
                                required
                                className="text-input"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address *"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                className="text-input"
                            />
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number (Optional)"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="text-input"
                            />

                            <label className="form-label">Preferred Contact Method:</label>
                            <div className="radio-group contact-method-group">
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="preferredContact"
                                        value="email"
                                        checked={formData.preferredContact === 'email'}
                                        onChange={handleRadioChange}
                                        className="radio-input"
                                    />
                                    Email
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="preferredContact"
                                        value="phone"
                                        checked={formData.preferredContact === 'phone'}
                                        onChange={handleRadioChange}
                                        className="radio-input"
                                    />
                                    Phone Call
                                </label>
                                <label className="radio-label">
                                    <input
                                        type="radio"
                                        name="preferredContact"
                                        value="text"
                                        checked={formData.preferredContact === 'text'}
                                        onChange={handleRadioChange}
                                        className="radio-input"
                                    />
                                    Text Message
                                </label>
                            </div>

                            <input
                                type="text"
                                name="availability"
                                placeholder="When is the best time for us to contact you? (e.g., Weekdays mornings)"
                                value={formData.availability}
                                onChange={handleInputChange}
                                className="text-input"
                            />
                        </div>

                        {/* Consent Checkboxes */}
                        <div className="form-group">
                            <label className="checkbox-label consent-label">
                                <input
                                    type="checkbox"
                                    name="agreePrivacy"
                                    checked={formData.agreePrivacy}
                                    onChange={handleConsentChange}
                                    required
                                    className="checkbox-input"
                                />
                                I agree to the <a href="#" className="text-link">Privacy Policy</a> and <a href="#" className="text-link">Terms of Service</a>. *
                            </label>
                            <label className="checkbox-label consent-label">
                                <input
                                    type="checkbox"
                                    name="agreeEmergencyDisclaimer"
                                    checked={formData.agreeEmergencyDisclaimer}
                                    onChange={handleConsentChange}
                                    required
                                    className="checkbox-input"
                                />
                                I understand that this form is for non-emergency inquiries. *
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="submit-button">
                            <Send className="icon-size icon-margin-right" />
                            Submit My Request
                        </button>

                        {/*  After Submit */}
                        {isSubmitted && (
                             <div className="submission-message">
                                 <h2>Thank You!</h2>
                                 <p>Your message has been successfully submitted. Our team will review it within <strong>24-48 business hours</strong> and respond via your preferred contact method to offer relevant resources or suggest next steps.</p>
                             </div>
                        )}
                    </form>
                </div>
            </main>

         {/* Toast Message  */}
            {toastMessage && (
                <div className="toast-message">
                    <strong>{toastMessage.title}</strong>
                    <p>{toastMessage.description}</p>
                </div>
            )}
    
        </div>
    );
};

export default Talk;
