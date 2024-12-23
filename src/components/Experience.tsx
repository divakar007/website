// Professional Experience Section
function Experience() {
    const experienceData = [
        {
            role: "Software Engineer",
            company: "Accolite Digital Pvt Ltd",
            duration: "September 2021 - July 2023",
            details: (
                <ul className="list-disc ml-6 text-gray-300">
                    <li>Directed a team of 5 in executing and delivering release cycles; enhanced the Common Web Framework project by optimizing Spring Security and improving session management.</li>
                    <li>Developed and maintained mission-critical data modeling tools, including ErStudio and DbStudio, by implementing REST APIs using Java and Spring Boot, with over 200 endpoints created to support seamless data operations.</li>
                    <li>Implemented a secure database connectivity framework for an enterprise web application utilizing the TLS 2.0 handshake and Oracle wallets, bolstering data protection and reliability, reducing data breaches by 35%.</li>
                    <li>Mitigated 35+ cross-site scripting vulnerabilities within the application, significantly enhancing overall security measures.</li>
                    <li>Optimized the database purge process by implementing partitioning strategies and managing temporary table deletions, effectively handling purge tables of up to 80GB in size.</li>
                    <li>Integrated and maintained CI/CD pipelines using Jenkins, enabling automated build, test, and deployment processes, reducing deployment time by 50%.</li>
                    <li>Designed and built a comprehensive trial license system using Spring (backend), React.js (frontend), and Redux for state management. This system automated the licensing creation process, improving operational efficiency by 40%.</li>
                    <li>Orchestrated 5+ CRON jobs that automate license expiration, account expiration notifications, and data deletion tasks.</li>
                    <li>Refined the search functionality for data tables across the application, enhancing search efficiency by 30% for faster data retrieval using SQL and Java.</li>
                    <li>Refactored applications for scalability and reliability to meet business-critical SLAs in payments systems.</li>
                </ul>
            ),
        },
    ];

    return (
        <section id="experience" className="py-20 px-4 bg-gray-800/30">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">
                    Professional Experience
                </h2>
                <div className="grid gap-8">
                    {experienceData.map((experience, index) => (
                        <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {experience.role}
                            </h3>
                            <p className="text-blue-400 font-medium">{experience.company}</p>
                            <p className="text-gray-400 text-sm">{experience.duration}</p>
                            <div className="mt-2">{experience.details}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
