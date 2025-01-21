import React from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div>
      <div className="h-16  border-b-2 border-gray-500 py-3 ">
        <h1
          className="text-3xl h-full text-beautiful-primary bg-slate-950 w-fit px-2 m-2 rounded-2xl font-extrabold flex
         items-center"
        >
          Brianblogs <span className="text-4xl ">.</span>
        </h1>
        <form action="search" className="m-0 p-0">
          <input type="text" className="text-black rounded-full " placeholder="Search..." ></input>
          <Button variant="secondary"> </Button>
        </form>
      </div>
    </div>
  );
};

export default Header;
