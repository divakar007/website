// Projects Section
function Projects() {
    const projectData = [
        {
            title: "Uninav",
            description:
                "A campus navigation and event management application with real-time tracking.",
            technologies: ["React", "Spring Boot", "MongoDB", "AWS"],
            link: "https://github.com/divakar007/Uninav",
        },
        {
            title: "Caring Plates",
            description:
                "A food donation platform connecting restaurants with NGOs to reduce food waste.",
            technologies: ["Java", "Spring Boot", "React", "MSSQL"],
            link: "https://github.com/divakar007/CaringPlates",
        },
        {
            title: "E-Commerce Bookstore",
            description:
                "A bookstore platform offering a seamless shopping experience with secure checkout.",
            technologies: ["Java", "Spring Boot", "React", "MSSQL"],
            link: "https://github.com/divakar007/E-commerce-website-for-a-bookstore",
        },
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
                            <a
                                href={project.link}
                                className="text-blue-400 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View on GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
