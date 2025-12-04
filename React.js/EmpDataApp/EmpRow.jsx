import React, { Component } from "react";

class EmpRow extends Component {
  render() {
    const { id, name, salary } = this.props.emp;
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{salary}</td>
      </tr>
    );
  }
}

export default EmpRow;
