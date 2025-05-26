
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Camera, Upload } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [islandExpanded, setIslandExpanded] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const texts = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentText(texts[currentIndex]);
  }, [currentIndex]);

  // Dynamic Island effect
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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Dynamic Island */}
      <div className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-1000 ease-out ${
        islandExpanded 
          ? 'w-80 h-16 bg-black/80 backdrop-blur-xl rounded-full' 
          : 'w-32 h-8 bg-black/60 backdrop-blur-sm rounded-full'
      }`}>
        <div className="flex items-center justify-center h-full px-6">
          {islandExpanded && (
            <div className="flex items-center space-x-4 animate-fade-in">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-medium">Available for projects</span>
              <div className="flex space-x-2">
                <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                <div className="w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                <div className="w-1 h-1 bg-pink-400 rounded-full animate-pulse delay-300"></div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="text-center z-10 px-4 max-w-4xl mx-auto">
        {/* Profile Photo Section */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-spin-slow">
              <Avatar className="w-full h-full">
                <AvatarImage 
                  src={profileImage || undefined} 
                  alt="Profile" 
                  className="object-cover"
                />
                <AvatarFallback className="bg-gray-800 text-white text-2xl">
                  <Camera className="w-8 h-8" />
                </AvatarFallback>
              </Avatar>
            </div>
            
            {/* Upload overlay */}
            <div 
              className="absolute inset-0 rounded-full bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="w-6 h-6 text-white" />
            </div>
            
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            
            {/* Decorative ring */}
            <div className="absolute -inset-2 rounded-full border-2 border-blue-400/30 animate-pulse"></div>
          </div>
        </div>

        <div className="mb-8 transform animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ganapathyram
          </h1>
          <h2 className="text-2xl md:text-4xl text-gray-300 mb-4">
            I'm a{' '}
            <span className="text-blue-400 font-semibold animate-pulse">
              {currentText}
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating digital experiences that combine beautiful design 
            with powerful functionality. Let's build something amazing together.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
            <Linkedin size={24} />
          </a>
          <a href="mailto:contact@example.com" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300 transform hover:scale-110">
            <Mail size={24} />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={scrollToNext}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-blue-400 rounded-full font-semibold hover:bg-blue-400 hover:text-gray-900 transition-all duration-300">
            Download CV
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;
