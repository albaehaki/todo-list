import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./component/Input";
import Output from "./component/Output";

function App() {
  const [text, setText] = useState<string>("");
  const [ToDo, setToDo] = useState<any>([]);
  const [done, setDone] = useState<any>([]);
  const [key, setKey] = useState<any>();

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
    if (e.target.checked) {
      console.log(ToDo[e.target.value]);
      console.log(ToDo[e.target.value].id);
      console.log(ToDo.filter((a: any) => a !== a[e.target.value]));
      setDone(ToDo.filter((a: any) => a.includes(a[e.target.value])));
    } else {
    }
  };

  return (
    <div className="grid text-gray-500 font-mono">
      <p className="m-auto my-5">apa yang ingin anda lakukan hari ini...</p>
      <Input state={text} onchange={onchange} onsubmit={onsubmit} />
      <Output todo={ToDo} hapus={selesai} setKey={setKey} />
    </div>
  );
}

export default App;
