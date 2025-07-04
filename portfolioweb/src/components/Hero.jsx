import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const fullText = "Aisha Irshad";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 150); // Typing speed
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse-slow animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl w-full px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text content */}
        <div className="text-center md:text-left text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {displayedText}
          </h1>

          <p className="text-xl md:text-2xl mb-4 text-gray-300">Web Developer</p>
          <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-xl">
            Crafting beautiful, functional web experiences with modern technologies.
          </p>

          <button
            onClick={scrollToAbout}
            className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Get Started
            <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Profile Image */}
        <div className="transition-all duration-1000 delay-700 animate-slide-up">
          <img
            src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?w=600&auto=format&fit=crop&q=60"
            alt="Profile"
            className="w-full max-w-sm mx-auto md:mx-0 rounded-3xl shadow-2xl border-4 border-white/10"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <ChevronDown className="w-6 h-6 text-white opacity-70" />
      </div>
    </section>
  );
};

export default Hero;
