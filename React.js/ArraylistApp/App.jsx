import Employee from "./Employee";

function App() {
  const emps = [
    { ename: "Anita", desig: "Manager", dept: "Trg", email: "Anita@abc.com" },
    { ename: "Kavita", desig: "SSE", dept: "FSBU", email: "Kavita@abc.com" },
    { ename: "Sunita", desig: "Associate", dept: "Legal", email: "Sunita@abc.com" }
  ];

  return (
    <div style={{ padding: "20px" }}>
      {emps.map(emp => (
        <Employee key={emp.ename} {...emp} />
      ))}
    </div>
  );
}

export default App;
