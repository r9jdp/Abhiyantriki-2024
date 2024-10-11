import { Component } from "solid-js";

const Loader: Component = () => {
  return (
    <div class="flex h-screen w-full flex-col items-center justify-center bg-slate-900">
      <img
        src="withdate_loading.png"
        alt="Loading..."
        class="loading-animation w-96"
      />

      <h1 class="mb-2 font-sans text-2xl font-bold text-white">
        Just a Moment...
      </h1>

      <div class="w-1/3 space-y-5">
        <div class="flex items-center gap-x-3 whitespace-nowrap">
          <div
            class="flex h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-neutral-700"
            role="progressbar"
            aria-valuenow="100"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="flex flex-col justify-center overflow-hidden whitespace-nowrap rounded-full bg-teal-500 transition-all duration-1000"
              style="animation: loading 8s infinite; width: 100%;"
            ></div>
          </div>
          <span class="sr-only">100%</span>
        </div>
      </div>

      <style>
        {`
      @keyframes loading {
        0% {
          width: 0%;
        }
        50% {
          width: 100%;
        }
        100% {
          width: 0%;
        }
      }

      .loading-animation {
        animation: fadeInZoom 3s ease-in-out forwards;
      }

      @keyframes fadeInZoom {
        0% {
          opacity: 0;
          transform: scale(0.8);
          filter: blur(10px);
        }
        50% {
          opacity: 1;
          transform: scale(1.05);
          filter: blur(0);
        }
        100% {
          opacity: 1;
          transform: scale(1);
          filter: blur(0);
        }
      }
    `}
      </style>
    </div>
  );
};

export default Loader;
