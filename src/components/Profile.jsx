import { profileData } from '../data/profile';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';
import './Profile.css';

function Profile() {
  return (
    <div className="profile-container" id="about">
      <h1 className="profile-title">{profileData.name}</h1>
      <h2 className="profile-subtitle">{profileData.title}</h2>
      <p className="profile-bio">{profileData.bio}</p>

      {/* Resume Download Button */}
      <div style={{ marginBottom: '30px' }}>
        <a 
          href={profileData.resumeUrl} 
          download="Porchelvan_Resume.pdf"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: '#6366f1',
            color: '#ffffff',
            padding: '10px 20px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '14px'
          }}
        >
          <FaDownload /> Download Resume
        </a>
      </div>

      {/* Skills Section */}
      <h3 id="skills">Skills</h3>
      <ul className="skills-list">
        {profileData.skills.map((skill, index) => (
          <li key={index} className="skill-chip">
            {skill}
          </li>
        ))}
      </ul>

      {/* Projects Section */}
      <h3 id="projects">Projects</h3>
      <div className="projects-grid">
        {profileData.projects.map((project) => (
          <div key={project.id} className="project-card">
            <h4 className="project-title">{project.title}</h4>
            <p className="project-desc">{project.description}</p>
            <p className="project-tech">{project.techStack.join(' • ')}</p>
            <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
              View Project →
            </a>
          </div>
        ))}
      </div>

      {/* Social Media & Contact Section */}
      <h3 id="contact" style={{ marginTop: '40px' }}>Connect with Me</h3>
      <div className="social-links">
        <a href={`mailto:${profileData.contact.email}`} title="Email" className="social-icon">
          <FaEnvelope />
        </a>
        <a href={profileData.contact.github} target="_blank" rel="noreferrer" title="GitHub" className="social-icon">
          <FaGithub />
        </a>
        <a href={profileData.contact.linkedin} target="_blank" rel="noreferrer" title="LinkedIn" className="social-icon">
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Profile;