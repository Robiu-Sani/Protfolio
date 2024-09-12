import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaEnvelope, FaUser, FaPhone } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FaMessage } from "react-icons/fa6";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaFacebookMessenger,
  FaDiscord,
} from "react-icons/fa";

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
    <div className="w-full">
      <div className="container mx-auto grid justify-center items-start grid-cols-1 sm:grid-cols-2">
        <div className="w-full grid grid-cols-2 gap-1 sm:h-[80%] p-2 sm:p-0">
          <div className="w-full h-full border flex justify-center items-center flex-col">
            <FaWhatsapp size={40} color="green" />
            <p className="mt-2">Message on WhatsApp</p>
            <a
              href="https://wa.me/8801617688805"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              +8801617688805
            </a>
          </div>
          <div className="w-full h-full border flex justify-center items-center flex-col">
            <FaTelegramPlane size={40} color="blue" />
            <p className="mt-2">Message on Telegram</p>
            <a
              href="https://t.me/8801617688805"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              +8801617688805
            </a>
          </div>
          <div className="w-full h-full border flex justify-center items-center flex-col">
            <FaFacebookMessenger size={40} color="blue" />
            <p className="mt-2">Message on Messenger</p>
            <a
              href="https://www.facebook.com/messages/e2ee/t/8424805444225538"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Messenger Link
            </a>
          </div>
          <div className="w-full h-full border flex justify-center items-center flex-col">
            <FaDiscord size={40} color="purple" />
            <p className="mt-2">Message on Discord</p>
            <p className="text-blue-500">robiussani.mobarokd</p>
          </div>
        </div>
        <div className="w-full p-3 flex flex-col items-center">
          <h2 className="text-3xl font-bold JosefinSans mr-10">
            Send me a message
          </h2>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full p-5 flex flex-col gap-2 JosefinSans md:p-10 space-y-4"
          >
            <div className="w-full border relative rounded-md p-2">
              <label className="border flex justify-center items-center gap-2 rounded-sm absolute -top-3 px-3 text-sm bg-white">
                <FaUser className="text-gray-500 text-sm" />
                <span>Your Name</span>
              </label>

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full mt-2 outline-0 border-0"
                required
              />
            </div>

            <div className="w-full mb-7 border relative rounded-md p-2">
              <label className="border flex justify-center items-center gap-2 rounded-sm absolute -top-3 px-3 text-sm bg-white">
                <FaEnvelope className="text-gray-500 text-sm" />
                <span>Your Email</span>
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full mt-2 outline-0 border-0"
                required
              />
            </div>

            <div className="w-full mb-7 border relative rounded-md p-2">
              <label className="border flex justify-center items-center gap-2 rounded-sm absolute -top-3 px-3 text-sm bg-white">
                <FaPhone className="text-gray-500 text-sm" />
                <span>Your Phone</span>
              </label>
              <input
                type="tel"
                name="user_phone"
                placeholder="Your Phone"
                className="w-full mt-2 outline-0 border-0"
              />
            </div>

            <div className="w-full border relative rounded-md p-2">
              <label className="border flex justify-center items-center gap-2 rounded-sm absolute -top-3 px-3 text-sm bg-white">
                <FaMessage className="text-gray-500 text-sm" />
                <span>Your Message</span>
              </label>
              <textarea
                name="message"
                placeholder="Your Message"
                className="w-full h-[70px] mt-2 outline-0 border-0"
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
