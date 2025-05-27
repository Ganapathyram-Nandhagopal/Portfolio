
import { Code, Database, Users, Award, Target, Lightbulb, GraduationCap, Briefcase, TrendingUp } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "ERPNext Implementation",
      description: "Complete ERP solutions tailored for Manufacturing, Service, and Healthcare sectors."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Business Development",
      description: "Strategic growth initiatives and market expansion consulting services."
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Project Management",
      description: "End-to-end project execution from planning to successful deployment."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "ERP Consulting",
      description: "Expert consultation for business process optimization and system enhancement."
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
            a passionate ERP consultant dedicated to transforming businesses through innovative ERPNext solutions. 
            With expertise spanning Manufacturing, Service, and Healthcare sectors, 
            I help organizations streamline operations and accelerate growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-white mb-8">My Vision & Mission</h3>
            <div className="space-y-8">
              <div className="p-6 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-xl border border-blue-500/20">
                <h4 className="text-xl font-semibold text-blue-400 mb-3">Vision</h4>
                <p className="text-gray-400 leading-relaxed">
                  To be the leading catalyst for ERP transformation, empowering businesses across Manufacturing, 
                  Service, and Healthcare sectors to thrive through innovative ERPNext solutions.
                </p>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-xl border border-purple-500/20">
                <h4 className="text-xl font-semibold text-purple-400 mb-3">Mission</h4>
                <p className="text-gray-400 leading-relaxed">
                  To deliver cutting-edge ERPNext implementations and business development strategies 
                  that drive measurable growth while maintaining the highest standards of 
                  quality and customer satisfaction.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-8">
              {['ERPNext', 'Business Development', 'Project Management', 'Manufacturing ERP', 'Healthcare Solutions', 'Service Industry'].map((tech) => (
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

        {/* My Journey Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              My Journey
            </h3>
          </div>
          
          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-3xl p-8 md:p-12 border border-gray-700/50">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-gray-300 leading-relaxed text-lg">
                  I graduated with a degree in <span className="text-blue-400 font-semibold">Commerce, specializing in Computer Applications</span> 🎓. 
                  This laid the foundation for my journey into the world of ERP solutions. I initially kick-started my career as an 
                  <span className="text-cyan-400 font-semibold"> ERPNext Implementation Consultant</span> 🛠️, where I gained invaluable experience 
                  and insight into the ERP landscape.
                </p>
              </div>
            </div>
            
            <div className="border-l-2 border-blue-500/30 ml-6 pl-8 space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                With comprehensive knowledge and hands-on experience in <span className="text-blue-400 font-semibold">ERPNext Implementation</span>, 
                <span className="text-green-400 font-semibold"> Business Development</span> 📈, 
                <span className="text-purple-400 font-semibold"> Project Management</span> 📊, and 
                <span className="text-cyan-400 font-semibold"> Consulting</span> 💡, I have the skill set to deliver high-quality ERP solutions 
                tailored to meet the unique needs of each client.
              </p>
              
              <p className="text-gray-300 leading-relaxed text-lg">
                At present, my role is laser-focused on <span className="text-blue-400 font-semibold">spearheading business development initiatives</span> 🚀. 
                I am keenly concentrated on the <span className="text-orange-400 font-semibold">Manufacturing</span> 🏭, 
                <span className="text-green-400 font-semibold"> Service</span> 📞, and 
                <span className="text-red-400 font-semibold"> Healthcare</span> 🏥 sectors, where I aim to implement ERP solutions that 
                streamline operations, enhance productivity, and drive business growth.
              </p>
            </div>
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
