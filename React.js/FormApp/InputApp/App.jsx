import { useState } from "react";

function App() {
  const [playerName, setPlayerName] = useState("");
  const [players, setPlayers] = useState(["Virat", "Yuvraj", "Dhoni"]);

  const addPlayer = () => {
    if (playerName.trim() === "") return;

    setPlayers([...players, playerName]);
    setPlayerName("");
  };

  return (
    <div style={{ margin: "20px", fontFamily: "Arial" }}>
      <h2>Cricket Players</h2>
      <hr />

      <ul>
        {players.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>

      <div style={{ marginTop: "15px" }}>
        <label>Player Name : </label>
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          style={{ marginLeft: "5px" }}
        />
      </div>

      <button
        onClick={addPlayer}
        style={{ marginTop: "10px", padding: "5px 10px" }}
      >
        Add Player
      </button>
    </div>
  );
}

export default App;
