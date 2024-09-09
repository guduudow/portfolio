import Image from "next/image";
import "./skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPhp,
  FaDatabase,
  FaNodeJs,
  FaReact,
  FaLaravel,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiBootstrap,
  SiTailwindcss,
  SiDotnet,
} from "react-icons/si";
export default function Skills() {
  return (
    <>
      <div className="skills-container" id="skills">
        <div className="skills-wrapper">
          <h4 className="text-2xl font-semibold text-background">skills</h4>
          <div className="stack-logos-wrapper">
            <div style={{ "--time": "15s;" } as React.CSSProperties}>
              <LogoIcons />
            </div>
            <div style={{ "--time": "15s;" } as React.CSSProperties}>
              <LogoIcons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function LogoIcons() {
  const icons = [
    <FaHtml5 key="html" />,
    <FaCss3Alt key="css" />,
    <FaJs key="js" />,
    <FaPhp key="php" />,
    <FaDatabase key="sql" />, // This represents MySQL
    <SiMongodb key="mongo" />,
    <FaNodeJs key="node" />,
    <SiExpress key="express" />,
    <FaReact key="react" />,
    <FaLaravel key="laravel" />,
    <SiDotnet key="asp" />, // Represents ASP.NET
    <SiNextdotjs key="next" />,
    <SiBootstrap key="bootstrap" />,
    <SiTailwindcss key="tailwind" />,
    <FaGitAlt key="git" />,
  ];

  return (
    <>
      {icons.map((icon) => (
        <span
          key={icon.key}
          className="label inline-block text-5xl text-background mx-4"
        >
          {icon}
        </span>
      ))}
    </>
  );
}
