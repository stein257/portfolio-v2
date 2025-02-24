import linkedinImage from "../../assets/logos/linkedin.png";
import githubImage from "../../assets/logos/github.png";
import { useState } from "react";

const ComputerButton = ({ href, alt, isVisible, src }) => {
  return (
    <a href={href} target={"_blank"} rel={"noreferrer"}>
      <img
        alt={alt}
        src={src}
        className={"w-[4vw] h-[4vw] rounded-full cursor-pointer hover:scale-[1.15]"}
        style={{
          transform: isVisible ? "scaleY(1)" : "scaleY(0)",
          transition: isVisible
            ? "all 0.3s ease"
            : "all 0.3s cubic-bezier(0.550, 0.085, 0.680, 0.530)",
        }}
      />
    </a>
  );
};

const Computer = ({ children }) => {
  const [showButtons, setShowButtons] = useState(false);

  const buttons = [
    {
      href: "https://www.linkedin.com/in/sim%C3%B3n-stein/",
      alt: "Linkedin Logo",
      src: linkedinImage.src,
    },
    {
      href: "https://github.com/stein257",
      alt: "Github Logo",
      src: githubImage.src,
    },
  ];

  return (
    <section className="w-[11vw] h-[29vw] absolute right-[12.25vw] top-[5vw] flex justify-between items-center flex-col py-[3vw]">
      {children}
      {buttons.map((button, index) => (
        <ComputerButton key={index} {...button} isVisible={showButtons} />
      ))}
      <button
        className={
          "w-[4vw] h-[4vw] bg-stroke rounded-full border-none cursor-pointer hover:scale-[1.1] transform duration-500 ease"
        }
        onClick={() => setShowButtons(!showButtons)}
      />
    </section>
  );
};

export default Computer;
