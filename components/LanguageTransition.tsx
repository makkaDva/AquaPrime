"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "./LanguageContext";

export const LanguageTransition = ({ children }: { children: React.ReactNode }) => {
  const { language } = useLanguage();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={language}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.4 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
