import * as motion from "motion/react-client";
import { useVisible } from "../hooks/useVisible";
import Scroll from "./Scroll";

const Footer = () => {
  const { visible, setVisible } = useVisible();

  return (
    <footer className="relative w-full hidden md:block">
      <motion.img
        src="/images/cloud.png"
        alt="footer cloud"
        className="absolute -bottom-13.5 left-0 right-0 w-full"
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.img
        src="/images/bird-1.svg"
        alt="bird"
        className="absolute -bottom-8.75 lg:bottom-0 left-[18%] w-15 h-12.5 lg:w-25.75 lg:h-19.25"
        initial={{ y: 400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.img
        src="/images/bird-2.svg"
        alt="bird"
        className="absolute -bottom-3.75 lg:bottom-12.5 left-[35%] w-12.5 h-10 lg:w-22 lg:h-14.25"
        initial={{ y: 400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.img
        src="/images/bird-3.svg"
        alt="bird"
        className="absolute -bottom-12.5 lg:-bottom-7.5 left-[65%] w-17.5 h-15 lg:w-32 lg:h-13.5"
        initial={{ y: 400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.img
        src="/images/bird-4.svg"
        alt="bird"
        className="absolute -bottom-7.5 lg:bottom-0 left-[82%] w-17.5 h-12.5 lg:w-32.25 lg:h-25.5"
        initial={{ y: 400, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.img
        src="/images/bird-1.svg"
        alt="flying-bird-left"
        className="absolute w-15 h-12.5 lg:w-25.75 lg:h-19.25"
        initial={{ x: "0vw", y: "-20vh", display: "none" }}
        animate={{
          x: "100vw",
          y: "-80vh",
          display: `${visible ? "block" : "none"}`,
        }}
        transition={{ duration: 4, ease: "easeIn", delay: 2 }}
        onAnimationComplete={() => setVisible(false)}
      />
      <motion.img
        src="/images/bird-3.svg"
        alt="bird"
        className="absolute w-17.5 h-15 lg:w-32 lg:h-13.5"
        initial={{ x: "100vw", y: "-20vh", display: "none" }}
        animate={{
          x: "-20vw",
          y: "-50vh",
          display: `${visible ? "block" : "none"}`,
        }}
        transition={{ duration: 4, ease: "easeIn", delay: 2 }}
      />

      <Scroll />
    </footer>
  );
};

export default Footer;
