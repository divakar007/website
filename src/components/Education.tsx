function Education() {
    const educationData = [
        {
            degree: "Master of Engineering in Computer Science",
            institution: "Virginia Tech",
            duration: "August 2023 - May 2025",
            details: ["Software Engineering", "Cloud Computing", "Intro to Artificial Intelligence", "Machine Learning", "Mobile Application Development", "Information Security"],
            cgpa : "3.93/4.0",
        },
        {
            degree: "Bachelor of Technology in Computer Science",
            institution: "Jawaharlal Nehru Technological University",
            duration: "June 2017 - June 2021",
            details: ["Operating Systems", "Computer Networks", "Object Oriented Design Using Java", "Data Structures and Algorithms", "Database Management Systems", "Software Engineering"],
            cgpa: "8.17/10.0",
        },
    ];

    return (
        <section id="education" className="py-20 px-4 bg-gray-900">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">
                    Education
                </h2>
                <div className="grid gap-8">
                    {educationData.map((education, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-semibold text-white">
                                    {education.degree}
                                </h3>
                                <span className="text-green-400 font-medium">
                    GPA: {education.cgpa}
                </span>
                            </div>
                            <p className="text-blue-400 font-medium">{education.institution}</p>
                            <p className="text-gray-400 text-sm">{education.duration}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {education.details.map((course, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                                    >
                        {course}
                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default Education;
