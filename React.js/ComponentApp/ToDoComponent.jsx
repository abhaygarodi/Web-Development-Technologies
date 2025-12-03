import { useState } from "react";

function ToDoComponent() {
  const [item, setItem] = useState("");
  const [list, setList] = useState([]);

  const addItem = () => {
    if (item.trim() === "") return;

    const newItem = {
      id: Math.random(),
      text: item
    };

    setList([...list, newItem]);
    setItem(""); // clear input
  };

  const deleteItem = (id) => {
    setList(list.filter((todo) => todo.id !== id));
  };

  return (
    <div
      style={{
        width: "250px",
        border: "1px solid #4a76ff",
        padding: "15px",
        margin: "20px",
        fontFamily: "Arial"
      }}
    >
      <h3>TODO LIST</h3>

      <div style={{ display: "flex", marginBottom: "10px" }}>
        <input
          type="text"
          value={item}
          placeholder="add item . . ."
          onChange={(e) => setItem(e.target.value)}
          style={{ flex: 1 }}
        />
        <button onClick={addItem} style={{ marginLeft: "5px" }}>
          ADD
        </button>
      </div>

      <div>
        {list.map((todo) => (
          <p
            key={todo.id}
            onClick={() => deleteItem(todo.id)}
            style={{ cursor: "pointer", margin: "5px 0" }}
          >
            {todo.text}
          </p>
        ))}
      </div>
    </div>
  );
}

export default ToDoComponent;
