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
          I am a web developer passionate about building responsive, accessible,
          and user-friendly applications. With a postgraduate degree in Web
          Development from Humber College, I have worked across front-end and
          back-end technologies to create scalable solutions that just work.
        </p>
        <p className="text-base lg:text-lg text-primary leading-relaxed">
          Professionally, I have built and optimized software at iPOTS,
          Lodestone, and the University of Toronto, tackling everything from
          accessibility-focused front-end interfaces to scalable back-end
          systems. I enjoy crafting clean, maintainable code that solves
          real-world problems, whether it is ARIA-compliant components,
          performance-optimized apps, or efficient data management workflows.
        </p>
        <p className="text-base lg:text-lg text-primary leading-relaxed">
          My favorite projects include <strong>Boulon</strong>, a full-stack
          fashion e-commerce app; <strong>FootLMS</strong>, a Laravel system for
          managing football player data; and <strong>Bill Evader</strong>, an
          educational game I led to make learning about finances fun and
          interactive. These experiences sharpened my skills in HTML, CSS,
          JavaScript, React, Node.js, PHP, and more.
        </p>
        <p className="text-base lg:text-lg text-primary leading-relaxed">
          When I am not coding, I am exploring new web technologies, optimizing
          workflows, and making sure every project I touch is accessible,
          usable, and a little bit fun.
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
