import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <>
      <div className="h-screen relative overflow-hidden">
        <header className="max-w-[1200px] text-center m-auto grid place-content-center h-[40vh]">
          <div className=" flex flex-col items-center">
            <h3 className=" text-sm mb-4 text-slate-600">
              The Leader in Technology Learning
            </h3>
            <h1 className="text-slate-800 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight">
              Welcome to Edify College of IT
            </h1>
            <div className="mt-8 flex gap-4">
              <Link href={"/login"}>
                <button className="bg-[#1552A2] px-5 py-2 rounded-md text-white hover:bg-[#1552a2e8] transition-all duration-150">
                  Login
                </button>
              </Link>
              <Link href={"/"}>
                <button className="px-5 py-2 rounded-md border border-slate-400 font-light text-slate-500 hover:text-slate-700 hover:border-slate-500 transition-all duration-150">
                  Back to Website
                </button>
              </Link>
            </div>
          </div>
        </header>

        <div className="border absolute -bottom-3/4 left-1/2 -translate-x-1/2 bg-gradient-to-tr from-blue-300 to-green-300 blur-lg opacity-50 h-[1000px] w-[1000px] rounded-full"></div>
      </div>
    </>
  );
};

export default index;
