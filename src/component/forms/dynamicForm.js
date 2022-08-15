import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  InputBox,
  ButtonBox,
  CheckBox,
  TextareaBox,
  DateBox,
  FileBox,
  SelectBox,
  ElementBox
} from "./index";

const DynamicForm = (props) => {
  // const getName =
  //   props &&
  //   props.multiFormData &&
  //   props.multiFormData &&
  //   props.multiFormData[0] &&
  //   props.multiFormData[0].formName;
  const multiForms = useSelector((state) => state.multiForm.multiForm); // .multiForm[props.formName]
  // let a = props.multiFormData[0];
  // if(a && a.formName) {
  //console.log("---multiForms--->", multiForms);
  // }
  // console.log("getName-->", getName);
  const components = {
    InputBox: InputBox,
    ButtonBox: ButtonBox,
    CheckBox: CheckBox,
    TextareaBox: TextareaBox,
    DateBox: DateBox,
    FileBox: FileBox,
    SelectBox: SelectBox,
    ElementBox: ElementBox
  };
  useEffect(() => {
    props.data(multiForms);
  }, [multiForms]);

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
                action={item.action}
                method={item.method}
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
