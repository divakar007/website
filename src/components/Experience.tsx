function Experience() {
    const experienceData = [
        {
            role: "Software Engineer",
            company: "Accolite Digital Pvt Ltd",
            duration: "September 2021 - July 2023",
            details: [
                "Directed a team of 5 in executing and delivering release cycles; enhanced the Common Web Framework project by optimizing Spring Security and improving session management.",
                "Developed and maintained mission-critical data modeling tools, including ErStudio and DbStudio, by implementing REST APIs using Java and Spring Boot, with over 200 endpoints created to support seamless data operations.",
                "Implemented a secure database connectivity framework for an enterprise web application utilizing the TLS 2.0 handshake and Oracle wallets, bolstering data protection and reliability, reducing data breaches by 35%.",
                "Mitigated 35+ cross-site scripting vulnerabilities within the application, significantly enhancing overall security measures.",
                "Optimized the database purge process by implementing partitioning strategies and managing temporary table deletions, effectively handling purge tables of up to 80GB in size.",
                "Integrated and maintained CI/CD pipelines using Jenkins, enabling automated build, test, and deployment processes, reducing deployment time by 50%.",
                "Designed and built a comprehensive trial license system using Spring (backend), React.js (frontend), and Redux for state management. This system automated the licensing creation process, improving operational efficiency by 40%.",
                "Orchestrated 5+ CRON jobs that automate license expiration, account expiration notifications, and data deletion tasks.",
                "Refined the search functionality for data tables across the application, enhancing search efficiency by 30% for faster data retrieval using SQL and Java.",
                "Refactored applications for scalability and reliability to meet business-critical SLAs in payments systems.",
            ],
        },
    ];

    return (
        <section id="experience" className="py-20 px-4 bg-gray-800/30">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">
                    Professional Experience
                </h2>
                <div className="relative border-l-4 border-blue-400">
                    {experienceData.map((experience, index) => (
                        <div key={index} className="mb-10 ml-6">
                            <div className="absolute w-8 h-8 bg-blue-400 rounded-full -left-4 flex items-center justify-center text-white">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-semibold text-white">
                                {experience.role}
                            </h3>
                            <p className="text-blue-400 font-medium">{experience.company}</p>
                            <p className="text-gray-400 text-sm">{experience.duration}</p>
                            <ul className="mt-4 space-y-3 text-gray-300 list-disc list-inside marker:text-blue-500">
                                {experience.details.map((detail, i) => (
                                    <li key={i}
                                        className="pl-2 leading-relaxed hover:text-blue-400 transition-colors duration-200">
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
