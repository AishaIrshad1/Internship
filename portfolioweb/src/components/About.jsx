import { useState, useEffect, useRef } from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const skills = [
    { icon: Code, title: 'Frontend Development', desc: 'React, Html, JavaScript, TailwindCss' },
    { icon: Palette, title: 'UI/UX Design', desc: 'Figma, Tailwind CSS' },
    { icon: Zap, title: 'Backend Development', desc: 'MySQL' },
  ];

  const bgColors = ['bg-blue-200', 'bg-purple-200', 'bg-pink-200']; // Brighter background colors

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I’m a creative developer who loves bringing ideas to life through engaging and intuitive digital experiences. I focus on building clean, scalable, and user-friendly web applications that blend performance with great design.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`${bgColors[index % bgColors.length]} p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-blue-600 mb-4 transform hover:scale-110 transition-transform duration-300">
                <skill.icon size={48} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-700">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
