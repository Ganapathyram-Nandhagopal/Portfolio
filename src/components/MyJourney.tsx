
import { GraduationCap, Settings, TrendingUp, Building, Stethoscope, Factory } from 'lucide-react';

const MyJourney = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            My Journey
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Education Foundation</h3>
                <p className="text-gray-400 leading-relaxed">
                  I graduated with a degree in Commerce, specializing in Computer Applications 🎓. 
                  This laid the foundation for my journey into the world of ERP solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex-shrink-0">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Career Beginning</h3>
                <p className="text-gray-400 leading-relaxed">
                  I initially kick-started my career as an ERPNext Implementation Consultant 🛠️, 
                  where I gained invaluable experience and insight into the ERP landscape.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Current Focus</h3>
                <p className="text-gray-400 leading-relaxed">
                  At present, my role is laser-focused on spearheading business development initiatives 🚀. 
                  I am keenly concentrated on implementing ERP solutions that streamline operations, 
                  enhance productivity, and drive business growth.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Comprehensive Expertise</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                With comprehensive knowledge and hands-on experience in ERPNext Implementation, 
                Business Development 📈, Project Management 📊, and Consulting 💡, I have the 
                skill set to deliver high-quality ERP solutions tailored to meet the unique 
                needs of each client.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-2xl p-6 border border-gray-700/50">
              <h3 className="text-xl font-semibold text-white mb-4">Industry Focus</h3>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="text-center">
                  <Factory className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-300">Manufacturing 🏭</span>
                </div>
                <div className="text-center">
                  <Building className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-300">Service 📞</span>
                </div>
                <div className="text-center">
                  <Stethoscope className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <span className="text-sm text-gray-300">Healthcare 🏥</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyJourney;
