import { useState } from 'react';
import { Github, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/AishaIrshad1', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aisha-irshad-076066203', label: 'LinkedIn' },
  ];

  return (
    <footer 
      className={`py-12 transition-all duration-500 ${
        isHovered 
          ? 'bg-gradient-to-r from-blue-600 to-purple-600' 
          : 'bg-gray-800'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-white mb-2">Aisha Irshad</h3>
            <p className="text-gray-300">Web Developer</p>
          </div>

          <div className="flex space-x-6 mb-6 md:mb-0">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-2 text-gray-300">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>by Aisha Irshad</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Aisha Irshad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
