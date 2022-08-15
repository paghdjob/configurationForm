import React from "react";
import multiFormData from "./loginFormData";
import DynamicForm from "../component/forms/dynamicForm";

function Login() {
  const formData = (data) => {
    console.log("Data=>", data)
  }
  return (
    <div className="container">
      <DynamicForm multiFormData={multiFormData} data={formData} />
    </div>
  );
}

export default Login;
