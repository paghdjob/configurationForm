import React, { useEffect, useState } from "react";
import DynamicForm from "../component/forms/dynamicForm";
import ApiCall from "../component/forms/api";

function Login() {
  const [multiFormData, setMultiFormData] = useState([]);
  useEffect(() => {
    ApiCall("./json/loginFormData.json").then((data) => {
      setMultiFormData(data);
    });
  }, []);

  const formData = (data) => {
    console.log("Data=>", data);
  };

  return (
    <div className="container">
      <DynamicForm multiFormData={multiFormData} data={formData} />
    </div>
  );
}

export default Login;
