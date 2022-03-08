import React, { useState } from "react";
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
    const date = new Date();
    setToDo([...ToDo, `${text}  (${date.toLocaleTimeString()})`]);
    setText("");
    e.target.reset();
  };

  const balik = (e: any) => {
    setToDo(ToDo.concat(done.filter((a: any) => a === done[e.target.value])));
    setDone(done.filter((a: any) => a !== done[e.target.value]));
  };

  const hapus = (e: any) => {
    if (e.target.name === "todo") {
      setToDo(ToDo.filter((a: any) => a !== ToDo[e.target.value]));
    } else {
      setDone(done.filter((a: any) => a !== done[e.target.value]));
    }
  };

  const selesai = (e: any) => {
    if (e.target.checked) {
      setDone(done.concat(ToDo.filter((a: any) => a === ToDo[e.target.value])));

      setToDo(ToDo.filter((a: any) => a !== ToDo[e.target.value]));

      if (e.target.checked) {
        e.target.checked = false;
      }
    } else {
    }
  };

  return (
    <div className="grid text-gray-500 font-mono">
      <p className="sm:m-auto py-10 px-5">
        apa yang ingin anda lakukan hari ini...
      </p>
      <Input state={text} onchange={onchange} onsubmit={onsubmit} />
      <Output
        todo={ToDo}
        musnah={hapus}
        balik={balik}
        done={done}
        hapus={selesai}
      />
    </div>
  );
}

export default App;
