import React from 'react'
import "../app/styles/skills.css" ;

const Skills = () => {
  return (
    <div id='skills' className='skills-container'>
      <div className='skills-grid'>
        <div data-aos="zoom-in-up" className='skills-left'>
          <h2 className='skills-heading'>
            Technologies I Work With:
          </h2>
          <p className='skills-text'>
            I am a dedicated web developer with a strong foundation in HTML, CSS, and JavaScript, specializing in creating dynamic and user-friendly web applications. My expertise includes working with modern frameworks like React and Next.js, enabling me to build scalable and efficient solutions. Additionally, I am proficient in Tailwind CSS, which allows for rapid and elegant styling and design.With a passion for continuous learning, I actively stay updated on the latest technologies and industry trends to expand my skill set and deliver impactful contributions to projects.
          </p>
        </div>

        {/* { Second Column: Skills} */}

        <div className='skills-right'>
          <div className='skills-icons-grid'>
            <div className='skills-space'>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">React.js</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
            </div>
            <div className='skills-space'>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">Css</h2>
              <h2 data-aos="zoom-in-up">Node.js</h2>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Skills
