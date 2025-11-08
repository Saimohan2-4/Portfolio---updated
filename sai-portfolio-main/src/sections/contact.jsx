import { useState } from "react";
import Typography from "../components/general/typography"
import { email, phone } from "../lib/configurables";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="bg-white dark:bg-gray-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header Button */}
        <div className="flex justify-center mb-12">
          <button className="px-8 py-3 border-2 border-black text-black font-bold text-lg hover:bg-black hover:text-white transition-colors">
            CONTACT
          </button>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <Typography className="text-gray-700 text-lg leading-relaxed">
            What's next? Feel free to reach out to me if you are looking for a data analyst, have a query, or simply want to connect.
          </Typography>
        </div>

        {/* Separator */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-gray-400">---</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="ENTER YOUR NAME"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-black bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="ENTER YOUR EMAIL"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-black bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <input
                type="tel"
                name="phone"
                placeholder="PHONE NUMBER"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-black bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="YOUR MESSAGE"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-black bg-transparent text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black resize-none"
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-1 h-px bg-gray-300"></div>
              <button
                type="submit"
                className="px-12 py-3 bg-black text-white font-bold hover:white hover:text-black  hover:bg-white transition-colors mx-4"
              >
                SUBMIT
              </button>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactSection