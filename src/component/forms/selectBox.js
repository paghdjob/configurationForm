/* "SelectBox" type support => SelectBox */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmounts } from "../../store/multiFormStore";
import ApiCall from "./api";

const SelectBox = (props) => {
  const [list, setList] = useState(props.info.list);
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
    // list,
    defaultValue,
    label,
    api,
    apiProperties,
  } = props.info;
  // console.log("multiselect props.info", props.info);

  if (api) {
    useEffect(() => {
      // if(multiForms && multiForms.Country) {
      //   apiProperties.param = multiForms.Country
      // console.log("apiProperties-->", apiProperties);
      // }

      const url = `${apiProperties.URL}?param=${apiProperties.param}`;
      ApiCall(url).then((res) => {
        setList(res);
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
      // console.log('single select -->',props.formName, fieldname, e.target.value)
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
    <div className={parentClass}>
      <label className="form-label">{label}</label>
      <select
        className={classNames}
        id={id}
        name={fieldname}
        onChange={handle}
        disabled={readonly}
        defaultValue={defaultValue}
      >
        <option key={0} value="">
          please select
        </option>
        {list &&
          list.map((data, index) => {
            return (
              <option key={index} value={data.key}>
                {data.val}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export { SelectBox };
