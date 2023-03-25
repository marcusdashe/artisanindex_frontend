import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import { useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const redirect = setTimeout(() => {
      router.replace("/login");
    }, 2000);

    return () => {
      clearTimeout(redirect);
    };
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[#3b302f]">
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="flex items-center"
      >
        <motion.div variants={fadeInUp} className="w-full h-40 mr-4">
          <img src="/assets/logo.png" alt="Logo" width={80} height={80} />
          <motion.h1 variants={fadeInUp} className="text-white text-4xl mt-5">
            C-STEMP Artisans Information Repository
          </motion.h1>
        </motion.div>
      </motion.div>
    </div>
  );
}
