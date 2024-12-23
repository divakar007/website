import { useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');

        const serviceID = 'service_v7y9lig'; // Replace with your EmailJS service ID
        const templateID = 'template_mhq3p5f'; // Replace with your EmailJS template ID
        const publicKey = 'wGv6cT8yhTXAksT8t'; // Replace with your EmailJS public key

        emailjs
            .send(serviceID, templateID, formData, publicKey)
            .then(() => {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error) => {
                console.error('Failed to send email:', error);
                setStatus('Failed to send message.');
            });
    };

    return (
        <section id="contact" className="py-20 px-4">
            <div className="container mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold text-white mb-12 text-center">
                    Get In Touch
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full bg-gray-800/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full bg-gray-800/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                    <textarea
                        placeholder="Message"
                        rows={5}
                        className="w-full bg-gray-800/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-400 to-violet-400 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity"
                    >
                        Send Message
                    </button>
                </form>
                {status && <p className="text-center text-gray-400 mt-4">{status}</p>}
            </div>
        </section>
    );
}

export default Contact;
