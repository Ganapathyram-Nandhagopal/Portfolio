
import { Settings, Smartphone, Wifi, TrendingUp, ChevronRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "ERPNext Consulting",
      description: "Complete ERP implementation, customization, and optimization for streamlined business processes.",
      features: ["Custom Module Development", "Data Migration", "Training & Support", "Performance Optimization"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Flutter App Development",
      description: "Cross-platform mobile applications with stunning UI/UX and robust backend integration.",
      features: ["iOS & Android Apps", "Custom UI/UX Design", "API Integration", "Performance Optimization"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "RFID Integration",
      description: "Smart automation solutions for inventory management and business process enhancement.",
      features: ["Inventory Tracking", "Asset Management", "Access Control", "Real-time Monitoring"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies to boost your online presence and drive business growth.",
      features: ["SEO Optimization", "Social Media Strategy", "Content Marketing", "Analytics & Reporting"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="services" className="py-24 px-4 bg-gray-800/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            My Services
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Comprehensive digital solutions designed to transform your business operations 
            and accelerate growth through cutting-edge technology and strategic innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden bg-gray-800/30 rounded-3xl p-8 hover:bg-gray-800/50 transition-all duration-500 border border-gray-700/50 hover:border-blue-500/50 transform hover:scale-105">
              {/* Background Gradient */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <ChevronRight size={16} className="text-blue-400 mr-3 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 bg-gradient-to-r ${service.color} rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-3xl p-12 border border-blue-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how my expertise can help you achieve your digital transformation goals 
              and drive sustainable business growth.
            </p>
            <button className="px-12 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
