import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import resultImg from '../images/result.png';
import resultdashImg from '../images/resultdash.png';
import result1Img from '../images/result1.png';




const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: 'Shopping Cart',
      description: 'A dynamic shopping cart app with Redux state management, enabling users to add, view, and remove items in real time',
      tech: ['React', 'Javascript', 'Tailwindcss'],
      image: resultImg,
      github: 'https://github.com/AishaIrshad1/Internship/tree/main/shopping-cart-app/shopping-cart',
      demo: 'https://internship-p8k1.vercel.app/'
    },
    {
      title: 'Admin Dashboard',
      description: 'A responsive admin dashboard interface with animated sidebar, dark mode toggle, and a flexible layout',
      tech: ['React', 'Javascript', 'Tailwindcss'],
      image: resultdashImg,
      github: 'https://github.com/AishaIrshad1/Internship/tree/main/dashboard-app',
      demo: 'https://internship-zehu.vercel.app/'
    },
    {
      title: 'Weather App',
      description: 'A responsive weather application with location-based forecasts and interactive data visualizations.',
      tech: ['React', 'Javascript', 'OpenWeather API'],
      image: result1Img,
      github: 'https://github.com/AishaIrshad1/Internship/tree/main/weather-app',
      demo: '#'
    }
  ];

  return (
    <section id="projects" ref={projectsRef} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors duration-300"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full hover:bg-blue-200 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;