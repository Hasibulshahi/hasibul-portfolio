import { useEffect } from "react";
import "../styles/Sections.css";

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll("section").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about">
      <div>
        <h2>About Me</h2>
        <p>I am a frontend developer with expertise in React and UI/UX design.</p>
      </div>
    </section>
  );
};

export default About;
