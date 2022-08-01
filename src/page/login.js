import React from "react";
import multiFormData from "./loginFormData";
import DynamicForm from "../component/forms/dynamicForm";

function Login() {
  return (
    <div className="container">
      <DynamicForm multiFormData={multiFormData} />
    </div>
  );
}

export default Login;
