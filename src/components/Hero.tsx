// Hero Section
import { Github, Mail, Linkedin } from "lucide-react";


function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center px-4 pt-16 relative overflow-hidden">
            <div className="container mx-auto text-center relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in relative">
                    Hi, I'm{" "}
                    <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
              Divakara Rao Annepu
            </span>
                        {/* Glow effect */}
                        <span className="absolute left-0 right-0 -bottom-1 h-1 bg-blue-500 rounded-full blur-md animate-pulse"></span>
          </span>
                </h1>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-delay">
                    A passionate software developer focused on creating beautiful and
                    functional web experiences.
                </p>
                <div className="flex gap-4 justify-center animate-fade-in-delay-2">
                    <a
                        href="https://github.com/divakar007"
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <Github size={24} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/divakara-rao-annepu/"
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <Linkedin size={24} />
                    </a>
                    <a
                        href="mailto:adivakararao@gmail.com"
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <Mail size={24} />
                    </a>
                </div>
            </div>

            {/* Background graphics */}
            <div className="absolute top-20 left-1/4 w-64 h-64 bg-blue-400 blur-3xl opacity-50 rounded-full animate-bounce"></div>
            <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-violet-500 blur-3xl opacity-50 rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-blue-400 to-violet-400 blur-3xl opacity-30 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </section>
    );
}

export default Hero;
