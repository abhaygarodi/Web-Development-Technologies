function Employee({ ename, desig, dept, email }) {
  const cardStyle = {
    backgroundColor: "#4a6b70",
    color: "white",
    width: "500px",
    padding: "15px",
    marginBottom: "15px",
    borderRadius: "6px"
  };

  return (
    <div style={cardStyle}>
      <p><b>Name:</b> {ename}</p>
      <p><b>Designation:</b> {desig}</p>
      <p><b>Department:</b> {dept}</p>
      <p><b>Email:</b> {email}</p>
    </div>
  );
}

export default Employee;
