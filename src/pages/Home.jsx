import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import { Home_Verbase } from "../const/pageText";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f2f6ff] via-white to-[#e0f7fa] px-6 py-20 text-center md:text-left flex items-center">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-blue-700 mb-4"
        >
          Hello, I’m Ritu ✨
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-l text-gray-700 mb-6"
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
            to="/about"
            className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold"
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
        </motion.div>
      </div>
    </main>
  );
}
