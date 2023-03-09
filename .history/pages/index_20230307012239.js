import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

import { useEffect } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const redirect = setTimeout(() => {
      router.push("/login");
    }, 3000);

    return () => {
      clearTimeout(redirect);
    };
  }, [router]);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-500">
      <motion.div
        initial="initial"
        animate="animate"
        variants={stagger}
        className="flex items-center"
      >
        <motion.div
          variants={fadeInUp}
          className="w-16 h-16 rounded-full bg-white mr-4"
        >
          <Image
            src="/logo.png"
            alt="Logo"
            layout="responsive"
            width={64}
            height={64}
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
