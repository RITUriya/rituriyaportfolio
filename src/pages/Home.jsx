import React from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { Home_Verbase, Home_Name } from "../const/pageText";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f2f6ff] via-white to-[#e0f7fa] px-6 py-20 text-center md:text-left flex items-center home-container">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="home-title text-5xl font-extrabold text-blue-700 mb-4"
        >
          {Home_Name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-l text-gray-700 mb-6 home-description"
        >
          {Home_Verbase}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-4 flex-wrap justify-center md:justify-start mb-8"
        >
          <Link
            to="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow"
          >
            View Projects
          </Link>
          <Link
            to="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow"
          >
            About Me
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center md:text-left"
        >
          <a
            href="/Ritu Riya-Software Engineer-Resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-blue-700"
          >
            <Download className="w-5 h-5" /> Download My CV
          </a>
        </motion.div>{" "}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center text-blue-600  md:text-left"
        >
          <div className="mb-auto mt-10 flex flex-col md:flex-row gap-10 text-center">
            <div>
              <p className="text-lg font-medium">
                {" "}
                <a
                  href="mailto:rituriya093@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  📧 Email
                </a>
              </p>
            </div>
            <div>
              <p className="text-lg font-medium">
                {" "}
                <a
                  href="https://www.linkedin.com/in/ritur06/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  💼 LinkedIn
                </a>
              </p>
            </div>
            <div>
              <p className="text-lg font-medium">
                {" "}
                <a
                  href="https://github.com/RITUriya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  👨‍💻 GitHub
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
