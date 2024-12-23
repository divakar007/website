import { useState } from 'react';
import { Menu } from 'lucide-react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="fixed w-full bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 text-transparent bg-clip-text">
                    Divakara Rao Annepu
                </h1>
                <nav className="hidden md:flex gap-6">
                    <a href="#about" className="text-gray-400 hover:text-white">
                        About
                    </a>
                    <a href="#projects" className="text-gray-400 hover:text-white">
                        Projects
                    </a>
                    <a href="#skills" className="text-gray-400 hover:text-white">
                        Skills
                    </a>
                    <a href="#education" className="text-gray-400 hover:text-white">
                        Education
                    </a>
                    <a href="#experience" className="text-gray-400 hover:text-white">
                        Experience
                    </a>
                    <a href="#contact" className="text-gray-400 hover:text-white">
                        Contact
                    </a>
                </nav>
                <button
                    onClick={toggleMenu}
                    className="text-white p-2 md:hidden hover:bg-gray-800 rounded-lg transition-colors"
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="bg-gray-900 border-t border-gray-800 py-4">
                        <nav className="flex flex-col gap-4 px-4">
                            <a
                                href="#about"
                                className="text-gray-400 hover:text-white"
                                onClick={toggleMenu}
                            >
                                About
                            </a>
                            <a
                                href="#projects"
                                className="text-gray-400 hover:text-white"
                                onClick={toggleMenu}
                            >
                                Projects
                            </a>
                            <a
                                href="#skills"
                                className="text-gray-400 hover:text-white"
                                onClick={toggleMenu}
                            >
                                Skills
                            </a>
                            <a
                                href="#education"
                                className="text-gray-400 hover:text-white"
                                onClick={toggleMenu}
                            >
                                Education
                            </a>
                            <a
                                href="#experience"
                                className="text-gray-400 hover:text-white"
                                onClick={toggleMenu}
                            >
                                Experience
                            </a>
                            <a
                                href="#contact"
                                className="text-gray-400 hover:text-white"
                                onClick={toggleMenu}
                            >
                                Contact
                            </a>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
