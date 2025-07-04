import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'aisha@example.com' },
    { icon: Phone, label: 'Phone', value: '+92 (555) 123-4567' },
    { icon: MapPin, label: 'Location', value: 'Pakistan, Hyd' },
  ];

  return (
    <section id="contact" ref={contactRef} className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to work together? I'd love to hear about your project and discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h3 className="text-2xl font-semibold mb-8">Let's Connect</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                >
                  <div className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`transition-all duration-1000 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none transition-colors duration-300"
                ></textarea>
              </div>
              <button
                type="submit"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 p-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Send Message</span>
                  <Send className={`w-5 h-5 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;