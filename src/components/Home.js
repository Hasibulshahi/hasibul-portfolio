import { motion } from "framer-motion";
import "../styles/Sections.css";

const Home = () => {
  return (
    <section id="home">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Hi, I'm John Doe</h1>
        <p>I build modern web applications.</p>
      </motion.div>
    </section>
  );
};

export default Home;
