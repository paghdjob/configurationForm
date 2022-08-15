import React from "react";
import multiFormData from "./forgotPwdFormData";
import DynamicForm from "../component/forms/dynamicForm";

function ForgotPwd() {
  const formData = (data) => {
    console.log("Data=>", data)
  }
  return (
    <div className="container">
      <DynamicForm multiFormData={multiFormData} data={formData} />
    </div>
  );
}

export default ForgotPwd;
