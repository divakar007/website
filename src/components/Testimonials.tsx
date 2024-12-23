import utkarsh from "../assets/testimonials/img-1.png";
import jyothi from "../assets/testimonials/testimonials-2.png";
import mamatha from "../assets/testimonials/img_1.png";

// Testimonials Section
function Testimonials() {
    const testimonials = [
        {
            text: "I highly recommend Divakara for his exceptional work ethic and dedication as a software engineer. His proficiency in DSA, SQL, and Oracle were instrumental in delivering robust software solutions.",
            name: "Utkarsh Mathur",
            role: "Lead Engineer at Samsung",
            image: utkarsh,
        },
        {
            text: "I enthusiastically endorse Divakar for his remarkable expertise in DSA, Spring, and Java. His problem-solving abilities and willingness to help others are truly commendable.",
            name: "Kadiyam Jyothirmai",
            role: "Senior Software Engineer at Accolite Digital",
            image: jyothi,
        },
        {
            text: "Divakar's exceptional proficiency in the Spring Framework, Java programming, React, and web design is truly praiseworthy. He is a superb match for teams seeking a resourceful developer.",
            name: "Mamatha Mudunuri",
            role: "Senior Software Engineer at Accolite Digital",
            image: mamatha,
        },
    ];

    return (
        <section id="testimonials" className="py-20 px-4 bg-gray-800/30">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">
                    Testimonials
                </h2>
                <p className="text-gray-400 text-lg max-w-3xl mx-auto text-center mb-12">
                    Grateful for the kind words from my esteemed colleagues, reflecting their experiences working alongside me in the dynamic field of software development. Their testimonials speak volumes about my collaborative spirit, technical prowess, and dedication to achieving excellence.
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center">
                            <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full mb-4"
                            />
                            <h3 className="text-blue-400 font-bold text-lg">{testimonial.name}</h3>
                            <p className="text-gray-400 text-sm">{testimonial.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
