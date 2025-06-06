import profileImage from "../assets/profile.jpg";

const About = () => {
  return (
    <main className="min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img
          src={profileImage}
          alt="Ritu"
          className="rounded-2xl shadow-xl w-full"
        />
        <div>
          <h2 className="text-3xl font-bold text-blue-700 mb-4">About Me</h2>
          <p className="mb-4">
            Hi 👋 I’m Ritu — a frontend developer who transitioned from testing
            to full-stack development.
          </p>
          <p className="mb-4">
            I work with React, Tailwind, Spring Boot, and Azure DevOps. I enjoy
            building polished, accessible, and scalable UI experiences.
          </p>
          <p className="mb-4">
            In my free time, I’m either cycling 🚴, experimenting with perfumes
            🌸, or nurturing my balcony garden 🌿.
          </p>
        </div>
      </div>
    </main>
  );
};
export default About;
