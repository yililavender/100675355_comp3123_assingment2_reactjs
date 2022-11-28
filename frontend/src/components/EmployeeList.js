import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployee] = useState([]);

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    const response = await axios.get("http://localhost:8081/employees");
    setEmployee(response.data);
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/employees/${id}`);
      getEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <Link to="add" className="button is-success">
          Add Employee
        </Link>
        <table className="table is-striped is-fullwidth mt-2">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={employee.id}>
                <td>{index + 1}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>
                  <Link
                    to={`edit/${employee.id}`}
                    className="button is-info is-small mr-1"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`view/${employee.id}`}
                    className="button is-info is-small mr-1"
                  >
                    View
                  </Link>
                  <button
                    to={`delete/${employee.id}`}
                    onClick={() => deleteEmployee(employee.id)}
                    className="button is-danger is-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
