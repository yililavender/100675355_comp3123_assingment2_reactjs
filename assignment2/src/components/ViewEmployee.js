import React from 'react'
import { Link } from "react-router-dom";

export default function ViewEmployee(employee) {
    return (
      
    <div className="columns mt-5">
      <div className="column is-half">
        <Link to="/" className="button is-success">
          Return
        </Link>
        <form >
          <div className="field">
            <label className="label">First Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={employee.firstName}
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
                value={employee.lastName}

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
                value={employee.email}

                placeholder="Email"
              />
            </div>
          </div>

        </form>
      </div>
    </div>
    )
}