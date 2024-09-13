import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const SocialContact = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebook className="text-blue-600 text-3xl" />,
      url: "https://www.facebook.com/robiussani.mubarok/", // Add your Facebook link here
    },
    {
      name: "Twitter",
      icon: <FaTwitter className="text-blue-400 text-3xl" />,
      url: "https://x.com/RobiusS4690",
    },
    {
      name: "Instagram",
      icon: <FaInstagram className="text-pink-500 text-3xl" />,
      url: "https://www.instagram.com/robiussani.mubarok/", // Add your Instagram link here
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin className="text-blue-700 text-3xl" />,
      url: "https://www.linkedin.com/in/robius-sani-mobarok/",
    },
    {
      name: "GitHub",
      icon: <FaGithub className="text-gray-800 text-3xl" />,
      url: "https://github.com/Robiu-Sani",
    },
  ];

  return (
    <section className="py-12 ">
      <div className="container mx-auto px-6 lg:px-8">
        <h1 className="text-4xl animationTimeline font-bold text-center text-gray-800 mb-8">
          Connect with Me
        </h1>
        <div className="flex animationTimeline justify-center gap-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col animationTimeline items-center text-gray-800 hover:text-blue-600"
            >
              {link.icon}
              <span className="text-lg mt-2">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialContact;
