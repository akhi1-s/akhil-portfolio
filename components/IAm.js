import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const IAm = () => {
  return (
    <section className='intro-section'>
      <article className='intro-text'>
        <p>Hello, I'm</p>
        <h1>AKHIL S NAIR</h1>
        <p className="adjust">ROBOTICS AND AUTOMATION ENGINEER & TECH ENTHUSIAST</p>
      </article>
      <div className='CTAs'>
        <a className='download-resume' href="/AKHIL_S_NAIR_CV-2.pdf">Download Resume</a>
        <div className='socials'>
          <a href="https://github.com/akhi1-s" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/akhil-nair-ab5384195" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://www.instagram.com/akhi1_s" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="mailto:akhil.rb1923@saintgits.org">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a href="tel:+918089213103">
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </a>
        </div>
      </div>
      <article className='some-details'>
        <p>Currently using: ROS, RViz, Python, C++, SolidWorks, Blender, Gazebo, MATLAB, Labview, SCADA</p>
        <p>Passionate about innovative technologies and their applications in robotics and automation</p>
      </article>
    </section>
  )
}

export default IAm;
