
import './App.css'
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      {/* <Testimonials /> */}
      <Contact /> 
      
      <footer className="py-8 text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Jhersonn V. Cayao. All rights reserved.</p>
      </footer>
    </div>
  );
}
