import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaEnvelope, FaUser, FaPhone } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import image from "../../../images/contact.jpg";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dt36c1b", // Your service ID
        "template_le3kdyd", // Your template ID
        form.current,
        "HY7Ydznj3x8Z-59GN" // Your public key
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent",
            html: "Your message has been successfully sent!<br/>I will contact you soon.",
          });
          form.current.reset(); // Reset the form after successful submission
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `Something went wrong! ${error.text}`,
          });
        }
      );
  };

  return (
    <div className="w-full ">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2">
        <div className="w-full p-2 sm:p-0">
          <img
            src={image}
            alt="Contact Us"
            className="w-full opacity-50 h-full object-cover"
          />
        </div>
        <div className="w-full p-3 flex flex-col items-center">
          <h2 className="text-3xl font-bold JosefinSans mr-10">
            Send me a message
          </h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full p-5 JosefinSans md:p-10 space-y-4"
          >
            <div className="flex JosefinSans items-center border-b-2 border-gray-300 py-2">
              <FaUser className="text-gray-500 mr-3" />
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full focus:outline-none"
                required
              />
            </div>

            <div className="flex items-center JosefinSans border-b-2 border-gray-300 py-2">
              <FaEnvelope className="text-gray-500 mr-3" />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full focus:outline-none"
                required
              />
            </div>

            <div className="flex items-center JosefinSans border-b-2 border-gray-300 py-2">
              <FaPhone className="text-gray-500 mr-3" />
              <input
                type="tel"
                name="user_phone"
                placeholder="Your Phone"
                className="w-full focus:outline-none"
              />
            </div>

            <div className="flex items-center JosefinSans border-b-2 h-20 border-gray-300 py-2">
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 JosefinSans text-white py-2 px-4 rounded-md flex justify-center items-center space-x-2 hover:bg-blue-600 transition"
            >
              <span className="JosefinSans">Send Message</span>
              <FiSend />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
