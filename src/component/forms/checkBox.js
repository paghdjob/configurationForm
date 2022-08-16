/* "CheckBox" type support => checkbox, radio button */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmounts } from "../../store/multiFormStore";

const CheckBox = (props) => {
  const multiForms = useSelector(
    (state) => state.multiForm.multiForm[props.formName]
  );
  const dispatch = useDispatch();

  let {
    type,
    fieldname,
    parentClass,
    classNames,
    id,
    readonly,
    list,
    defaultValue,
  } = props.info;
  if (multiForms && multiForms[fieldname]) {
    defaultValue = multiForms[fieldname];
    // console.log('checkbox defaultValue', defaultValue)
  }

  const handle = (e) => {
    if (type === "checkbox") {
      let fruits =
        multiForms && multiForms[fieldname] ? multiForms[fieldname] : [];
      if (e.target.checked) {
        fruits = [...fruits, ...[e.target.value]];
      } else {
        fruits = fruits.filter((d) => d !== e.target.value);
      }

      dispatch(
        incrementByAmounts({
          formName: props.formName,
          field: fieldname,
          value: fruits,
        })
      );
    } else {
      dispatch(
        incrementByAmounts({
          formName: props.formName,
          field: fieldname,
          value: e.target.value,
        })
      );
    }
  };
  const isFlag = (data, type, defaultValue) => {
    //    console.log('--->',data, '-->',type, '-->',defaultValue)
    if (type === "checkbox") {
      return defaultValue.indexOf(data) >= 0 ? true : false;
    } else {
      return data === defaultValue ? true : false;
    }
  };

  return (
    <div className={parentClass}>
      {list.map((data, index) => {
        return (
          <div key={index} className="form-check form-check-inline">
            <input
              className={classNames}
              type={type}
              id={id}
              name={fieldname}
              onChange={handle}
              disabled={readonly}
              value={data}
              checked={isFlag(data, type, defaultValue)}
            />
            <label className="form-check-label">{data}</label>
          </div>
        );
      })}
    </div>
  );
};

export { CheckBox };
