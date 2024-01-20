"use client";

// // import { Fragment } from "react";
// // import { Menu, Transition } from "@headlessui/react";
// // import { ChevronDownIcon } from "@heroicons/react/20/solid";
// // import { useState, useEffect } from "react";

// // const dummyData = [
// //   {
// //     date: new Date(),
// //     city: "Spokane",
// //     state: "Washington",
// //     king: 2,
// //     twin: 4,
// //     suite: 0,
// //     roomNightTotal: 6,
// //     spend: 774,
// //     roomMarketAverage: 187,
// //     savings: 348,
// //   },
// //   {
// //     date: new Date(),
// //     city: "Portland",
// //     state: "Oregon",
// //     king: 2,
// //     twin: 4,
// //     suite: 0,
// //     roomNightTotal: 6,
// //     spend: 900,
// //     roomMarketAverage: 195,
// //     savings: 270,
// //   },
// //   {
// //     date: new Date(),
// //     city: "Seattle",
// //     state: "Washington",
// //     king: 2,
// //     twin: 4,
// //     suite: 0,
// //     roomNightTotal: 6,
// //     spend: 873,
// //     roomMarketAverage: 200,
// //     savings: 327,
// //   },
// // ];

// // function classNames(...classes: string[]) {
// //   return classes.filter(Boolean).join(" ");
// // }

// // export default function SortBtn() {
// //   const [selectedCity, setSelectedCity] = useState("");

// //   // useEffect(() => {
// //   //   console.log(selectedCity, 'selected-city');
// //   // }, [selectedCity])

// //   return (
// //     <Menu as="div" className="relative w-32">
// //       <div>
// //         <Menu.Button className="uppercase inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
// //           Sort by city
// //           <ChevronDownIcon
// //             className="-mr-1 h-5 w-5 text-gray-400"
// //             aria-hidden="true"
// //           />
// //         </Menu.Button>
// //       </div>

// //       <Transition
// //         enter="transition ease-out duration-100"
// //         enterFrom="transform opacity-0 scale-95"
// //         enterTo="transform opacity-100 scale-100"
// //         leave="transition ease-in duration-75"
// //         leaveFrom="transform opacity-100 scale-100"
// //         leaveTo="transform opacity-0 scale-95"
// //       >
// //         {dummyData.map((data, index) => (
// //           <Menu.Item key={index}>
// //             {({ active }) => (
// //               <button
// //                 className={classNames(
// //                   active ? "bg-gray-100 text-gray-900" : "text-gray-700",
// //                   "block px-4 py-2 text-sm"
// //                 )}
// //                 onClick={() => console.log('clicking')}
// //               >
// //                 {data.city}
// //               </button>
// //               // <a
// //               //   href="#"
// //               //   onClick={() => {
// //               //     console.log('clicked');
// //               //     setSelectedCity(data.city);
// //               //   }}
// //               //   className={classNames(
// //               //     active ? "bg-gray-100 text-gray-900" : "text-gray-700",
// //               //     "block px-4 py-2 text-sm"
// //               //   )}
// //               // >
// //               //   {data.city}
// //               // </a>
// //             )}
// //           </Menu.Item>
// //         ))}

// //         {/* <Menu.Items className="absolute  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
// //           <div className="py-1">
// //             <Menu.Item>
// //               {({ active }) => (
// //                 <a
// //                   href="#"
// //                   className={classNames(
// //                     active ? "bg-gray-100 text-gray-900" : "text-gray-700",
// //                     "block px-4 py-2 text-sm"
// //                   )}
// //                 >
// //                   Account settings
// //                 </a>
// //               )}
// //             </Menu.Item>
// //             <Menu.Item>
// //               {({ active }) => (
// //                 <a
// //                   href="#"
// //                   className={classNames(
// //                     active ? "bg-gray-100 text-gray-900" : "text-gray-700",
// //                     "block px-4 py-2 text-sm"
// //                   )}
// //                 >
// //                   Support
// //                 </a>
// //               )}
// //             </Menu.Item>
// //             <Menu.Item>
// //               {({ active }) => (
// //                 <a
// //                   href="#"
// //                   className={classNames(
// //                     active ? "bg-gray-100 text-gray-900" : "text-gray-700",
// //                     "block px-4 py-2 text-sm"
// //                   )}
// //                 >
// //                   License
// //                 </a>
// //               )}
// //             </Menu.Item>
// //             <form method="POST" action="#">
// //               <Menu.Item>
// //                 {({ active }) => (
// //                   <button
// //                     type="submit"
// //                     className={classNames(
// //                       active ? "bg-gray-100 text-gray-900" : "text-gray-700",
// //                       "block w-full px-4 py-2 text-left text-sm"
// //                     )}
// //                   >
// //                     Sign out
// //                   </button>
// //                 )}
// //               </Menu.Item>
// //             </form>
// //           </div>
// //         </Menu.Items> */}
// //       </Transition>
// //     </Menu>
// //   );
// // }

// "use client";
// import { useState } from "react";
// import { Listbox } from "@headlessui/react";

const hotelData = [
  {
    date: new Date(),
    band: "abc",
    city: "Spokane",
    state: "Washington",
    king: 2,
    twin: 4,
    suite: 0,
    roomNightTotal: 6,
    spend: 774,
    roomMarketAverage: 187,
    savings: 348,
  },
  {
    date: new Date(),
    band: "efg",
    city: "Portland",
    state: "Oregon",
    king: 2,
    twin: 4,
    suite: 0,
    roomNightTotal: 6,
    spend: 900,
    roomMarketAverage: 195,
    savings: 270,
  },
  {
    date: new Date(),
    band: "xyz",
    city: "Seattle",
    state: "Washington",
    king: 2,
    twin: 4,
    suite: 0,
    roomNightTotal: 6,
    spend: 873,
    roomMarketAverage: 200,
    savings: 327,
  },
];

import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

export default function SortBtn() {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedBand, setSelectedBand] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");

  return (
    <div className="flex justify-center gap-3">
      <div className="w-72">
        <Listbox value={selectedCity} onChange={setSelectedCity}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">Choose city</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {hotelData.map((data, Idx) => (
                  <Listbox.Option
                    key={Idx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={data.city}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {data.city}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>

      <div className="w-72">
        <Listbox value={selectedBand} onChange={setSelectedBand}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">Choose band</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {hotelData.map((data, Idx) => (
                  <Listbox.Option
                    key={Idx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={data.band}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {data.band}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>

      <div className="w-72">
        <Listbox value={selectedPeriod} onChange={setSelectedPeriod}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">Choose period</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {hotelData.map((data, Idx) => (
                  <Listbox.Option
                    key={Idx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={data.city}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {data.city}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
}
