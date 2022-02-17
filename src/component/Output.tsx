import React from "react";

function Output({ todo }: any) {
  return (
    <div className="grid">
      <div className="m-auto w-screen md:w-1/2 grid">
        {todo.map((todo: any) => {
          return <p className="px-2">{todo}</p>;
        })}
      </div>
    </div>
  );
}

export default Output;
