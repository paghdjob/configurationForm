/* "ButtonBox" type support => button, reset, submit */

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmounts } from "../../store/multiFormStore";

const ButtonBox = (props) => {
  const multiForms = useSelector(
    (state) => state.multiForm.multiForm[props.formName]
  );
  // console.log("---multiForms--->", multiForms);
  const dispatch = useDispatch();
  const {
    type,
    fieldname,
    parentClass,
    classNames,
    id,
    defaultValue,
    readonly,
  } = props.info;
  if (multiForms && multiForms[fieldname]) {
    // defaultValue = multiForms[fieldname];
    console.log("---button defaultValue--->", multiForms[fieldname]);
  }
  const handle = (e) => {
    console.log("---button Value--->", fieldname, e.target.value);
    e.preventDefault()
    dispatch(
      incrementByAmounts({
        formName: props.formName,
        field: fieldname,
        value: e.target.value,
      })
    );
    
  };

  return (
    <div className={parentClass}>
      <input
        type={type}
        className={classNames}
        id={id}
        name={fieldname}
        value={defaultValue}
        disabled={readonly}
        onClick={handle}
      />
    </div>
  );
};

export { ButtonBox };
