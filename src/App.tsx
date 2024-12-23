import { Menu} from "lucide-react";

import Contact from "./components/Contact";
import About from "./components/About.tsx";
import Hero from "./components/Hero.tsx";
import Education from "./components/Education.tsx";
import Experience from "./components/Experience.tsx";
import Projects from "./components/Projects.tsx";
import Skills from "./components/Skills.tsx";
import Testimonials from "./components/Testimonials.tsx";

// Header Component
function Header() {
  return (
      <header className="fixed w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
            Divakara Rao Annepu
          </h1>
          <nav className="hidden md:flex gap-6">
            <a href="#about" className="text-gray-400 hover:text-white">About</a>
            <a href="#projects" className="text-gray-400 hover:text-white">Projects</a>
            <a href="#skills" className="text-gray-400 hover:text-white">Skills</a>
            <a href="#education" className="text-gray-400 hover:text-white">Education</a>
            <a href="#experience" className="text-gray-400 hover:text-white">Experience</a>
            <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
          </nav>
          <button className="text-white p-2 md:hidden hover:bg-gray-800 rounded-lg transition-colors">
            <Menu size={24}/>
          </button>
        </div>
        <div className="md:hidden">
          <div className="bg-gray-900 border-t border-gray-800 py-4">
            <nav className="flex flex-col gap-4 px-4">
              <a href="#about" className="text-gray-400 hover:text-white">About</a>
              <a href="#projects" className="text-gray-400 hover:text-white">Projects</a>
              <a href="#skills" className="text-gray-400 hover:text-white">Skills</a>
              <a href="#education" className="text-gray-400 hover:text-white">Education</a>
              <a href="#experience" className="text-gray-400 hover:text-white">Experience</a>
              <a href="#contact" className="text-gray-400 hover:text-white">Contact</a>
            </nav>
          </div>
        </div>
      </header>
  );
}

// Footer Component
function Footer() {
  return (
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 Divakara Rao Annepu. All rights reserved.</p>
        </div>
      </footer>
  );
}


// Main App Component
function App() {
  return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <Header />
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
  );
}

export default App;
