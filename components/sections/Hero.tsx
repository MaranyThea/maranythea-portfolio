import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full min-h-[70vh] flex items-center px-6 md:px-16">
      
      {/* LEFT: Profile */}
      <div className="w-1/4 hidden md:flex justify-center">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500 shadow-md">
          <Image
            src="/images/MaranyThea_Profile.jpeg"
            alt="Profile Picture"
            width={192}
            height={192}
            className="object-cover"
          />
        </div>
      </div>

      {/* RIGHT: Text */}
      <div className="w-full md:w-3/4 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hi, I&apos;m{" "}
          <span className="text-blue-500">
            Marany THEA
          </span>
        </h1>

        <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-xl">
          A Computer Science student & developer who builds modern
          web apps with Next.js.
        </p>

        <div className="mt-6 flex gap-4 justify-center md:justify-start">
          
          {/* Contact Me */}
          <a
            href="#contact"
            className="px-6 py-3 rounded-full bg-blue-500 text-white
                       hover:bg-blue-600 transition-all duration-300"
          >
            Contact Me
          </a>

          {/* About Me */}
          <a
            href="#about"
            className="px-6 py-3 rounded-full border border-gray-400
                       text-white bg-transparent
                       hover:bg-white/10 hover:border-white
                       transition-all duration-300"
          >
            About Me
          </a>

        </div>
      </div>

    </section>
  );
}