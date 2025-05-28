import React from "react";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Faq from "../components/FAQ";

const ContactForm = () => {
  return (
    <div className="font-sans text-base text-gray-800">
      <Navbar refs={{}} />

      <section className="bg-gray-50 py-20 px-6 md:px-12 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-extrabold">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
              Touch
            </span>
          </h2>
          <p className="mt-4 text-gray-600">
            Have a question or want to discuss a project? We'd love to hear from
            you. Fill out the form or use our contact details.
          </p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
          {/* Left: Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 basis-full lg:basis-[60%]">
            <h3 className="text-xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="Subject"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Your Message *
                </label>
                <textarea
                  rows="5"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-md font-semibold shadow hover:shadow-lg transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Information */}
          <div className="bg-white rounded-xl p-8 shadow-lg basis-full lg:basis-[30%] relative overflow-hidden group transition">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-50 opacity-0 group-hover:opacity-100 transition duration-500 rounded-xl pointer-events-none z-0" />
            
            <div className="relative z-10">
              <h3 className="text-xl font-semibold mb-6 text-gray-900">Contact Information</h3>

              <div className="space-y-6 text-sm text-gray-700">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 flex items-center justify-center rounded-full text-purple-600 text-xl">
                    <FiMapPin />
                  </div>
                  <div>
                    <p className="font-semibold">Our Location</p>
                    <p>Sydney, NSW, Australia</p>
                    <p>Hetauda, Nepal</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 flex items-center justify-center rounded-full text-purple-600 text-xl">
                    <FiPhone />
                  </div>
                  <div>
                    <p className="font-semibold">Phone Number</p>
                    <p>+61 404 672 891</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 flex items-center justify-center rounded-full text-purple-600 text-xl">
                    <FiMail />
                  </div>
                  <div>
                    <p className="font-semibold">Email Address</p>
                    <p>contact@shreejadigital.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-100 flex items-center justify-center rounded-full text-purple-600 text-xl">
                    <FiClock />
                  </div>
                  <div>
                    <p className="font-semibold">Working Hours</p>
                    <p>Mon–Fri: 8:00 AM – 6:00 PM</p>
                    <p>Sat–Sun: 10:00 AM – 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq />
      <Footer />
    </div>
  );
};

export default ContactForm;
