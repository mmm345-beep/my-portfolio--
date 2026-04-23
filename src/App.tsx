import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Workflows from './components/Workflows';
import Capabilities from './components/Capabilities';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bento-bg pb-12">
      <Navbar />
      <main className="space-y-4 pt-10">
        <Hero />
        <Projects />
        <Workflows />
        <Capabilities />
        <AboutContact />
      </main>
      <Footer />
    </div>
  );
}
