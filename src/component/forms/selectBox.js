/* "SelectBox" type support => SelectBox */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmounts } from "../../store/multiFormStore";
import ApiCall from "./api";

const SelectBox = (props) => {
  const multiForms = useSelector(
    (state) => state.multiForm.multiForm[props.formName]
  );
  const dispatch = useDispatch();

//  console.log("multiForms-->", multiForms);
  let {
    type,
    fieldname,
    parentClass,
    classNames,
    id,
    readonly,
    list,
    defaultValue,
    label,
    api,
    apiProperties,
  } = props.info;
 // console.log("multiselect props.info", props.info);

  if (api) {
    useEffect(() => {
      // console.log("apiProperties-->", apiProperties.URL);
      ApiCall(apiProperties.URL).then((res) => {
        list = res;
        console.log("----res-->", list);
      });
    }, []);
  }

  if (multiForms && multiForms[fieldname]) {
    defaultValue = multiForms[fieldname];
  }

  const handle = (e) => {
    if (type === "multiselect") {
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

  return (
    <>
      <div className="form-check form-check-inline">
        <div className={parentClass}>
          <label className="form-check-label">{label}</label>
          <select
            className={classNames}
            id={id}
            name={fieldname}
            onChange={handle}
            disabled={readonly}
            defaultValue={defaultValue}
          >
            {list.map((data, index) => {
              return (
                <option
                  key={index}
                  value={data.key}
                  // selected={data.key === defaultValue ? true : false}
                >
                  {data.val}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export { SelectBox };
