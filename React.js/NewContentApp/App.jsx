import { useState } from "react";

function App() {
  const [articles, setArticles] = useState([
    { title: "India Launches New Rocket", body: "ISRO successfully launched...", author: "Abhay" },
    { title: "Tech Expo 2025 Announced", body: "Upcoming tech expo will feature...", author: "Rahul" }
  ]);

  const [formData, setFormData] = useState({
    title: "",
    body: "",
    author: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.body || !formData.author) {
      alert("Please fill all fields");
      return;
    }

    setArticles([...articles, formData]);

    // Reset form
    setFormData({ title: "", body: "", author: "" });
  };

  return (
    <div style={{ width: "500px", margin: "20px auto", fontFamily: "Arial" }}>
      <h2>Add News Content</h2>

      <form onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          padding: "15px",
          border: "1px solid #ccc",
          borderRadius: "8px"
        }}>

        <input
          type="text"
          name="title"
          placeholder="Content Title"
          value={formData.title}
          onChange={handleChange}
          style={{ padding: "8px" }}
        />

        <textarea
          name="body"
          placeholder="Content Body"
          value={formData.body}
          onChange={handleChange}
          rows="4"
          style={{ padding: "8px" }}
        />

        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={formData.author}
          onChange={handleChange}
          style={{ padding: "8px" }}
        />

        <button
          type="submit"
          style={{
            padding: "10px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}>
          Add News
        </button>
      </form>

      <h2 style={{ marginTop: "30px" }}>News Articles</h2>
      {articles.map((a, index) => (
        <div key={index}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            borderRadius: "5px",
            marginBottom: "10px"
          }}>
          <h3>{a.title}</h3>
          <p>{a.body}</p>
          <strong>– {a.author}</strong>
        </div>
      ))}
    </div>
  );
}

export default App;
