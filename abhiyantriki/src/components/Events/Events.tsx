import { Component, For, createMemo, createSignal } from "solid-js";
import { EventInfo, events } from "./data";
import { TbArrowLeft, TbArrowRight } from "solid-icons/tb";
import { getKeys } from "../../util";
import { Tab, Tabs } from "../next/Tabs";

const EVENTS_PER_VIEW = 3;

const Events: Component = () => {
  const [selected, setSelected] = createSignal("Tech");
  const [selectedPage, setSelectedPage] = createSignal(0);

  const paginateEvents = (events: EventInfo[]) => {
    const chunks: EventInfo[][] = [];
    for (let i = 0; i < events.length; i += EVENTS_PER_VIEW) {
      chunks.push(events.slice(i, i + EVENTS_PER_VIEW));
    }
    return chunks;
  };

  const prevButtonOnClick = () => {
    setSelectedPage((page) => page - 1);
  };

  const nextButtonOnClick = () => {
    setSelectedPage((page) => page + 1);
  };

  let selectedEvents = createMemo(() => events[selected()]);

  return (
    <div
      id="events"
      class="hide align-midd flex min-h-screen flex-col items-center justify-center gap-5"
    >
      <Tabs>
        <For each={getKeys(events)}>
          {(name) => (
            <Tab
              label={name}
              selected={[selected, setSelected]}
              onSelect={() => setSelectedPage(0)}
            />
          )}
        </For>
      </Tabs>

      <div class="flex items-center justify-center gap-5 ">
        <button
          class="duration-500 hover:text-slate-500"
          onClick={prevButtonOnClick}
        >
          <TbArrowLeft size={30} />
        </button>

        <div class="group mt-12 flex w-[73vw] flex-wrap justify-center gap-8 overflow-auto px-4 py-5 md:w-[80vw]">
          {(() => {
            const pages = paginateEvents(selectedEvents());

            // Handle page overflow
            if (selectedPage() === -1) {
              setSelectedPage(pages.length - 1);
            }
            if (selectedPage() === pages.length) {
              setSelectedPage(0);
            }

            return paginateEvents(selectedEvents())[selectedPage()].map(
              ({
                title,
                description,
                entryFee,
                prize,
                members,
                contactNo,
                imageSlug,
              }) => (
                <div class="flex h-[32rem] w-[60vw] flex-col rounded-3xl bg-slate-700 p-5 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg md:w-[20vw]">
                  {selected() === "Tech Shield" ||
                  selected() === "Tech MUN" ? null : (
                    <img
                      src={imageSlug}
                      class="m-auto -mt-11 w-24 content-center self-center"
                    />
                  )}
                  <h1 class="items-center text-center text-2xl font-bold">
                    {title}
                  </h1>
                  <div class="no-scrollbar h-[110px] overflow-auto overflow-y-scroll">
                    <p class="mb-2 mt-5 items-center text-center text-[15px]">
                      {description}
                    </p>
                  </div>
                  <div class="flex flex-col items-center justify-center gap-2">
                    {selected() === "Tech MUN" ? (
                      <div>
                        <a
                          href="https://docs.google.com/forms/d/e/1FAIpQLScK7J2JFOn0avxhRg883Ca0o42csOAzOLingqUlvbyJ4iYCtg/viewform?usp=sharing"
                          type="button"
                          class="mb-2 me-2 cursor-pointer rounded-full bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                        >
                          Register
                        </a>
                      </div>
                    ) : selected() === "Tech Shield" ? null : (
                      <>
                        <div class="flex h-10 w-60 items-center justify-center text-center text-sm">
                          <img
                            class="h-12 items-center gap-6"
                            src="entry.png"
                          />
                          {entryFee}
                        </div>
                        <div class="flex h-10 w-60 justify-center text-center text-sm">
                          <img class="h-8 gap-6" src="prize.png" />
                          {prize}
                        </div>
                        <div class="flex h-10 w-60 justify-center text-center text-sm">
                          <img class="h-5 gap-6" src="member.png" />
                          {members}
                        </div>
                        <div class="flex h-10 w-60 justify-center text-center text-sm">
                          <img class="h-6 gap-6" src="call.png" />
                          {contactNo}
                        </div>
                        <div>
                          <a
                            href="#"
                            type="button"
                            class="mb-2 me-2 cursor-pointer rounded-full bg-green-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                          >
                            Register
                          </a>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              ),
            );
          })()}
        </div>

        <button
          class="duration-500 hover:text-slate-500"
          onClick={nextButtonOnClick}
        >
          <TbArrowRight size={30} />
        </button>
      </div>
    </div>
  );
};

export default Events;
