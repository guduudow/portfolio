import "./main.css";
import {
  FaLinkedin,
  FaGithub,
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
import Image from "next/image";
import Link from "next/link";

export default function Main() {
  return (
    <>
      {/* Main Container */}
      <div
        className="w-full pt-20 md:pt-24 py-12 bg-background relative z-20"
        id="main"
      >
        <div className="max-w-6xl w-full h-full mx-auto flex flex-col lg:flex-row items-center justify-center px-4 lg:px-0">
          {/* Text Section */}
          <div
            className="w-full lg:w-1/2 lg:mr-12 mb-8 lg:mb-0 text-center lg:text-left relative z-10"
            id="text-container"
          >
            <p className="font-header text-2xl md:text-3xl lg:text-[2.5rem] leading-snug md:leading-[1.8] font-normal text-primary max-w-[90%] mx-auto lg:mx-0">
              hello! my name is
            </p>
            <div className="name-container">
              <span className="font-main tracking-[-0.07em] text-4xl md:text-5xl lg:text-[6rem] font-bold text-primary leading-tight">
                ederes
              </span>
              <span className="font-main tracking-[-0.07em] text-4xl md:text-5xl lg:text-[6rem] font-bold text-primary leading-tight">
                {" "}
                gure
              </span>
            </div>
            <p className="font-header text-2xl md:text-3xl lg:text-[2.5rem] leading-snug md:leading-[1.8] font-normal text-primary max-w-[90%] mx-auto lg:mx-0 mb-8">
              and i am a web developer.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-6 justify-center lg:justify-start">
              <Link
                href="/ederesgure_portfolio_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                className="px-6 md:px-8 py-3 bg-accent text-lg md:text-[1.1em] font-medium text-background rounded cursor-pointer"
              >
                View Resume
              </Link>
              <div className="flex gap-4 px-8 py-3 bg-transparent text-lg md:text-[1.1em] font-bold text-primary rounded cursor-pointer flex-shrink-0">
                <a href="https://www.linkedin/in/ederesgure">
                  <FaLinkedin className="w-10 md:w-12 h-10 md:h-12 text-primary" />
                </a>
                <a href="https://www.github.com/guduudow">
                  <FaGithub className="w-10 md:w-12 h-10 md:h-12 text-primary" />
                </a>
              </div>
            </div>
          </div>
          {/* Image Section */}
          <div
            className="w-full lg:w-1/2 flex justify-center relative z-10"
            id="image-container"
          >
            <Image
              src="/mainpic.svg"
              alt="main picture of hero section"
              height={283}
              width={396}
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="w-full pt-24 bg-accent relative z-10" id="skills">
        <div className="w-full max-w-screen-xl mx-auto h-full px-4">
          <h4 className="text-2xl font-semibold text-background mb-8 md:mb-0 md:text-left text-center">
            skills
          </h4>
          <div className="relative w-full overflow-hidden mt-16">
            <div className="absolute inset-0 bg-gradient-mask"></div>
            <div className="flex items-center w-full relative">
              <div className="whitespace-nowrap animate-slide pb-16 flex-shrink-0">
                <LogoIcons />
              </div>
              <div className="whitespace-nowrap animate-slide pb-16 flex-shrink-0">
                <LogoIcons />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function LogoIcons() {
  const icons = [
    <FaHtml5
      key="html"
      className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 text-background"
    />,
    <FaCss3Alt
      key="css"
      className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 text-background"
    />,
    <FaJs
      key="js"
      className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 text-background"
    />,
    <FaPhp
      key="php"
      className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 text-background"
    />,
    <FaDatabase
      key="sql"
      className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 text-background"
    />,
    <SiMongodb
      key="mongo"
      className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 text-background"
    />,
    <FaNodeJs
      key="node"
      className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 text-background"
    />,
    <SiExpress
      key="express"
      className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 text-background"
    />,
    <FaReact
      key="react"
      className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 text-background"
    />,
    <FaLaravel
      key="laravel"
      className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 text-background"
    />,
    <SiDotnet
      key="asp"
      className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 text-background"
    />,
    <SiNextdotjs
      key="next"
      className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 text-background"
    />,
    <SiBootstrap
      key="bootstrap"
      className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 text-background"
    />,
    <SiTailwindcss
      key="tailwind"
      className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 text-background"
    />,
    <FaGitAlt
      key="git"
      className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 text-background"
    />,
  ];

  return (
    <>
      {icons.map((icon) => (
        <span key={icon.key} className="inline-block mx-4">
          {icon}
        </span>
      ))}
    </>
  );
}
