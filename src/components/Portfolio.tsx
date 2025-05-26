import { ExternalLink, Github, Award, Calendar } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "ERPNext Healthcare Solution",
      category: "ERP Consulting",
      description: "Comprehensive healthcare management system with patient records, appointment scheduling, and billing integration. Reduced administrative overhead by 60%.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      tech: ["ERPNext", "Python", "JavaScript", "MySQL"],
      results: "60% faster patient processing, 40% cost reduction",
      duration: "6 months",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Smart Inventory RFID App",
      category: "RFID Integration",
      description: "Flutter-based mobile application for real-time inventory tracking using RFID technology. Integrated with warehouse management systems.",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop",
      tech: ["Flutter", "RFID", "Firebase", "IoT"],
      results: "99.8% accuracy, 50% time savings",
      duration: "4 months",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "E-Commerce Mobile Platform",
      category: "App Development",
      description: "Cross-platform e-commerce application with advanced features like AR product preview, AI recommendations, and seamless payment integration.",
      image: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?w=600&h=400&fit=crop",
      tech: ["Flutter", "Node.js", "MongoDB", "Stripe"],
      results: "300% user engagement increase",
      duration: "8 months",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Digital Marketing Dashboard",
      category: "Digital Marketing",
      description: "Comprehensive analytics platform for multi-channel marketing campaigns with real-time ROI tracking and automated reporting.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      tech: ["React", "Python", "TensorFlow", "PostgreSQL"],
      results: "200% ROI improvement for clients",
      duration: "5 months",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Manufacturing ERP Suite",
      category: "ERP Consulting",
      description: "Complete manufacturing resource planning system with production scheduling, quality control, and supply chain management.",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&h=400&fit=crop",
      tech: ["ERPNext", "Python", "Redis", "PostgreSQL"],
      results: "35% production efficiency increase",
      duration: "10 months",
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Smart City IoT Platform",
      category: "IoT Solutions",
      description: "Integrated IoT platform for smart city management including traffic monitoring, waste management, and energy optimization.",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&h=400&fit=crop",
      tech: ["Flutter", "IoT", "AWS", "Machine Learning"],
      results: "25% energy cost reduction",
      duration: "12 months",
      github: "#",
      live: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="portfolio" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            A showcase of successful projects that demonstrate my expertise in delivering 
            innovative solutions across various industries and technologies.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 flex items-center">
            <Award className="w-8 h-8 text-yellow-500 mr-4" />
            Spotlight Projects
          </h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden bg-gray-800/30 rounded-3xl hover:bg-gray-800/50 transition-all duration-500 border border-gray-700/50 hover:border-blue-500/50 transform hover:scale-105">
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                  FEATURED
                </div>

                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.github} className="p-2 bg-black/70 rounded-full hover:bg-blue-600 transition-colors">
                      <Github size={16} />
                    </a>
                    <a href={project.live} className="p-2 bg-black/70 rounded-full hover:bg-blue-600 transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-blue-600/80 text-white px-3 py-1 rounded-full text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Results & Duration */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-700/30 rounded-lg p-3">
                      <div className="text-green-400 text-sm font-semibold mb-1">Results</div>
                      <div className="text-white text-xs">{project.results}</div>
                    </div>
                    <div className="bg-gray-700/30 rounded-lg p-3 flex items-center">
                      <Calendar size={16} className="text-blue-400 mr-2" />
                      <div>
                        <div className="text-blue-400 text-sm font-semibold">Duration</div>
                        <div className="text-white text-xs">{project.duration}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs border border-blue-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-12">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <div key={index} className="group bg-gray-800/30 rounded-2xl overflow-hidden hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50 transform hover:scale-105">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.github} className="p-2 bg-black/70 rounded-full hover:bg-blue-600 transition-colors">
                      <Github size={14} />
                    </a>
                    <a href={project.live} className="p-2 bg-black/70 rounded-full hover:bg-blue-600 transition-colors">
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">
                      {project.category}
                    </span>
                    <span className="text-gray-400 text-xs flex items-center">
                      <Calendar size={12} className="mr-1" />
                      {project.duration}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs">
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <button className="px-12 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
