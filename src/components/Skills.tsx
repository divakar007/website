import {
    SiPython,
    SiCplusplus,
    SiJavascript,
    SiPostgresql,
    SiSpringboot,
    SiReact,
    SiDocker,
    SiJenkins,
    SiRedis,
    SiMongodb,
    SiHtml5,
    SiCss3,
    SiOracle,
    SiMysql,
    SiTailwindcss
} from "react-icons/si";

import { FaJava, FaTasks, FaCloud } from "react-icons/fa";

// Skills Section
function Skills() {
    const skills = [
        {
            category: "Programming Languages",
            items: [
                { name: "Python", icon: <SiPython size={24} /> },
                { name: "Java", icon: <FaJava size={24} /> },
                { name: "C", icon: <SiCplusplus size={24} /> },
                { name: "C++", icon: <SiCplusplus size={24} /> },
                { name: "JavaScript", icon: <SiJavascript size={24} /> },
                { name: "HTML5", icon: <SiHtml5 size={24} /> },
                { name: "CSS", icon: <SiCss3 size={24} /> },
                { name: "SQL", icon: <SiMysql size={24} /> },
                { name: "Shell Scripting", icon: <FaCloud size={24} /> },
                {name: "Tailwind CSS", icon: <SiTailwindcss size={24} /> },
            ],
        },
        {
            category: "Frameworks & Tools",
            items: [
                { name: "Spring Boot", icon: <SiSpringboot size={24} /> },
                { name: "REST APIs", icon: <SiReact size={24} /> },
                { name: "Microservices", icon: <SiReact size={24} /> },
                { name: "Hibernate", icon: <SiReact size={24} /> },
                // { name: "Kafka", icon: <SiKafka size={24} /> },
                { name: "Jenkins", icon: <SiJenkins size={24} /> },
                { name: "Docker", icon: <SiDocker size={24} /> },
                { name: "Redis", icon: <SiRedis size={24} /> },
            ],
        },
        {
            category: "Databases",
            items: [
                { name: "MongoDB", icon: <SiMongodb size={24} /> },
                { name: "PostgreSQL", icon: <SiPostgresql size={24} /> },
                { name: "Oracle", icon: <SiOracle size={24} /> },
                { name: "MS SQL Server", icon: <SiMysql size={24} /> },
            ],
        },
        {
            category: "Cloud & Tools",
            items: [
                { name: "AWS", icon: <FaCloud size={24} /> },
                { name: "CI/CD Pipelines", icon: <SiJenkins size={24} /> },
                { name: "OAuth 2.0/JWT", icon: <SiReact size={24} /> },
                { name: "Agile (Scrum/Kanban)", icon: <FaTasks size={24} /> },
            ],
        },
        {
            category: "Other Skills",
            items: [
                { name: "Test-Driven Development", icon: <FaTasks size={24} /> },
                { name: "Design Patterns", icon: <FaTasks size={24} /> },
                { name: "Multithreading", icon: <FaTasks size={24} /> },
                { name: "Distributed Systems", icon: <FaTasks size={24} /> },
            ],
        },
    ];

    return (
        <section id="skills" className="py-20 px-4 bg-gray-800/30">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">
                    Skills
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skillSet, index) => (
                        <div key={index} className="bg-gray-800/50 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-white mb-4">
                                {skillSet.category}
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {skillSet.items.map((skill, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2 bg-gray-700 px-4 py-2 rounded-full text-sm text-gray-300"
                                    >
                                        {skill.icon}
                                        <span>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;
