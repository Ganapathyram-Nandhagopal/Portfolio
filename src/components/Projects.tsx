
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
      tech: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      github: "#",
      live: "#"
    },
    {
      title: "Weather Dashboard",
      description: "An interactive weather dashboard that provides detailed forecasts, weather maps, and location-based weather data using multiple APIs.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
      tech: ["Vue.js", "Chart.js", "OpenWeather API", "Tailwind"],
      github: "#",
      live: "#"
    },
    {
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media managers with data visualization, scheduling, and performance tracking.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
      tech: ["React", "D3.js", "Python", "FastAPI"],
      github: "#",
      live: "#"
    },
    {
      title: "Learning Management System",
      description: "An online learning platform with course creation, progress tracking, video streaming, and interactive quizzes for educators and students.",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&h=300&fit=crop",
      tech: ["Next.js", "Prisma", "AWS S3", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Fitness Tracker App",
      description: "A mobile-responsive fitness tracking application with workout planning, progress visualization, and social features for fitness enthusiasts.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
      tech: ["React Native", "Firebase", "Chart.js", "Redux"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A selection of my recent work showcasing different technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.github} className="p-2 bg-gray-900/80 rounded-full hover:bg-blue-600 transition-colors">
                    <Github size={16} />
                  </a>
                  <a href={project.live} className="p-2 bg-gray-900/80 rounded-full hover:bg-blue-600 transition-colors">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-blue-600/20 text-blue-300 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
