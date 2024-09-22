import Image from 'next/image'

const TechStack = () => {
  const technologies = [
    { name: 'ROS', icon: '/icons/ros.png' },
    { name: 'RViz', icon: '/icons/rviz.png' },
    { name: 'Python', icon: '/icons/python.png' },
    { name: 'C++', icon: '/icons/C++ (CPlusPlus).png' },
    { name: 'SolidWorks', icon: '/icons/solidworks-48.png' },
    { name: 'Blender', icon: '/icons/blender.png' },
    { name: 'Gazebo', icon: '/icons/gazebo.png' },
    { name: 'MATLAB', icon: '/icons/MATLAB.png' },
    { name: 'LabVIEW', icon: '/icons/LabVIEW.png' },
    { name: 'Linux', icon: '/icons/linux.png' },
    { name: 'GitHub', icon: '/icons/GitHub.png' },
    { name: 'VSCode', icon: '/icons/vscode.png' },
  ]

  return (
    <section className='tech-stack'>
      <h2>Technologies I Use</h2>
      <div className='tech-icons'>
        {technologies.map((tech, index) => (
          <div key={index} className='tech-icon'>
            <Image src={tech.icon} alt={tech.name} width={50} height={50} />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack;
