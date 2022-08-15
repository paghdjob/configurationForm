import React from "react";
import multiFormData from "../multiFormData";
import DynamicForm from "../component/forms/dynamicForm";
 
function About() {
  const formData = (data) => {
    console.log("Data=>", data)
  }
  return <><DynamicForm multiFormData={multiFormData} data={formData} /></>;
}

export default About;
