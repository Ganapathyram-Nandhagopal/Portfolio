
import { Settings, TrendingUp, Users, GraduationCap, ChevronRight, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Settings className="w-8 h-8" />,
      title: "ERPNext Implementation & Consulting",
      description: "Complete ERPNext solutions tailored to your business needs, from initial consultation to full deployment and training across Manufacturing, Service, and Healthcare sectors.",
      price: "Starting at $5,000",
      features: ["Custom ERPNext setup", "Business process optimization", "Data migration", "Staff training & support"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Business Development Strategy",
      description: "Strategic business development initiatives focused on growth acceleration and operational excellence in your target markets.",
      price: "Starting at $3,000",
      features: ["Growth strategy planning", "Market analysis", "Process optimization", "Performance metrics"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Project Management & Consulting",
      description: "End-to-end project management services ensuring successful ERP implementation from inception to completion.",
      price: "Starting at $4,000",
      features: ["Project planning & execution", "Stakeholder management", "Risk assessment", "Quality assurance"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "ERP Training & Support",
      description: "Comprehensive training programs and ongoing support to maximize your ERPNext investment and user adoption.",
      price: "Starting at $2,000",
      features: ["User training programs", "Documentation creation", "Ongoing support", "System optimization"],
      color: "from-orange-500 to-red-500"
    }
  ];

  const partners = [
    {
      name: "AD3 Infotech",
      type: "Technology Partner",
      description: "Strategic technology partnership for innovative ERP solutions and digital transformation"
    },
    {
      name: "Drops Chemicals",
      type: "Chemical Manufacturing",
      description: "Complete ERP implementation for chemical manufacturing operations"
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
            Comprehensive ERP solutions designed to accelerate your business growth 
            across Manufacturing, Service, and Healthcare sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
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
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-blue-400 font-semibold text-lg">
                    {service.price}
                  </span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4">What's Included:</h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <ChevronRight size={16} className="text-blue-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">• {feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button className={`w-full py-3 px-6 bg-gradient-to-r ${service.color} rounded-xl text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2`}>
                  <span>Get Started</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trusted Partners Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Trusted Partners & Clients
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:transform hover:scale-105">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{partner.name}</h4>
                    <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm mb-3">
                      {partner.type}
                    </span>
                    <p className="text-gray-400 leading-relaxed">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-3xl p-12 border border-blue-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's discuss how my ERPNext expertise can help you achieve your digital transformation goals 
              and drive sustainable business growth across Manufacturing, Service, and Healthcare sectors.
            </p>
            <button className="px-12 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
              Start Your ERP Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
