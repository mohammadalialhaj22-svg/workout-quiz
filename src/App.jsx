import React, { useState } from 'react';
import gokuImg from './images/gokuu.jpg';
import calendarImg from './images/weeklycalender.jpg';
import injuryImg from './images/injuries.jpg';
import musclesImg from './images/focus.jpg';
import intensityImg from './images/intensity.jpg';
import fullbodyImgFile from './images/fullbody.jpg';
import upperlowerImgFile from './images/upperlower.jpg';
import pplImgFile from './images/ppl.jpg';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [chosenSplit, setChosenSplit] = useState('');

  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactMsg, setContactMsg] = useState('');


  const images = {
    goku: gokuImg, 
    calendar: calendarImg,
    injury: injuryImg,
    muscles: musclesImg,
    intensity: intensityImg,
    fullbodyImg: fullbodyImgFile,
    upperlowerImg: upperlowerImgFile,
    pplImg: pplImgFile
  };

  const handleNavigation = (tabName) => {
    setActiveTab(tabName);
    if (tabName === 'quiz') {
       setCurrentQuestion(1);
    }
  };

  const handleFinalAnswer = (splitSelection) => {
    setChosenSplit(splitSelection);
    setActiveTab('result');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if(contactName === '' || contactEmail === '') {
       alert('Please fill out your name and email');
       return;
    }
    alert('Thank you ' + contactName + '! Your inquiry has been submitted.');
    setContactName('');
    setContactEmail('');
    setContactMsg('');
  };

  return (
    <div>
      <h1>Workout Quiz</h1>

      <div className="nav">
        <button onClick={() => handleNavigation('home')}>Home</button>
        <button onClick={() => handleNavigation('quiz')}>Quiz</button>
        <button onClick={() => handleNavigation('about')}>About</button>
        <button onClick={() => handleNavigation('contact')}>Contact</button>
      </div>

      {activeTab === 'home' && (
        <div className="result-box">
          <h2>Welcome</h2>
          <p>This website helps you find the perfect workout plan for you.</p>
          <button className="quiz-option" onClick={() => handleNavigation('quiz')}>
            Start
          </button>
          <br />
          <img src={images.goku} alt="Workout motivation" />
        </div>
      )}

      {activeTab === 'about' && (
        <div className="result-box">
          <h2>About this website</h2>
          <p>This website helps the user to find the perfect workout program suitable for them.</p>
          <p>The goal is to guide beginner and intermediate users in order for them to achieve their best results in the gym.</p>
          <p>Programs are based on common fitness splits used in hypertrophy training.</p>
        </div>
      )}

      {activeTab === 'contact' && (
        <div className="result-box">
          <h2>Contact Us</h2>
          <p>Have questions about your recommended routine split? Send us a message.</p>
          <form onSubmit={handleContactSubmit}>
            <input 
              type="text" 
              placeholder="Your Name" 
              value={contactName} 
              onChange={(e) => setContactName(e.target.value)} 
              style={{ margin: '10px 0', padding: '10px', width: '80%' }}
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              value={contactEmail} 
              onChange={(e) => setContactEmail(e.target.value)} 
              style={{ margin: '10px 0', padding: '10px', width: '80%' }}
            />
            <textarea 
              placeholder="Your Message" 
              value={contactMsg} 
              onChange={(e) => setContactMsg(e.target.value)} 
               style={{ margin: '10px 0', padding: '10px', width: '80%', height: '80px', fontFamily: 'Arial' }}
            />
            <button type="submit" className="quiz-option">Send Message</button>
          </form>
        </div>
      )}

      {activeTab === 'quiz' && (
        <div className="result-box">
          {currentQuestion === 1 && (
            <div>
              <h2>Question 1</h2>
              <p>How many days a week are you willing to workout?</p>
              <button className="quiz-option" onClick={() => setCurrentQuestion(2)}>3 days</button>
              <button className="quiz-option" onClick={() => setCurrentQuestion(2)}>4 days</button>
               <button className="quiz-option" onClick={() => setCurrentQuestion(2)}>+5 days</button>
              <img src={images.calendar} alt="Weekly schedule" />
            </div>
          )}

          {currentQuestion === 2 && (
            <div>
              <h2>Question 2</h2>
              <p>Do you have any injuries?</p>
              <button className="quiz-option" onClick={() => setCurrentQuestion(3)}>No injuries</button>
              <button className="quiz-option" onClick={() => setCurrentQuestion(3)}>Shoulder issues</button>
              <button className="quiz-option" onClick={() => setCurrentQuestion(3)}>Knee issues</button>
               <img src={images.injury} alt="Physical health status" />
            </div>
          )}

          {currentQuestion === 3 && (
            <div>
              <h2>Question 3</h2>
              <p>What are the muscles you want to focus on?</p>
              <button className="quiz-option" onClick={() => setCurrentQuestion(4)}>Upper body</button>
              <button className="quiz-option" onClick={() => setCurrentQuestion(4)}>Lower body</button>
              <button className="quiz-option" onClick={() => setCurrentQuestion(4)}>Full body</button>
              <img src={images.muscles} alt="Muscular anatomy target" />
            </div>
          )}

          {currentQuestion === 4 && (
            <div>
              <h2>Question 4</h2>
              <p>What is the preferred intensity of the workouts?</p>
              <button className="quiz-option" onClick={() => handleFinalAnswer('fullbody')}>Low</button>
              <button className="quiz-option" onClick={() => handleFinalAnswer('upperlower')}>Medium</button>
              <button className="quiz-option" onClick={() => handleFinalAnswer('ppl')}>High</button>
              <img src={images.intensity} alt="Training exertion intensity" />
            </div>
          )}
        </div>
      )}

      {activeTab === 'result' && (
        <div className="result-box">
          {chosenSplit === 'fullbody' && (
            <div>
              <h2>Full Body Program</h2>
              <p>A full-body training approach for overall development and simplicity.</p>
              <img src={images.fullbodyImg} alt="Full body routine demonstration" />
            </div>
          )}

          {chosenSplit === 'upperlower' && (
            <div>
              <h2>Upper / Lower Split</h2>
              <p>A balanced training split focusing on strength and muscle development.</p>
              <img src={images.upperlowerImg} alt="Upper lower program schema" />
            </div>
          )}

          {chosenSplit === 'ppl' && (
            <div>
              <h2>Push Pull Legs</h2>
              <p>A structured split focused on balanced muscle development and hypertrophy.</p>
               <img src={images.pplImg} alt="Push pull legs sequence presentation" />
            </div>
          )}

          <button className="quiz-option" style={{ marginTop: '20px' }} onClick={() => handleNavigation('quiz')}>
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
}