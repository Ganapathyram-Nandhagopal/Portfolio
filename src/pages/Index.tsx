
import Hero from '@/components/Hero';
import About from '@/components/About';
import MyJourney from '@/components/MyJourney';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 text-white">
      <Hero />
      <About />
      <MyJourney />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
