
import { Code, Database, Palette, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with modern frameworks."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs with scalable architecture."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Designing intuitive and visually appealing user experiences."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, efficiency, and user satisfaction."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with a keen eye for design and a love for creating 
            digital experiences that make a difference. With expertise in modern web technologies, 
            I bring ideas to life through clean code and intuitive interfaces.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
            <p className="text-gray-400 leading-relaxed">
              Started as a curious developer, I've grown into a versatile professional who enjoys 
              tackling complex challenges and learning new technologies. My approach combines 
              technical expertise with creative problem-solving to deliver exceptional results.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new design trends, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-all duration-300 transform hover:scale-105">
                <div className="text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
