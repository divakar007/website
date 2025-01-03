import uninav from "../assets/img/projects/uninav.png";
import caringplates from "../assets/img/projects/caringplates.png";
import bookstore from "../assets/img/projects/bookstore.png";
import spamdetection from "../assets/img/projects/spam-detection.png";
import carpricesanalysis from "../assets/img/projects/carpricesanalysis.png";
import cardetection from "../assets/img/projects/cardetection.png";

function Projects() {
    const projectData = [
        {
            title: "Uninav",
            description:
                "A campus navigation and event management application with real-time tracking.",
            technologies: ["React", "Spring Boot", "MongoDB", "AWS"],
            link: "https://github.com/divakar007/Uninav",
            webLink: "https://uninav-git-development-final-divakar007s-projects.vercel.app/uninav",
            image: uninav,
        },
        {
            title: "Caring Plates",
            description:
                "A food donation platform connecting restaurants with NGOs to reduce food waste.",
            technologies: ["Java", "Spring Boot", "React", "MSSQL"],
            link: "https://github.com/divakar007/CaringPlates",
            webLink: "https://caringplates-demo.com",
            image: caringplates,
        },
        {
            title: "E-Commerce Bookstore",
            description:
                "A bookstore platform offering a seamless shopping experience with secure checkout.",
            technologies: ["Java", "Spring Boot", "React", "MSSQL"],
            link: "https://github.com/divakar007/E-commerce-website-for-a-bookstore",
            webLink: "https://bookstore-demo.com",
            image: bookstore,
        },
        {
            title: "Video-Based Vehicle Detection and Counting",
            description: "Developed a vehicle detection and counting system using video processing techniques. The project utilized OpenCV and Python for real-time traffic analysis, with applications in traffic management and congestion monitoring.",
            technologies: ["Python", "OpenCV", "NumPy"],
            link: "https://github.com/divakar007/vedio-based-vehicle-counting",
            webLink: "https://github.com/divakar007/vedio-based-vehicle-counting",
            image: cardetection,
        },
        {
            title: "SMS Spam Detection using Deep Learning",
            description: "Built a spam detection system for SMS messages using Dense Network, LSTM, and Bi-LSTM architectures. Compared and evaluated model accuracy to select the best-performing architecture.",
            technologies: ["Python", "TensorFlow 2", "Streamlit"],
            link: "https://github.com/divakar007/spam-detection-using-NLP",
            liveDemo: "https://github.com/divakar007/spam-detection-using-NLP",
            image: spamdetection,
        },
        {
            title: "Comprehensive Analysis of Car Prices Dataset",
            description: "Performed an in-depth analysis of a large car sales dataset (558,837 records) to derive insights into pricing factors and develop predictive models. Applied regression, classification, and clustering techniques for actionable insights.",
            technologies: ["Python", "pandas", "NumPy", "scikit-learn", "Random Forest", "PCA", "SMOTE"],
            link: "https://github.com/divakar007/COMPREHENSIVE-ANALYSIS-OF-CAR-PRICES-DATASET",
            liveDemo: "https://github.com/divakar007/COMPREHENSIVE-ANALYSIS-OF-CAR-PRICES-DATASET",
            image: carpricesanalysis
        }
    ];

    return (
        <section id="projects" className="py-20 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">
                    Featured Projects
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectData.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800 transition-colors"
                        >
                            <div className="overflow-hidden rounded-lg mb-4">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 mb-4">{project.description}</p>
                            <div className="flex gap-2 flex-wrap mb-4">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                            <div className="flex gap-4">
                                <a
                                    href={project.link}
                                    className="px-4 py-2 bg-gradient-to-r from-blue-400 to-violet-400 text-white rounded-lg hover:opacity-90 transition"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View on GitHub
                                </a>
                                <a
                                    href={project.webLink}
                                    className="px-4 py-2 bg-gradient-to-r from-blue-400 to-violet-400 text-white rounded-lg hover:opacity-90 transition"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View on Web
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
