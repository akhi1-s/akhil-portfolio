const Projects = () => {
  const projects = [
    { title: "Fire Extinguisher Robot Prototype", description: "..." },
    { title: "Floor Cleaning Robot", description: "..." },
    { title: "Wild Animal Surveillance and Detection using Autonomous Drones", description: "..." },
    { title: "Stroke Prediction based on Lifestyle and Clinical Parameters", description: "..." },
    { title: "Emotion Recognition from Human Faces", description: "..." },
    { title: "Autonomous Navigation of Cars using Line Detection", description: "..." },
    { title: "Maze Clearance Robot", description: "..." },
    { title: "Human Follower Robot based on Face Detection", description: "..." },
    { title: "Industrial Pick and Place Warehouse Robot", description: "..." },
  ];

  return (
    <section className='projects-section' id='projects'>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  )
}

export default Projects;
