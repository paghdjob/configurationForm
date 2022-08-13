import React from "react";
import multiFormData from "./forgotPwdFormData";
import DynamicForm from "../component/forms/dynamicForm";

function ForgotPwd() {
  return (
    <div className="container">
      <DynamicForm multiFormData={multiFormData} />
    </div>
  );
}

export default ForgotPwd;
