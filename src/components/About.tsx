
import { Code, Database, Palette, Zap, Users, Award, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "ERPNext Consulting",
      description: "Strategic ERP implementation and customization for seamless business operations."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "App Development",
      description: "Flutter-based mobile applications with cutting-edge UI/UX design and functionality."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "RFID Integration",
      description: "Smart automation solutions for inventory management and business process optimization."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to amplify your brand's digital presence."
    }
  ];

  const achievements = [
    { icon: <Users />, number: "50+", label: "Happy Clients" },
    { icon: <Award />, number: "100+", label: "Projects Delivered" },
    { icon: <Target />, number: "98%", label: "Client Satisfaction" },
    { icon: <Lightbulb />, number: "5+", label: "Years Experience" }
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            I'm the founder of <span className="text-blue-400 font-semibold">BUDE Global Enterprise</span>, 
            a passionate tech entrepreneur dedicated to transforming businesses through innovative digital solutions. 
            With expertise spanning ERP consulting, mobile app development, and emerging technologies, 
            I help organizations unlock their full potential in the digital age.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-white mb-6">My Vision & Mission</h3>
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl border border-blue-500/20">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Vision</h4>
                <p className="text-gray-400 leading-relaxed">
                  To be the leading catalyst for digital transformation, empowering businesses to thrive 
                  in an increasingly connected world through innovative technology solutions.
                </p>
              </div>
              <div className="p-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl border border-purple-500/20">
                <h4 className="text-xl font-semibold text-purple-400 mb-3">Mission</h4>
                <p className="text-gray-400 leading-relaxed">
                  To deliver cutting-edge ERP solutions, mobile applications, and digital strategies 
                  that drive measurable business growth while maintaining the highest standards of 
                  quality and customer satisfaction.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-8">
              {['ERPNext', 'Flutter', 'RFID Technology', 'UI/UX Design', 'Digital Strategy', 'Business Analytics'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30 hover:bg-blue-600/30 transition-colors">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group p-8 bg-gray-800/30 rounded-2xl hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105 border border-gray-700/50 hover:border-blue-500/50">
                <div className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center p-8 bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105">
              <div className="text-blue-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {achievement.number}
              </div>
              <div className="text-gray-400 text-sm">{achievement.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
