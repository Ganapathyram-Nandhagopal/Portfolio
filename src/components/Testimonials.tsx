
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechVision Industries",
      company: "TechVision Industries",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b277?w=100&h=100&fit=crop&crop=face",
      content: "Ganapathi's ERPNext implementation transformed our entire business operations. The level of customization and attention to detail exceeded our expectations. Our efficiency increased by 60% within the first quarter.",
      rating: 5,
      project: "ERPNext Healthcare Solution"
    },
    {
      name: "Michael Chen",
      position: "Operations Director",
      company: "Global Manufacturing Corp",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      content: "The RFID integration project was flawlessly executed. Ganapathi's expertise in both technology and business processes made the transition smooth. We now have 99.8% inventory accuracy.",
      rating: 5,
      project: "Smart Inventory RFID App"
    },
    {
      name: "Emily Rodriguez",
      position: "Founder & CMO",
      company: "Digital Dynamics",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      content: "Working with Ganapathi on our mobile app was incredible. His Flutter expertise and UI/UX sensibilities created an app that our users absolutely love. Downloads increased by 300%.",
      rating: 5,
      project: "E-Commerce Mobile Platform"
    },
    {
      name: "David Park",
      position: "Marketing Director",
      company: "GrowthLab Agency",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      content: "The digital marketing dashboard Ganapathi built for us is phenomenal. Real-time analytics and automated reporting have improved our client ROI by 200%. Highly recommended!",
      rating: 5,
      project: "Digital Marketing Dashboard"
    },
    {
      name: "Lisa Thompson",
      position: "CTO",
      company: "InnovateTech Solutions",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
      content: "Ganapathi's technical expertise and project management skills are outstanding. He delivered our complex ERP system on time and under budget. A true professional.",
      rating: 5,
      project: "Manufacturing ERP Suite"
    },
    {
      name: "James Wilson",
      position: "Smart City Project Lead",
      company: "Metro City Council",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      content: "The IoT platform for our smart city initiative exceeded all expectations. Ganapathi's innovative approach helped us achieve 25% energy cost reduction. Exceptional work!",
      rating: 5,
      project: "Smart City IoT Platform"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-4 bg-gray-800/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Hear what my clients say about their experience working with me and 
            the transformative impact of our collaboration on their businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative bg-gray-800/30 rounded-3xl p-8 hover:bg-gray-800/50 transition-all duration-500 border border-gray-700/50 hover:border-blue-500/50 transform hover:scale-105">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-blue-400/30 group-hover:text-blue-400/50 transition-colors">
                <Quote size={40} />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-300 mb-8 leading-relaxed relative z-10">
                "{testimonial.content}"
              </blockquote>

              {/* Project Reference */}
              <div className="mb-6 p-3 bg-blue-600/10 rounded-lg border border-blue-500/20">
                <div className="text-blue-400 text-sm font-semibold">Project:</div>
                <div className="text-blue-300 text-sm">{testimonial.project}</div>
              </div>

              {/* Client Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500/30 mr-4"
                />
                <div>
                  <div className="text-white font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-blue-400 text-sm font-medium">{testimonial.position}</div>
                  <div className="text-gray-400 text-sm">{testimonial.company}</div>
                </div>
              </div>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-3xl p-12 border border-blue-500/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Client Success Metrics</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Numbers that speak to the quality and impact of our collaboration
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">98%</div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-400 text-sm">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
              <div className="text-gray-400 text-sm">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">60%</div>
              <div className="text-gray-400 text-sm">Avg. Efficiency Gain</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
