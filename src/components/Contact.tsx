
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Calendar, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for reaching out. I'll get back to you within 24 hours to discuss your project.",
    });
    setFormData({ name: '', email: '', company: '', projectType: '', budget: '', timeline: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "ganapathi@budeglobal.com",
      link: "mailto:ganapathi@budeglobal.com",
      description: "Let's discuss your project"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 87654 32109",
      link: "tel:+918765432109",
      description: "Available 9 AM - 6 PM IST"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Chennai, Tamil Nadu, India",
      link: "#",
      description: "Available for global projects"
    }
  ];

  const projectTypes = [
    'ERPNext Consulting',
    'Flutter App Development',
    'RFID Integration',
    'Digital Marketing',
    'Complete Digital Transformation',
    'Other'
  ];

  const budgetRanges = [
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+',
    'Let\'s Discuss'
  ];

  const timelines = [
    '1-2 months',
    '3-4 months',
    '5-6 months',
    '6+ months',
    'Flexible'
  ];

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your business with innovative technology solutions? 
            Let's discuss your project and create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I'm passionate about helping businesses leverage technology for growth. 
                Whether you're looking for ERP solutions, mobile apps, or digital transformation, 
                I'm here to turn your vision into reality.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="group flex items-start space-x-4 p-6 bg-gray-800/30 rounded-2xl hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50">
                  <div className="text-blue-400 mt-1 group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-gray-400 text-sm mb-1">{info.title}</div>
                    <a href={info.link} className="text-white hover:text-blue-400 transition-colors font-medium block mb-1">
                      {info.value}
                    </a>
                    <div className="text-gray-500 text-sm">{info.description}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <a href="https://linkedin.com/in/ganapathiram" className="group p-4 bg-gray-800/50 rounded-xl hover:bg-blue-600/20 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50">
                  <Linkedin size={24} className="group-hover:text-blue-400 transition-colors" />
                </a>
                <a href="https://github.com/ganapathiram" className="group p-4 bg-gray-800/50 rounded-xl hover:bg-blue-600/20 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/50">
                  <Github size={24} className="group-hover:text-blue-400 transition-colors" />
                </a>
                <a href="https://wa.me/918765432109" className="group p-4 bg-gray-800/50 rounded-xl hover:bg-green-600/20 transition-all duration-300 border border-gray-700/50 hover:border-green-500/50">
                  <MessageCircle size={24} className="group-hover:text-green-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-2xl p-6 border border-blue-500/20">
              <h4 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-blue-400" />
                Schedule a Call
              </h4>
              <p className="text-gray-400 text-sm mb-4">
                Book a free 30-minute consultation to discuss your project
              </p>
              <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300">
                Book Free Consultation
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-800/30 p-8 rounded-3xl border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-8">Start Your Project</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-3">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-3">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-3">Company/Organization</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>

                {/* Project Details */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-3">Project Type *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300"
                    >
                      <option value="">Select type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-3">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-3">Timeline</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white transition-all duration-300"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-3">Project Details *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 bg-gray-700/50 border border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 resize-none transition-all duration-300"
                    placeholder="Tell me about your project goals, challenges, and specific requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 shadow-lg hover:shadow-blue-500/25"
                >
                  <Send size={20} />
                  <span>Send Project Inquiry</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-12 border-t border-gray-700/50">
          <div className="mb-6">
            <h4 className="text-2xl font-bold text-white mb-2">BUDE Global Enterprise</h4>
            <p className="text-gray-400">Transforming businesses through innovative technology solutions</p>
          </div>
          <p className="text-gray-500">
            © 2024 Ganapathi Ram Nandhagopal. All rights reserved. Built with passion for innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
