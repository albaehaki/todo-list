import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

function Output({ todo, hapus, done, balik, musnah }: any) {
  const planRef = useRef<any>();

  useEffect(() => {
    gsap.fromTo(planRef.current, { opacity: 0 }, { opacity: 1 });
  });

  return (
    <div className="grid">
      <div className="m-auto w-10/12 sm:w-8/12 md:w-1/2 grid">
        {todo.map((todo: any, i: number) => {
          return (
            <div
              key={i}
              ref={planRef}
              className="grid px-2 border-b-[1px] py-1 grid-flow-col grid-cols-12"
            >
              <input
                className="my-auto accent-gray-500 col-start-1"
                onChange={(e: any) => {
                  hapus(e);
                }}
                value={i}
                type="checkbox"
              />
              <p className="px-2 break-all col-span-10">{todo}</p>
              <button
                onClick={(e: any) => {
                  musnah(e);
                }}
                className="font-black"
                value={i}
                name="todo"
              >
                x
              </button>
            </div>
          );
        })}
      </div>
      <div className="m-auto w-10/12 sm:w-8/12 md:w-1/2 grid">
        {done.length === 0 ? `` : <p className="px-2 py-3">selesai</p>}
        {done.map((todo: any, i: number) => {
          return (
            <div
              key={i}
              ref={planRef}
              className="grid px-2 border-b-[1px] py-1 grid-flow-col grid-cols-12"
            >
              <input
                className="my-auto accent-gray-500"
                value={i}
                onChange={(e: any) => {
                  balik(e);
                }}
                checked
                type="checkbox"
              />
              <p className="px-2 col-span-10 break-all line-through">{todo}</p>
              <button
                onClick={(e: any) => {
                  musnah(e);
                }}
                className="font-black"
                value={i}
                name="done"
              >
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Output;
