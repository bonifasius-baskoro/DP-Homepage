"use client";
import { FC, useState } from "react";
import SocialButtons from "./socialButtons";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

interface ColorBoxProps {
  color: "black" | "yellow";
}

const ContactUsBox: FC<ColorBoxProps> = ({ color }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleModal = () => setIsOpen(prev => !prev);

  const buttonClass = `rounded-3xl flex justify-center mx-24 md:mx-[40vw] h-12 ${
    color === "black" ? "bg-black-p text-yellow-p" : "bg-yellow-p text-black-p"
  }`;

  return (
    <>
      <motion.div
        className={buttonClass}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <button onClick={toggleModal}>Contact Us</button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative p-4 rounded-xl bg-black-p"
            >
              <SocialButtons />
              <motion.button
                className="absolute top-2 right-2 text-white"
                onClick={toggleModal}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <IoMdClose size={20} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactUsBox;