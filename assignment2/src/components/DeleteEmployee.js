import React from 'react'
import { Link } from "react-router-dom";

export default function DeleteEmployee() {
  return (
    <div className="columns mt-5">
        <div className="column is-half">
            <Link to="/" className="button is-success">
            Return
            </Link>
            <h4>Delete Employee Successfully</h4>
        </div>
    </div>
  )
}
