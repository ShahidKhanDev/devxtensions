import { FaGithub } from "react-icons/fa";

const GitHubButton = ({
  href,
  label = "Give us a star",
  colorScheme = "dark",
  size = "large",
}) => {
  const buttonStyles = `
    flex items-center justify-center p-2 text-center rounded-md 
    ${size === "large" ? "text-md" : "text-sm"}
    ${
      colorScheme === "dark"
        ? "bg-gray-800 text-gray-100 hover:bg-gray-700"
        : "bg-gray-200 text-gray-900 hover:bg-gray-300"
    }
    transition-colors duration-300
    font-inter
  `;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonStyles}
    >
      <FaGithub size={20} className="inline-block mr-2" />
      {label}
    </a>
  );
};

export default GitHubButton;
