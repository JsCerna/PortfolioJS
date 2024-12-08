import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.instagram} target="_blank">
        <Image
          src="/profile.jpeg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        JOSE CERNA
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
        Hello! I'm Jose Miguel Cerna Torres, a business administration graduate who furthered my
            studies in commercial engineering. Embracing the digital shift post-pandemic, I embarked
            on a Full Stack MERN Developer Bootcamp at Universidad del Desarrollo.
        </p>
        <p>
        Although I don't yet have formal experience in IT, I am deeply interested in digital entrepreneurship, digital marketing, and the management and logistics involved in these fields. Surfing is one of my passions, and recently, I have developed an interest in photography. I am highly motivated to learn and explore new areas that will allow me to grow professionally in these fields, and I am excited about contributing to innovative projects.
        </p>
      </div>
    </section>
  );
}
