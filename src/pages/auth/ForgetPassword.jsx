import React from "react";
import { Link } from "react-router-dom";
// Icons
import { RiMailLine } from "react-icons/ri";

const ForgetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] text-white mb-8">
          Reset <span className="text-primary">Password</span>
        </h1>
        <form className="mb-8">
          <div className="relative mb-8">
            <RiMailLine className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
            <input
              type="email"
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Email Address"
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary text-black uppercase font-bold text-sm w-full py-3 px-4 rounded-lg"
            >
              Send Instructions
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center gap-4">
          <span className="flex items-center gap-2">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary hover:text-gray-100 transition-colors"
            >
              Log in
            </Link>
          </span>
          <span className="flex items-center gap-2">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-primary hover:text-gray-100 transition-colors"
            >
              Sign up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
