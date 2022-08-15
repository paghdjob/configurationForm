import React from "react";
import multiFormData from "./signupFormData";
import DynamicForm from "../component/forms/dynamicForm";

function Signup() {
  const formData = (data) => {
    console.log("form return data=>", data)
  }
  return (
    <div className="container">
      <DynamicForm multiFormData={multiFormData} data={formData} />
    </div>
  );
}

export default Signup;
