import React from "react";
import { useState } from "react";
import "./App.css";
function App() {
  const [users, setUser] = useState([{ id: 1, title: "이동언" }]);

  const [title, setTitle] = useState("");

  const titlechange = (e) => {
    setTitle(e.target.value);
  };

  const addbtn = () => {
    // 추가 버튼
    const newUsers = {
      id: users.length + 1, // 추가를 하기위해 길이 +1
      title: title,
    };
    setUser([...users, newUsers]);
    setTitle("");
  };

  return (
    <div className="layout">
      <div className="container">
        <input type="text" value={title} onChange={titlechange} />
        <button onClick={addbtn}>추가하기</button>
      </div>
      <div className="listh2">Todo List</div>
      <div className="list">
        {users.map((user) => {
          return <div className="listbox">{user.title}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
