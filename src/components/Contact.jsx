import React, { useState } from "react";
import { useForm, ValidationError } from '@formspree/react';
import Swal from "sweetalert2";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaSpinner,
} from "react-icons/fa";
import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

const Contact = () => {
  const [state, handleSubmit] = useForm("xzzkpnyk");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Show success or error messages
  React.useEffect(() => {
    if (state.succeeded) {
      Swal.fire({
        title: "Message Sent!",
        text: "Thank you for your message! I will get back to you soon.",
        icon: "success",
        confirmButtonColor: "#4F46E5",
        confirmButtonText: "OK",
        timer: 5000,
        timerProgressBar: true,
      });
      
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
    
    if (state.errors && state.errors.length > 0) {
      Swal.fire({
        title: "Error!",
        text: "Failed to send message. Please try again later.",
        icon: "error",
        confirmButtonColor: "#EF4444",
        confirmButtonText: "Try Again",
      });
    }
  }, [state.succeeded, state.errors]);

  return (
    <section
      id="contact"
      className="section-padding bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto p-4 lg:p-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-400 text-center mb-12">
          Have a project in mind? Let's work together!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Name *
            </label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={state.submitting}
                className="w-full pl-10 pr-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white transition duration-300 disabled:bg-gray-700 disabled:cursor-not-allowed outline-none"
                placeholder="Your Name"
              />
            </div>
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Email *
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={state.submitting}
                className="w-full outline-none pl-10 pr-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white transition duration-300 disabled:bg-gray-700 disabled:cursor-not-allowed"
                placeholder="your.email@example.com"
              />
            </div>
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Message *
            </label>
            <div className="relative">
              <FiMessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={state.submitting}
                rows="6"
                className="w-full outline-none pl-10 pr-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-gray-800 text-white transition duration-300 resize-none disabled:bg-gray-700 disabled:cursor-not-allowed"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-lg"
          >
            {state.submitting ? (
              <>
                <FaSpinner className="animate-spin w-5 h-5" />
                Sending...
              </>
            ) : (
              <>
                <FaPaperPlane className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </form>

        {/* Contact Info Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
          {/* Email Card */}
          <div className="p-6 bg-gray-800 rounded-lg hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaEnvelope className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">
              Email
            </h3>
            <p className="text-gray-400">
              mdsabbir5820@gmail.com
            </p>
          </div>

          {/* Location Card */}
          <div className="p-6 bg-gray-800 rounded-lg hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaMapMarkerAlt className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">
              Location
            </h3>
            <p className="text-gray-400">
              Dhaka, Bangladesh
            </p>
          </div>

          {/* Availability Card */}
          <div className="p-6 bg-gray-800 rounded-lg hover:shadow-lg transition duration-300">
            <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-white mb-2">
              Availability
            </h3>
            <p className="text-gray-400">
              Open for projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;