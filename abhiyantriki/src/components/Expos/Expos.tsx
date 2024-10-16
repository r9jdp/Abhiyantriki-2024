import { Component, createMemo, createSignal } from "solid-js";
import { ExpoInfo, expos as data } from "./data";
import { TbArrowLeft, TbArrowRight } from "solid-icons/tb";
import { Tab, Tabs } from "../next/Tabs";
import { Dynamic } from "solid-js/web";

const EVENTS_PER_VIEW = 3;

const TechExpo: Component = () => {
  return (
    <div class="mt-5">
      <h1 class="text-2xl font-bold tracking-widest md:hidden">TECH EXPO</h1>
      <div class="relative hidden md:block">
        <img class="relative" src="components/Expos/banner.png" alt="banner" />
        <img
          class="absolute left-0 top-2"
          src="components/Expos/overlay.png"
          alt="overlay"
        />
        <img
          class="absolute left-96 top-2"
          src="components/Expos/tech/satellite.png"
          alt="satellite"
        />
        <h1 class="absolute left-20 top-16 text-8xl font-extrabold tracking-wider opacity-70">
          <span class="block">TECH</span>
          <span class="block">EXPO</span>
        </h1>
        <p class="absolute left-[50rem] top-28 w-[30rem] text-sm opacity-70">
          Tech Expo is a unique exhibition and the most anticipated event at
          Abhiyantriki. With innovative technologies from all over the country,
          the Tech Expo contains exhibits from well-known organisations namely
          DRDO, ISRO, IMD, DAE and innovations ranging from speed-defying drones
          to humanoid robots with intellect on par with a human being.
        </p>
      </div>
    </div>
  );
};

const InternshipExpo: Component = () => {
  return (
    <div class="mt-5">
      <h1 class="text-2xl font-bold tracking-widest md:hidden">
        INTERNSHIP EXPO
      </h1>
      <div class="relative hidden md:block ">
        <img class="relative" src="components/Expos/banner.png" alt="banner" />
        <img
          class="absolute left-0 top-2"
          src="components/Expos/overlay.png"
          alt="overlay"
        />
        <div class="absolute left-0 top-10 flex w-full flex-col items-center">
          <img
            class="mb-4 h-32 w-32"
            src="components/Expos/speakers/abhiyantriki.png"
            alt="logo"
          />
          <h1 class="mb-4 text-5xl font-extrabold tracking-wider opacity-70">
            <span class="block">INTERNSHIP EXPO</span>
          </h1>
        </div>
        <p class="absolute top-[17rem] mr-10 w-full px-10 text-center text-[0.80rem] opacity-70">
          Internship expo is one of the major events at Abhiyantriki. The main
          objective of this expo is to provide students with a diverse range of
          internship opportunities. These internships help the students acquaint
          with a lot of new skills and give them the required work experience.
          Internships play an essential role in magnifying the morale of the
          students.
        </p>
      </div>
    </div>
  );
};

const SpeakersExpo: Component = () => {
  return (
    <div class="mt-5">
      <h1 class="text-2xl font-bold tracking-widest md:hidden">
        SPEAKERS EXPO
      </h1>
      <div class="relative hidden md:block">
        <img class="relative" src="components/Expos/banner.png" alt="banner" />
        <img
          class="absolute left-0 top-2"
          src="components/Expos/overlay.png"
          alt="overlay"
        />
        <img
          class="absolute left-[38rem] top-32"
          src="components/Expos/speakers/abhiyantriki.png"
          alt="logo"
        />
        <h1 class="absolute left-20 top-32 text-6xl font-extrabold tracking-wider opacity-70">
          <span class="block">SPEAKERS</span>
        </h1>
        <p class="absolute left-[50rem] top-28 w-[30rem] text-sm opacity-70">
          The Speaker Sessions held during Abhiyantriki are bound to leave one
          in awe and inspired. It provides a platform for many great
          personalities to share their thoughts and views with the audience
          about their experiences in their fields, be it technical, financial,
          management, administration etc. Eminent figures including Dr A P J
          Abdul Kalam, Dr Raghuram Rajan, His Holiness The Dalai Lama, Zakir
          Hussain, Dr Jayant Narlikar and many others have honoured us at
          Abhiyantriki.
        </p>
      </div>
    </div>
  );
};

const PanelExpo: Component = () => {
  return <div> </div>;
};

const AutoExpo: Component = () => {
  return (
    <div class="mt-5">
      <h1 class="text-2xl font-bold tracking-widest md:hidden">Auto Expo</h1>
      <div class="relative hidden md:block">
        <img class="relative" src="components/Expos/banner.png" alt="banner" />
        <img
          class="absolute left-0 top-2"
          src="components/Expos/overlay.png"
          alt="overlay"
        />
        <div class="absolute left-0 top-10 flex w-full flex-col items-center">
          <img
            class="mb-4 h-32 w-32"
            src="components/Expos/speakers/abhiyantriki.png"
            alt="logo"
          />
          <h1 class="mb-4 text-7xl font-extrabold tracking-wider opacity-70">
            <span class="block">AUTO EXPO</span>
          </h1>
        </div>
        <p class="absolute top-[17rem] mr-10 w-full text-center text-lg opacity-70">
          Auto expo is a major event at Abhiyantriki. The main objective of this
          expo is to showcase innovative automotive technologies and
          advancements.
        </p>
      </div>
    </div>
  );
};

const StartupExpo: Component = () => {
  return (
    <div class="mt-5">
      <h1 class="text-2xl font-bold tracking-widest md:hidden">Startup Expo</h1>
      <div class="relative hidden md:block">
        <img
          class="relative h-auto w-full"
          src="components/Expos/banner.png"
          alt="banner"
        />
        <img
          class="absolute left-0 top-2 h-auto w-full"
          src="components/Expos/overlay.png"
          alt="overlay"
        />
        <div class="absolute left-0 top-10 flex w-full flex-col items-center">
          <img
            class="mb-4 h-32 w-32"
            src="components/Expos/speakers/abhiyantriki.png"
            alt="logo"
          />
          <h1 class="mb-4 text-7xl font-extrabold tracking-wider opacity-70">
            <span class="block">STARTUP EXPO</span>
          </h1>
        </div>
        <p class="absolute top-[17rem] mr-10 w-full text-center text-lg opacity-70">
          Startup Expo at Abhiyantriki 2024 is a platform where budding
          entrepreneurs showcase their innovative ideas to investors. It's a
          unique opportunity for startups to attract funding, gain mentorship,
          and accelerate their growth.
        </p>
      </div>
    </div>
  );
};

const ParvahXAbhiyantriki: Component = () => {
  return (
    <div class="mt-5">
      <h1 class="text-2xl font-bold tracking-widest md:hidden">
        Parvaah X Abhiyantriki
      </h1>
      <div class="relative hidden md:block">
        <img
          class="relative h-auto w-full"
          src="components/Expos/banner.png"
          alt="banner"
        />
        <img
          class="absolute left-0 top-2 h-auto w-full"
          src="components/Expos/overlay.png"
          alt="overlay"
        />
        <div class="absolute left-0 top-10 flex w-full flex-col items-center">
          <img
            class="mb-4 h-32 w-32"
            src="components/Expos/speakers/abhiyantriki.png"
            alt="logo"
          />
          <h1 class="mb-4 text-7xl font-extrabold tracking-wider opacity-70">
            <span class="block">PARVAAH X ABHIYANTRIKI</span>
            <span class="block text-center">STALL DETAILS</span>
          </h1>
        </div>
        <p class="absolute top-[17rem] mr-10 w-full text-center text-lg opacity-70"></p>
      </div>
    </div>
  );
};

const expos = {
  Tech: TechExpo,
  Internship: InternshipExpo,
  Speakers: SpeakersExpo,
  Panel: PanelExpo,
  Auto: AutoExpo,
  Startup: StartupExpo,
  ParvahXAbhiyantriki,
};

const Expos: Component = () => {
  const [selected, setSelected] = createSignal<keyof typeof expos>("Tech");
  const [selectedPage, setSelectedPage] = createSignal(0);

  const paginateExpos = (events: ExpoInfo[]) => {
    const chunks: ExpoInfo[][] = [];
    for (let i = 0; i < events.length; i += EVENTS_PER_VIEW) {
      chunks.push(events.slice(i, i + EVENTS_PER_VIEW));
    }
    return chunks;
  };

  const prevButtonOnClick = () => {
    setSelectedPage(
      (page) =>
        (page - 1 + paginateExpos(selectedExpos()).length) %
        paginateExpos(selectedExpos()).length,
    );
  };

  const nextButtonOnClick = () => {
    setSelectedPage(
      (page) => (page + 1) % paginateExpos(selectedExpos()).length,
    );
  };

  let selectedExpos = createMemo(() => data[selected()]);

  return (
    <div
      id="expos"
      class="flex min-h-screen flex-col items-center justify-center gap-5"
    >
      <Tabs>
        {Object.keys(expos).map((name) => (
          <Tab label={name} selected={[selected, setSelected as any]} />
        ))}
      </Tabs>

      <Dynamic component={expos[selected() as keyof typeof expos]} />

      <div class="scrollbar-hide group flex items-center justify-center gap-5 overflow-x-auto">
        <button
          class="duration-200 hover:text-slate-500"
          onClick={prevButtonOnClick}
        >
          <TbArrowLeft size={30} />
        </button>

        <div class="flex flex-col flex-nowrap md:flex-row">
          {(() => {
            const pages = paginateExpos(selectedExpos());
            const pageIndex = selectedPage();

            return pages[pageIndex].map(({ title, description, imageSlug }) => (
              <div class="mx-2 mt-20 flex h-[30rem] w-[16.5rem] flex-col rounded-3xl bg-slate-950 p-3 text-center duration-500 md:w-80 md:hover:scale-105">
                {selected() !== "Auto" &&
                  selected() !== "ParvahXAbhiyantriki" && (
                    <div class="mb-4 flex justify-center overflow-hidden">
                      <img
                        src={imageSlug}
                        class="m-auto h-56 w-64 object-cover"
                      />
                    </div>
                  )}

                <h1
                  class={`m-auto p-5 text-center ${
                    title === "Kumar Krishnamoorhty" ? "text-xl" : "text-2xl"
                  } font-bold`}
                >
                  {title}
                </h1>
                <div class="relative flex-1 overflow-hidden">
                  <div class="no-scrollbar max-h-24 overflow-y-auto">
                    <p class="m-auto mt-5 text-center text-xs">{description}</p>
                  </div>
                </div>

                <button class="mt-10 rounded-full bg-blue-600 p-2 text-center uppercase text-white duration-200 hover:bg-gray-800">
                  View More
                </button>
              </div>
            ));
          })()}
        </div>

        <button
          class="duration-200 hover:text-slate-500"
          onClick={nextButtonOnClick}
        >
          <TbArrowRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Expos;
