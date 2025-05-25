
import { useState, useEffect, useRef } from 'react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React/Next.js', level: 90 },
    { name: 'Node.js/Express', level: 85 },
    { name: 'Python/Django', level: 80 },
    { name: 'Database Design', level: 85 },
    { name: 'UI/UX Design', level: 75 },
    { name: 'Cloud Services (AWS)', level: 70 },
    { name: 'DevOps/Docker', level: 65 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 px-4 bg-gray-800/30" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels in various technologies and tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-blue-400 font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${index * 100}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-gray-800/50 rounded-xl">
            <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
            <div className="text-gray-400">Projects Completed</div>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl">
            <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl">
            <div className="text-3xl font-bold text-pink-400 mb-2">25+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="p-6 bg-gray-800/50 rounded-xl">
            <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
