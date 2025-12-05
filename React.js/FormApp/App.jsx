import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(firstName + " " + lastName);
  };

  return (
    <div style={{ margin: "20px", width: "250px", fontFamily: "Arial" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          borderRadius: "5px",
        }}
      >
        <label>
          FirstName :
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ width: "100%", marginTop: "3px", marginBottom: "10px" }}
          />
        </label>

        <label>
          LastName :
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{ width: "100%", marginTop: "3px", marginBottom: "10px" }}
          />
        </label>

        <button type="submit">Submit</button>
      </form>

      <h3 style={{ marginTop: "10px" }}>
        {fullName && <b>{fullName}</b>}
      </h3>
    </div>
  );
}

export default App;
