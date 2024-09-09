import Image from "next/image";

export default function About() {
  return (
    <div
      className="w-full py-12 lg:py-20 bg-background flex flex-col lg:flex-row items-center lg:justify-between px-4 lg:px-16 mx-auto max-w-6xl"
      id="about"
    >
      {/* Text Section */}
      <div className="w-full lg:w-1/2 flex flex-col space-y-6 lg:space-y-8">
        <div className="pb-4 lg:pb-6">
          <h2 className="text-3xl lg:text-4xl font-bold font-header text-primary">
            About Me..
          </h2>
        </div>
        <p className="text-base lg:text-lg text-primary leading-relaxed">
          I am a web development professional with a postgraduate degree in Web
          Development and hands-on experience in building responsive
          applications. As a Software Engineer at iPOTS, I led the development
          of the iAccess platform, focusing on accessibility and user-centric
          design while working collaboratively in cross-functional teams.
        </p>
        <p className="text-base lg:text-lg text-primary leading-relaxed">
          I specialize in HTML, CSS, JavaScript, React, and Node.js, enabling me
          to create scalable, high-performance web applications. My skills
          extend to both front-end and back-end development, ensuring seamless
          user experiences and efficient data management.
        </p>
        <p className="text-base lg:text-lg text-primary leading-relaxed">
          Key projects include <strong>Boulon</strong>, a fashion e-commerce
          site using Node.js and MongoDB, and <strong>FootLMS</strong>, a
          Laravel-based system for football player data management. These
          projects highlight my expertise in full-stack development and secure
          coding practices.
        </p>
        <p className="text-base lg:text-lg text-primary leading-relaxed">
          My work at iPOTS underscores my dedication to accessibility, with a
          focus on creating inclusive web solutions. This commitment is also
          evident in personal projects like <strong>Bill Evader</strong>, where
          I led a team to develop an educational game with an emphasis on
          interactive design.
        </p>
      </div>
      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-8 lg:mt-0">
        <Image
          src="/aboutpic.svg"
          alt="man in front of desktop"
          width={700}
          height={700}
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}
