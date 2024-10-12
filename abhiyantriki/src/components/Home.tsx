import { Component } from "solid-js";
import "../font.css";

const Home: Component = () => {
  return (
    <div
      id="home"
      class="hide flex min-h-screen select-none items-center justify-center"
    >
      <div class="m-auto h-[70vh] w-[90vw] items-center ">
        <img
          class=" hidden h-[80vh] w-[90vw] md:block"
          src="finalbg.png"
          alt="image"
        />
        <img
          class=" h-[60vh] w-[90vw] md:hidden"
          src="background.png"
          alt="image"
        />

        <div class="show m-auto -mt-10 flex -translate-x-2/4 -translate-y-[50vh] flex-col items-center justify-center gap-[50px] font-black md:mt-1 md:hidden md:-translate-y-2/4">
          <div class="h-40 p-8">
            <img src="withdate_loading.png" alt="" />
          </div>
          {/* <div class="hide">
            <img src="abhiyantriki3.png" alt="" />
          </div> */}
        </div>
        <div
          id="txt"
          class="Montserratfont show m-auto  hidden -translate-x-2/4 -translate-y-[300px] flex-col items-center justify-center gap-[150px] text-center text-[40px] font-black md:block md:-translate-y-[30vh] md:gap-[50px] md:text-[120px]"
        >
          <div id="txt3" class="hide -m-12 ml-10 mt-40 flex text-left">
            <p class="text-[#58FFD2]">ABHIYANTRIKI</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
