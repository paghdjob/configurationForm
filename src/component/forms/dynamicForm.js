import React from "react";
import {
  InputBox,
  ButtonBox,
  CheckBox,
  TextareaBox,
  DateBox,
  FileBox,
} from "./index";

const DynamicForm = (props) => {
  const components = {
    InputBox: InputBox,
    ButtonBox: ButtonBox,
    CheckBox: CheckBox,
    TextareaBox: TextareaBox,
    DateBox: DateBox,
    FileBox: FileBox,
  };

  return (
    <div className="container">
      {props.multiFormData.map((item, index) => {
        return (
          <div key={index} className="card">
            <div className="card-header">
              <h5 className="card-title">{item.title}</h5>
              <p>{item.subtitile}</p>
            </div>
            <div className="card-body">
              <form
                // action={item.action}
                // method={item.method}
                name={item.formName}
                className={item.classNames}
                noValidate
              >
                {item.fields.map((items, index) => {
                  const Component = components[items.field];
                  return (
                    <Component
                      key={index}
                      info={items.data}
                      formName={item.formName}
                    />
                  );
                })}
              </form>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DynamicForm;
