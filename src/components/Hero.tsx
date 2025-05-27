
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Camera, Upload, Download, Phone } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [islandExpanded, setIslandExpanded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const texts = ['ERP Consultant', 'Tech Entrepreneur', 'Business Development Specialist', 'ERPNext Expert'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentText(texts[currentIndex]);
  }, [currentIndex]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIslandExpanded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Dynamic Island Navigation */}
      <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-1000 ease-out ${
        islandExpanded 
          ? 'w-[95vw] max-w-[600px] h-14 bg-black/90 backdrop-blur-xl rounded-full border border-blue-500/20' 
          : 'w-32 h-8 bg-black/60 backdrop-blur-sm rounded-full'
      }`}>
        <div className="flex items-center justify-between h-full px-2 md:px-6">
          {islandExpanded && (
            <div className="flex items-center justify-between w-full animate-fade-in">
              <span className="text-blue-400 text-xs md:text-lg font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Portfolio
              </span>
              <div className="hidden sm:flex items-center space-x-4 md:space-x-8">
                {['home', 'about', 'services', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="text-gray-300 hover:text-blue-400 text-xs md:text-sm font-medium transition-all duration-300 capitalize relative group"
                  >
                    {item}
                    <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></div>
                  </button>
                ))}
              </div>
              <div className="flex space-x-1 md:space-x-2">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></div>
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-cyan-900/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="text-center z-10 px-4 max-w-6xl mx-auto">
        {/* Profile Section */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 p-1">
              <Avatar className="w-full h-full">
                <AvatarImage 
                  src={profileImage || undefined} 
                  alt="Ganapathi Ram Nandhagopal" 
                  className="object-cover"
                />
                <AvatarFallback className="bg-gradient-to-br from-blue-800 to-purple-800 text-white text-3xl">
                  <Camera className="w-12 h-12" />
                </AvatarFallback>
              </Avatar>
            </div>
            
            <div 
              className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="w-8 h-8 text-white" />
            </div>
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-12 transform animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ganapathi Ram
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-2 font-light">
            Nandhagopal
          </h2>
          <div className="h-16 flex items-center justify-center">
            <h3 className="text-xl md:text-2xl lg:text-4xl text-blue-400 font-semibold">
              {currentText}
              <span className="animate-pulse">|</span>
            </h3>
          </div>
          <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed mt-6">
            Founder of <span className="text-blue-400 font-semibold">BUDE Global Enterprise</span> - 
            Transforming businesses through innovative ERP solutions across Manufacturing, Service, and Healthcare sectors. 
            Building the future, one solution at a time.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/Ganapathyram-Nandhagopal" className="group p-4 bg-gray-800/50 rounded-full hover:bg-blue-600/20 transition-all duration-300 transform hover:scale-110 border border-gray-700/50 hover:border-blue-500/50">
            <Github size={24} className="group-hover:text-blue-400 transition-colors" />
          </a>
          <a href="https://www.linkedin.com/in/ganapathyramnandhagopal/" className="group p-4 bg-gray-800/50 rounded-full hover:bg-blue-600/20 transition-all duration-300 transform hover:scale-110 border border-gray-700/50 hover:border-blue-500/50">
            <Linkedin size={24} className="group-hover:text-blue-400 transition-colors" />
          </a>
          <a href="mailto:ganapathyram.n@gmail.com" className="group p-4 bg-gray-800/50 rounded-full hover:bg-blue-600/20 transition-all duration-300 transform hover:scale-110 border border-gray-700/50 hover:border-blue-500/50">
            <Mail size={24} className="group-hover:text-blue-400 transition-colors" />
          </a>
          <a href="tel:+918765432109" className="group p-4 bg-gray-800/50 rounded-full hover:bg-blue-600/20 transition-all duration-300 transform hover:scale-110 border border-gray-700/50 hover:border-blue-500/50">
            <Phone size={24} className="group-hover:text-blue-400 transition-colors" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={scrollToNext}
            className="group px-10 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            <span className="flex items-center space-x-2">
              <span>Explore My Work</span>
              <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
          <button className="group px-10 py-4 border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
            <span className="flex items-center space-x-2">
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              <span>Download Resume</span>
            </span>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
