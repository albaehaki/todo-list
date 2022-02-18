import React, { useState } from "react";

function Output({ todo, hapus, setKey }: any) {
  const [radio, setRadio] = useState<string>("");

  return (
    <div className="grid">
      <div className="m-auto w-10/12 sm:w-8/12 md:w-1/2 grid">
        {todo.map((todo: any, i: number) => {
          return (
            <div key={i} className="flex px-2 border-b-[1px] py-1 flex-row">
              <input
                className="my-auto accent-gray-500"
                onChange={(e: any) => {
                  setKey(i);
                  hapus(e);
                }}
                value={i}
                type="checkbox"
              />
              <p className="px-2 break-all">{todo}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
//<p className="px-2">{todo}</p>

export default Output;
