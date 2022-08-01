/* "TextareaBox" type support => textareaBox */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmounts } from "../../store/multiFormStore";

const TextareaBox = (props) => {
  const multiForms = useSelector(
    (state) => state.multiForm.multiForm[props.formName]
  );
  const a = useSelector(
    (state) => state.multiForm
  );
  console.log("---a--->", a);
  const dispatch = useDispatch();
  // const myRef = useRef("");

  let {
    label,
    fieldname,
    parentClass,
    classNames,
    id,
    placeholder,
    defaultValue,
    min,
    max,
    rows,
    minLength,
    maxLength,
    Pattern,
    readonly,
    required,
  } = props.info;

  if (multiForms && multiForms[fieldname]) {
    defaultValue = multiForms[fieldname];
    // console.log("---defaultValue--->", defaultValue);
  }

  const handle = (e) => {
    // defaultValue = e.target.value;
    // console.log('---defaultValue--->', defaultValue)
    dispatch(
      incrementByAmounts({
        formName: props.formName,
        field: fieldname,
        value: e.target.value,
      })
    );
  };

  return (
    <>
      <div className={parentClass}>
        <label className="form-label">{label}</label>
        <textarea
          rows={rows}
          className={classNames}
          type="text"
          id={id}
          name={fieldname}
          placeholder={placeholder}
          //  ref={myRef}
          min={min}
          max={max}
          minLength={minLength}
          maxLength={maxLength}
          pattern={Pattern}
          onChange={handle}
          required={required}
          disabled={readonly}
          value={defaultValue}
        ></textarea>
        <div className="valid-feedback form-text text-muted">Looks good!</div>
      </div>
    </>
  );
};

export { TextareaBox };
