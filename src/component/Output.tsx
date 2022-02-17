import React, { useState } from "react";

function Output({ todo }: any) {
  const [radio, setRadio] = useState<string>("");

  return (
    <div className="grid">
      <div className="m-auto w-screen md:w-1/2 grid">
        {todo.map((todo: any, i: number) => {
          return (
            <div key={i} className="flex px-2 flex-row">
              <input
                className="my-auto"
                value={radio}
                onClick={(e: any) => {
                  console.log(e.target.value);
                }}
                type="checkbox"
              />
              <p className="px-2">{todo}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
//<p className="px-2">{todo}</p>

export default Output;
