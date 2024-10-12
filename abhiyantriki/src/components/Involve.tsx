import { Component } from "solid-js";

const Involve: Component = () => {
  return (
    <div
      id="getinvolved"
      class="m-16 flex w-full flex-col items-center justify-center rounded-lg p-10 shadow-lg"
    >
      <h1 class="m-5 text-4xl font-extrabold ">Join Us for Abhiyantriki!</h1>

      <a
        type="button"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfk7jtMHSv7ntDcgkGBHt46mHqVsqYYXxBpniSBt9st1SDv6Q/viewform?usp=sharing"
        class="inline-flex w-32 cursor-pointer items-center gap-x-2 rounded-lg bg-gradient-to-r from-teal-500 to-teal-600 px-4 py-3 text-xl font-medium text-white shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl focus:outline-none disabled:pointer-events-none disabled:opacity-50"
        target="_blank"
      >
        <p class="w-full rounded-full text-center font-sans text-2xl font-bold">
          Register
        </p>
      </a>
    </div>
  );
};

export default Involve;
