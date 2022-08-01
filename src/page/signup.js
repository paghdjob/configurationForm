import React from "react";
import multiFormData from "./signupFormData";
import DynamicForm from "../component/forms/dynamicForm";

function Signup() {
  return (
    <div className="container">
      <DynamicForm multiFormData={multiFormData} />
    </div>
  );
}

export default Signup;
