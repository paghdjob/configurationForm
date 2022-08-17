import React, { useEffect, useState } from "react";
import DynamicForm from "../component/forms/dynamicForm";
import ApiCall from "../component/forms/api";
import { useLocation } from "react-router-dom";

function AnyPage(props) {
  let location = useLocation();

  const [multiFormData, setMultiFormData] = useState([]);
  useEffect(() => {
    ApiCall(`./json${location.pathname}FormData.json`).then((data) => {
      console.log("data->", data);
      setMultiFormData(data);
    });
  }, [location.pathname]);

  const formData = (data) => {
    console.log("Data=>", data);
  };

  return (
    <div className="container">
      <h1>AnyPage</h1>
      <DynamicForm multiFormData={multiFormData} data={formData} />
    </div>
  );
}

export default AnyPage;
