import Link from "next/link";
import React from "react";

const Hoome = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h2 className="font-bold text-4xl ">Welcome to My Blog</h2>
      <p className="text-xl text-center">
        Here you'll find a variety of articles and tutorials on topics such as
        web development, software engineering, and programming languages.{" "}
      </p>
      <Link href="/" className="hover:underline font-extrabold ">
        View all Posts
      </Link>
    </div>
  );
};

export default Hoome;
