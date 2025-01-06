import Contact from "./components/Contact";
import About from "./components/About.tsx";
import Hero from "./components/Hero.tsx";
import Education from "./components/Education.tsx";
import Experience from "./components/Experience.tsx";
import Projects from "./components/Projects.tsx";
import Skills from "./components/Skills.tsx";
import Testimonials from "./components/Testimonials.tsx";
import Header from "./components/Header.tsx";
// Footer Component
function Footer() {
  return (
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Divakara Rao Annepu. All rights reserved.</p>
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
