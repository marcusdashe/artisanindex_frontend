import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
const inter = Inter({ subsets: ["latin"] });
import { useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animation";
// import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

// dotenv.config();

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const redirect = setTimeout(() => {
      router.replace("/login");
    }, 3000);

    return () => {
      clearTimeout(redirect);
    };
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-[##F0F0F0]">
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="flex items-center"
      >
        <motion.div variants={fadeInUp} className="w-20 h-20  bg-white mr-4">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            layout="responsive"
            width={100}
            height={100}
          />
        </motion.div>
        <motion.h1
          variants={fadeInUp}
          className="text-white text-2xl font-bold"
        >
          Welcome to MyApp
        </motion.h1>
      </motion.div>
    </div>
  );
}
