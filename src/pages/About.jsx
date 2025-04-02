import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div id="about" className="about">
      <h1>About Me</h1>

      <p>
        Hey there! I'm <strong>Sai</strong>, a passionate and detail-oriented developer with a strong foundation in computer science and a love for building clean, responsive web applications.
      
        I hold a <strong>Master’s degree in Computer Science</strong> from the <strong>University of Cincinnati</strong>, where I developed a deep understanding of full-stack development, algorithms, and modern software engineering practices. My academic journey helped me build hands-on experience with technologies like <strong>ReactJS</strong>, <strong>JavaScript</strong>, <strong>CSS</strong>, and other front-end tools.
      </p>

      <p>
        I’m particularly interested in creating intuitive and interactive user experiences using React and modern web technologies. I love writing clean, reusable code and turning ideas into functional products.
    
        Outside of tech, I’m a big fan of movies, cricket, and badminton. I also enjoy following Formula 1, and most importantly, spending quality time with friends and family.
      </p>

      <p>
        I’m always open to exciting opportunities, collaborative projects, or just connecting with fellow developers. Let’s build something amazing together!
      </p>
      <div className='resume'>
        <a href=''><i class="fa-regular fa-file"></i></a>
        <a href='./Tharun_SDE_RESUME.pdf' target='_blank' >Resume</a>
        
      </div>
    </div>
  );
}

export default About;
