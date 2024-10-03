import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/relishgupta" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/relish-gupta/" },
  { icon: <FaEnvelope />, path: "https://mail.google.com/mail/?view=cm&fs=1&to=guptarelish333@gmail.com" }, 
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.path}
          target="_blank" 
          rel="noopener noreferrer" 
          className={iconStyles}
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
