import { Button } from "antd";
import * as motion from "motion/react-client";
import Scroll from "./Scroll";

const Content = () => {
  return (
    <main className="place-items-center px-5 mb-20 md:mb-72.5">
      <span className="bg-white mt-16 mb-6 px-2 py-1 rounded-[12.5rem] inline-flex gap-2 items-center text-[#007aff]">
        <span className="bg-[#007aff] text-white rounded-[12.5rem] px-2 h-4.25 pb-1 flex justify-center items-center">
          •••
        </span>
        #1 iMessage Automation Tool
      </span>
      <h1 className="text-[4rem] font-extrabold">
        <span className="text-[#007aff]">iMessage</span> Automation
        <br />
        for Teams and AI
        <br />
        Workflows.
      </h1>
      <div className="hidden lg:block">
        <motion.img
          src="/images/left-1.svg"
          alt="bird"
          className="absolute top-75 left-[8%]"
          initial={{ y: 800, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <img
          src="/images/left-2.svg"
          alt="bird"
          className="absolute top-90 left-[17%]"
        />
        <motion.img
          src="/images/left-2.svg"
          alt="bird"
          className="absolute top-90 left-[17%]"
          initial={{ y: 800, opacity: 0 }}
          animate={{ y: 0, opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <motion.img
          src="/images/right-1.svg"
          alt="bird"
          className="absolute top-82.5 right-[16%]"
          initial={{ y: 800, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
        <img
          src="/images/right-2.svg"
          alt="bird"
          className="absolute top-130 right-[13%]"
        />
        <motion.img
          src="/images/right-2.svg"
          alt="bird"
          className="absolute top-130 right-[13%]"
          initial={{ y: 800, opacity: 0 }}
          animate={{ y: 0, opacity: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>
      <p className="description">
        Coup lets you, your team, or AI workflows send iMessages directly from
        your phone number, running securely on your Mac or Mac Mini.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 w-full justify-center items-center mb-10">
        <Button
          type="primary"
          size="large"
          className="rounded-[3.125rem]! h-11.5! w-full! sm:w-fit!"
        >
          Get Started
        </Button>
        <Button
          size="large"
          className="rounded-[3.125rem]! border! border-[#6c788f]! h-11.5! w-full!  sm:w-fit!"
          icon={
            <img
              src="/images/apple.svg"
              width={18.42}
              height={22}
              alt="apple"
            />
          }
        >
          <span className="border-l border-l-[#8c97a8] pl-3">
            Download the Mac app
          </span>
        </Button>
      </div>
      <div className="md:hidden">
        <Scroll />
      </div>
    </main>
  );
};

export default Content;
