import React from "react";
import multiFormData from "../multiFormData";
import DynamicForm from "../component/forms/dynamicForm";
 
function About() {
  return <><DynamicForm multiFormData={multiFormData} /></>;
}

export default About;
