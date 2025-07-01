import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <nav className="footer  flex justify-center items-center sticky bottom-0">
      <div className="max-w-6xl mx-auto px-6 py-4 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <div className="mb-auto mt-auto flex flex-col md:flex-row gap-10 text-center  justify-center align-middle items-center ">
            {" "}
            <div className="">
              <p className="text-md font-medium">
                {" "}
                © {new Date().getFullYear()} Ritu Riya. All rights reserved.
              </p>
            </div>
          </div>{" "}
        </motion.div>
      </div>
    </nav>
  );
};

export default Footer;
