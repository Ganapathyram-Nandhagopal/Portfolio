
import { Code, Users, Lightbulb, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '50+', label: 'Projects Completed' },
    { number: '3', label: 'Industry Sectors' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  const skills = [
    { name: 'ERPNext Implementation', level: 95 },
    { name: 'Business Development', level: 90 },
    { name: 'Project Management', level: 88 },
    { name: 'ERP Consulting', level: 92 }
  ];

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Transforming businesses through innovative ERP solutions and strategic consulting
          </p>
        </div>

        {/* My Journey Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-3xl p-8 md:p-12 border border-blue-500/20">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center md:text-left">
              My Journey
            </h3>
            <div className="text-gray-300 leading-relaxed space-y-6 text-base md:text-lg">
              <p className="text-center md:text-left">
                I graduated with a degree in Commerce, specializing in Computer Applications 🎓. This laid the foundation for my journey into the world of ERP solutions. I initially kick-started my career as an ERPNext Implementation Consultant 🛠️, where I gained invaluable experience and insight into the ERP landscape.
              </p>
              <p className="text-center md:text-left">
                With comprehensive knowledge and hands-on experience in ERPNext Implementation, Business Development 📈, Project Management 📊, and Consulting 💡, I have the skill set to deliver high-quality ERP solutions tailored to meet the unique needs of each client.
              </p>
              <p className="text-center md:text-left">
                At present, my role is laser-focused on spearheading business development initiatives 🚀. I am keenly concentrated on the Manufacturing 🏭, Service 📞, and Healthcare 🏥 sectors, where I aim to implement ERP solutions that streamline operations, enhance productivity, and drive business growth.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Vision */}
          <div className="bg-gray-800/30 p-8 rounded-3xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Vision</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              To be the leading catalyst in digital transformation, empowering businesses across Manufacturing, Service, and Healthcare sectors with innovative ERP solutions that drive sustainable growth and operational excellence.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-gray-800/30 p-8 rounded-3xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="flex items-center mb-6">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mr-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Mission</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              To deliver comprehensive ERPNext solutions that transform business operations, enhance productivity, and create lasting value through strategic consulting, implementation excellence, and unwavering client support.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-gray-800/30 p-6 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:scale-105">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 group-hover:text-cyan-400 transition-colors">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Core Expertise</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-blue-400 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700/50 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-800/30 p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="inline-flex p-4 bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Innovation</h4>
              <p className="text-gray-400 leading-relaxed">
                Continuously pushing boundaries with cutting-edge ERP solutions and emerging technologies
              </p>
            </div>
            <div className="text-center bg-gray-800/30 p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="inline-flex p-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Collaboration</h4>
              <p className="text-gray-400 leading-relaxed">
                Building strong partnerships and fostering teamwork to achieve exceptional results
              </p>
            </div>
            <div className="text-center bg-gray-800/30 p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group">
              <div className="inline-flex p-4 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Excellence</h4>
              <p className="text-gray-400 leading-relaxed">
                Delivering superior quality solutions that exceed expectations and drive lasting success
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
