import { Github, Mail, Linkedin, Code2, Terminal, Database, Cloud } from 'lucide-react';

import divakar from '../assets/img/divakar_img.jpg';
const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 text-gray-700/20 animate-float">
                    <Code2 size={48} />
                </div>
                <div className="absolute top-40 right-20 text-gray-700/20 animate-float-delayed">
                    <Terminal size={48} />
                </div>
                <div className="absolute bottom-20 left-20 text-gray-700/20 animate-float">
                    <Database size={48} />
                </div>
                <div className="absolute bottom-40 right-10 text-gray-700/20 animate-float-delayed">
                    <Cloud size={48} />
                </div>
            </div>

            {/* Hero Content */}
            <div className="hero-content text-center md:text-left md:w-1/2 z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    Hi, I'm{" "}
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Divakara Rao Annepu
          </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-300 mb-6">
                    I specialize in building scalable, secure, and innovative software solutions that solve
                    real-world problems and deliver impactful results.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 border border-gray-500 text-gray-300 rounded-lg hover:border-blue-400 hover:text-white transition-all"
                    >
                        Contact Me
                    </a>
                </div>
                <div className="flex gap-4 mt-8 justify-center md:justify-start">
                    <a
                        href="https://github.com/divakar007"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-500 transition-colors"
                    >
                        <Github size={28} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/divakara-rao-annepu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-blue-500 transition-colors"
                    >
                        <Linkedin size={28} />
                    </a>
                    <a
                        href="mailto:adivakararao@gmail.com"
                        className="text-gray-300 hover:text-blue-500 transition-colors"
                    >
                        <Mail size={28} />
                    </a>
                </div>
            </div>

            {/* Hero Image */}
            <div className="hero-image mt-10 md:mt-0 md:w-1/2 relative z-10">
                <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                    <img
                        src={divakar}
                        alt="Divakara Rao Annepu"
                        className="rounded-full w-full h-full object-cover object-center border-4 border-blue-500/30"
                        style={{ objectPosition: '50% 30%' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
