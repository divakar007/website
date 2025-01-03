function Education() {
    const educationData = [
        {
            degree: "Master of Engineering in Computer Science",
            institution: "Virginia Tech",
            duration: "August 2023 - May 2025",
            details: "Coursework: Software Engineering, Cloud Computing, Elements of AI, Machine Learning, Artificial Intelligence.",
            cgpa : "3.93/4.0",
        },
        {
            degree: "Bachelor of Technology in Computer Science",
            institution: "Jawaharlal Nehru Technological University",
            duration: "June 2017 - June 2021",
            details: "Coursework: Operating Systems, Computer Networks, Web Application Development, Machine Learning.",
            cgpa: "8.17/10",
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
                            <h3 className="text-xl font-semibold text-white mb-2">
                                {education.degree} (GPA :{ education.cgpa})
                            </h3>
                            <p className="text-blue-400 font-medium">{education.institution}</p>
                            <p className="text-gray-400 text-sm">{education.duration}</p>
                            <p className="text-gray-300 mt-2">{education.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;
