import React from "react";
import Link from "next/link";
import Image from "next/image";
// import motion from "motion";
import { motion } from "framer-motion";

const BlogList = () => {
  return (
    <>
      <div className="text-black pt-4 text-xl w-full flex justify-center gap-4 ">
        <Link href="/" className="hover:underline">
          All
        </Link>
        <Link href="/" className="hover:underline">
          Technology
        </Link>
        <Link href="/" className="hover:underline">
          Start Up
        </Link>
        <Link href="/" className="hover:underline">
          Lifestyle
        </Link>
      </div>
      <div className="bg-red h-64 w-64 outline m-5  pb-6 pt-0">
        <motion.div className="w-full pt-0 " whileHover={{ scale: 1.05 }}>
          <Image src="/Next-image.jpg" alt="next" width={256} height={350} />
        </motion.div>
        <h1>Yes </h1>
      </div>
    </>
  );
};

export default BlogList;
