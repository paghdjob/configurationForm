import React, { useEffect, useState } from "react";
import DynamicForm from "../component/forms/dynamicForm";
import ApiCall from "../component/forms/api";
import { useLocation } from "react-router-dom";

function AnyPage(props) {
  let location = useLocation();

  const [multiFormData, setMultiFormData] = useState([]);
  useEffect(() => {
    ApiCall(`${window.origin}/json${location.pathname}FormData.json`)
      .then((data) => {
        console.log("data->", data);
        setMultiFormData(data);
      })
      .catch((err) => {
        console.log("err-->", err);
      });
  }, [location.pathname]);

  const formData = (data) => {
    console.log("Data=>", data);
  };
  return (
    <>
      <DynamicForm multiFormData={multiFormData} data={formData} />
      <div className="card">
        <div className="card-header">
          below json file to generator current page.
        </div>
        <code
          dangerouslySetInnerHTML={{ __html: JSON.stringify(multiFormData) }}
        ></code>
      </div>
    </>
  );
}

export default AnyPage;
