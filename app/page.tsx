"use client";
import Image from "next/image";
import { Button } from "flowbite-react";
import BlogList from "@/components/BlogList";
import Hoome from "./home/page";

export default function Home() {
  return (
    <div className="">
      <Hoome/>
      <BlogList />
      <h1>Home</h1>
    </div>
  );
}
