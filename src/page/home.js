import React, { useEffect, useState } from "react";
import DynamicForm from "../component/forms/dynamicForm";
import ApiCall from "../component/forms/api";

function Home() {
  const [multiFormData, setMultiFormData] = useState([]);
  useEffect(() => {
    ApiCall("./json/homeFormData.json").then((data) => {
      setMultiFormData(data);
    });
  }, []);

  const formData = (data) => {
    console.log("Data=>", data);
  };

  return <DynamicForm multiFormData={multiFormData} data={formData} />;
}

export default Home;
