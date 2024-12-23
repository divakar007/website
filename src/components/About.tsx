// About Section
import { FaBriefcase, FaProjectDiagram, FaTasks } from "react-icons/fa";

function About() {
    return (
        <section id="about" className="py-20 px-4 bg-gray-800/30">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">
                    About Me
                </h2>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto text-center mb-12">
                    I'm currently pursuing a Master's in Computer Science at Virginia Tech, with a strong inclination toward full-stack development. My expertise spans creating end-to-end software solutions, from designing robust backend systems to developing engaging user interfaces. Certified in AWS Solutions Architecture, I bring a solid foundation in cloud computing and scalable system design, honed during my tenure at Accolite Digital. My passion lies in crafting seamless web applications that blend creativity, functionality, and cutting-edge technologies, driving impactful user experiences.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center">
                        <FaBriefcase size={40} className="text-blue-400 mb-4" />
                        <div className="text-blue-400 text-5xl font-bold mb-4">2</div>
                        <p className="text-gray-300">Work Experience as Software Engineer</p>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center">
                        <FaTasks size={40} className="text-blue-400 mb-4" />
                        <div className="text-blue-400 text-5xl font-bold mb-4">7</div>
                        <p className="text-gray-300">Projects Worked In</p>
                    </div>
                    <div className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center">
                        <FaProjectDiagram size={40} className="text-blue-400 mb-4" />
                        <div className="text-blue-400 text-5xl font-bold mb-4">1</div>
                        <p className="text-gray-300">Number of Projects Led</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
