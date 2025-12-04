import React, { Component } from "react";
import EmpRow from "./EmpRow";

class EmpDataComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [
        { id: 101, name: "Anita", salary: 25000 },
        { id: 200, name: "Bharati", salary: 30000 },
        { id: 100, name: "Uma", salary: 43000 }
      ]
    };
  }

  render() {
    return (
      <div style={{ width: "300px", margin: "20px", fontFamily: "Arial" }}>
        <h2>Employee Data</h2>

        <table border="1" cellPadding="8">
          <tbody>
            {this.state.employees.map((emp, index) => (
              <EmpRow key={index} emp={emp} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmpDataComponent;
