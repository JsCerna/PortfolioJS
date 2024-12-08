export const metadata = {
  title: "About",
  description: "About Me Section",
};

export default function About() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">About Me</h1>
      <div className="space-y-4">
        <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          I hold a degree in Bussiness administration with a
          specialization in Marketing and Finance from Universidad del
          Desarrollo, where I also completed a thesis project focused on
          launching a bike park. My responsibilities included leading marketing
          strategies, managing finances, and providing customer support,
          showcasing my ability to handle both operational and strategic tasks.
        </p>
        <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          During the pandemic, I pursued further studies in Commercial
          Engineering and developed a strong interest in technology,
          entrepreneurship, and marketing. I completed a Full Stack MERN
          Developer bootcamp, equipping myself with essential digital skills.
        </p>
        <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
          In Australia, I’ve gained experience in farm and warehouse roles,
          including as a Warehouse Supervisor. I managed inventory systems,
          optimized warehouse operations, coordinated logistics, and
          collaborated with teams to ensure efficient product distribution. My
          background reflects adaptability, leadership, and a commitment to
          leveraging technology in diverse roles.
        </p>
      </div>
    </section>
  );
}

