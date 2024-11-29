import { MdOutlineContentCopy } from "react-icons/md";
import { MdOutlineInstallDesktop } from "react-icons/md";

const ExtensionCard = ({ extension, handleCopy }) => {
  const { id, name, description, installCommand, imageUrl } = extension;

  return (
    <div
      key={extension.id}
      className="p-4 pb-6 transition duration-200 transform bg-gray-800 rounded-lg shadow-sm"
    >
      <div className="h-[100px] text-center">
        <img
          src={imageUrl}
          alt={name}
          className="max-w-[85%] max-h-[72px] relative top-1/2"
          style={{ transform: "translate(0, -50%)" }}
        />
      </div>

      <h3 className="mb-2 text-xl font-semibold text-white font-inter">
        {name}
      </h3>
      <p
        // title={description || "No description available."}
        className="mb-4 text-sm leading-relaxed text-gray-400 font-roboto line-clamp-2 h-[44px]"
      >
        {description || "No description available."}
      </p>
      <hr className="my-3 border-gray-700" />
      <div className="mb-4 overflow-x-auto rounded-sm bg-dark scrollbar-hidden">
        <code className="block p-3 font-mono text-sm text-gray-200 whitespace-nowrap">
          {installCommand}
        </code>
      </div>

      <div className="flex gap-3">
        {/* Copy Command Button */}
        <button
          onClick={() =>
            handleCopy(
              // `code --install-extension ${name
              //   .toLowerCase()
              //   .replace(/\s+/g, "-")}`
              installCommand
            )
          }
          className="flex items-center justify-center w-1/2 px-4 py-2 text-base font-medium text-white transition bg-gray-700 rounded hover:bg-gray-600"
        >
          <MdOutlineContentCopy className="w-4 h-4 mr-2 text-white" />
          Copy
        </button>
        {/* Auto-Install Button */}
        <a
          href={`vscode:extension/${extension.identifier}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-1/2 px-4 py-2 text-base font-medium text-gray-800 transition rounded bg-btn"
        >
          <MdOutlineInstallDesktop className="w-5 h-5 mr-2 text-gray-800" />
          Install
        </a>
      </div>
    </div>
  );
};

export default ExtensionCard;
