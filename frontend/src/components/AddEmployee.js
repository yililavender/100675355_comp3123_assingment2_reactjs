import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AddEmployee = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
 
  const navigate = useNavigate();

  const saveEmployee = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8081/employees", {
        firstName,
        lastName,
        email
      })
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={saveEmployee}>
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />
            </div>
          </div>

          <div className="field">
            <label className="label">Last Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
            </div>
          </div>
          
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
          </div>
         
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                <Link to="/" className="button is-success">
                Save
                </Link>
              </button>
            </div>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
