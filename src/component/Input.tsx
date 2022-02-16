import React from "react";

function Input({ text, onchange, onsubmit }: any) {
  return (
    <div className="grid">
      <form className="m-auto w-screen grid" onSubmit={onsubmit}>
        <input
          className="m-auto outline-none px-2 py-1 rounded-sm w-screen md:w-1/2"
          placeholder="tulis tugas..."
          type="text"
          name="text"
          value={text}
          onChange={onchange}
        />
      </form>
    </div>
  );
}

export default Input;
