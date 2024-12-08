export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  imageUrl: string;  // Nuevo campo para la imagen del proyecto
}

export const projects: Project[] = [
  {
    title: "Project One",
    year: 2023,
    description:
      "In this project, I designed a simple and engaging landing page for a surf shop. The page includes features like promotions, social media links, and a user-friendly layout, showcasing my skills in creating clean and functional web designs.",
    url: "https://primer-proyecto-roan.vercel.app",
    imageUrl: "surf.jpeg",  // Ruta de la imagen
  },
  {
    title: "Project Two",
    year: 2023,
    description:
      "I developed a web app with CRUD functionality to manage data for users applying for study or working holiday visas. The app enables easy addition, update, and retrieval of user information, demonstrating my ability to create efficient and user-friendly data management systems.",
    url: "https://segundo-proyecto-flax.vercel.app",
    imageUrl: "australia.png",  // Ruta de la imagen
  },
  {
    title: "Project Three",
    year: 2023,
    description:
      "In this project, we developed an application that connects to an API providing weather-related data. We focused on displaying the air quality in a specific area to the user. The information is supported by numerical values, graphs, and additional details.",
    url: "https://tercer-proyecto-mu.vercel.app",
    imageUrl: "airq.jpeg",  // Ruta de la imagen
  },
  {
    title: "Project Four",
    year: 2023,
    description:
      "This project was developed for a restaurant in Constitución. Users can make reservations, learn about the restaurant's history, get in touch with the team, and more..",
    url: "https://cuarto-proyecto.vercel.app",
    imageUrl: "burger.jpeg",  // Ruta de la imagen
  },
];

