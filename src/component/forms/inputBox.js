/* "InputBox" type support => text, password, hidden, email, number, tel, */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementByAmounts } from "../../store/multiFormStore";

const InputBox = (props) => {
  const multiForms = useSelector(
    (state) => state.multiForm.multiForm[props.formName]
  );
  const dispatch = useDispatch();

  let {
    label,
    type,
    fieldname,
    parentClass,
    classNames,
    id,
    placeholder,
    defaultValue,
    min,
    max,
    minLength,
    maxLength,
    //    pattern,
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
    <div key={fieldname} className={parentClass}>
      <label className="form-label">{label}</label>
      <input
        className={classNames}
        type={type}
        id={id}
        name={fieldname}
        placeholder={placeholder}
        //  ref={myRef}
        min={min}
        max={max}
        minLength={minLength}
        maxLength={maxLength}
        //  pattern={pattern}
        onChange={handle}
        required={required}
        disabled={readonly}
        value={defaultValue}
      />
      <div className="valid-feedback form-text text-muted">Looks good!</div>
    </div>
  );
};

export { InputBox };
