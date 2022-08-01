import React from "react";
import multiFormData from "./profileFormData";
import DynamicForm from "../component/forms/dynamicForm";

function Profile() {
  return (
    <div className="container">
      {/* <div className="position-relative m-4">
        <div className="progress" style={{ height: "1px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            aria-label="Progress"
            style={{ width: "50%" }}
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <button
          type="button"
          className="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill"
        >
          Personal Infomation
        </button>
        <button
          type="button"
          className="position-absolute top-0 start-50 translate-middle btn btn-sm btn-primary rounded-pill"
        >
          Employee Infomation
        </button>

        <button
          type="button"
          className="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill"
        >
          School
        </button>
      </div> */}

      {/* <ul className="nav nav-tabs">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Active asd
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link asd
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link asds
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Link asds
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul> */}
      <DynamicForm multiFormData={multiFormData} />
    </div>
  );
}

export default Profile;
