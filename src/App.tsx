import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./component/Input";
import Output from "./component/Output";

function App() {
  const [text, setText] = useState<string>("");
  const [ToDo, setToDo] = useState<any>([]);
  const [done, setDone] = useState<any>([]);

  const onchange = (e: any) => {
    setText(e.target.value);
  };

  const onsubmit = (e: any) => {
    e.preventDefault();
    console.log(text);
    setToDo([...ToDo, text]);
    setText("");
    e.target.reset();
  };

  const selesai = (e: any) => {
    setDone(ToDo.filter((a: any) => {}));
  };

  return (
    <div className="grid text-gray-500 font-mono">
      <p className="m-auto my-5">apa yang ingin anda lakukan hari ini...</p>
      <Input state={text} onchange={onchange} onsubmit={onsubmit} />
      <Output todo={ToDo} />
    </div>
  );
}

export default App;
