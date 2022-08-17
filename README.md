# Getting Started with Create React App

library for generating forms dynamically using JSON.

## Demo URL :

More example, please visit a our website
https://configuration-forms.herokuapp.com/

### Import Library

Import a library file :

```js
import DynamicForm from "../component/forms/dynamicForm";
```

### Import Library

Import a library file :

```js
function Example() {
  const formData = (data) => {
    console.log("form return data=>", data);
  };
  return <DynamicForm multiFormData={multiFormData} data={formData} />;
}
```

### Import Library

pass multiFormData form data as you required :
More example, please follow this json file : https://github.com/paghdjob/configurationForm/tree/main/public/json

```js
[
  {
    formName: "signupform",
    action: "#",
    method: "GET",
    classNames: "row g-3 was-validated",
    title: "Sign Up Details",
    subtitile: "It's quick and easy.",
    text: "Sign up Details",
    fields: [
      {
        field: "InputBox",
        data: {
          label: "First Name",
          type: "text",
          fieldname: "firstname",
          parentClass: "col-md-6",
          classNames: "form-control",
          id: "",
          placeholder: "please enter your firstname",
          defaultValue: "",
          min: 4,
          max: 30,
          minLength: 4,
          maxLength: 30,
          readonly: false,
          required: true,
          title: "firstname",
        },
      },
      {
        field: "InputBox",
        data: {
          label: "Surname",
          type: "text",
          fieldname: "surname",
          parentClass: "col-md-6",
          classNames: "form-control",
          id: "",
          placeholder: "please enter your surname",
          defaultValue: "",
          min: 4,
          max: 30,
          minLength: 4,
          maxLength: 30,
          readonly: false,
          required: true,
          title: "surname",
        },
      },
      {
        field: "InputBox",
        data: {
          label: "Email Id",
          type: "text",
          fieldname: "emailid",
          parentClass: "col-md-12",
          classNames: "form-control",
          id: "",
          placeholder: "please enter your email id",
          defaultValue: "",
          min: 4,
          max: 30,
          minLength: 4,
          maxLength: 30,
          readonly: false,
          required: true,
          title: "emailid",
        },
      },
      {
        field: "InputBox",
        data: {
          label: "New Password",
          type: "password",
          fieldname: "newpassword",
          parentClass: "col-md-12",
          classNames: "form-control",
          id: "",
          placeholder: "please enter your password",
          defaultValue: "",
          min: 4,
          max: 30,
          minLength: 4,
          maxLength: 30,
          readonly: false,
          required: true,
          title: "password",
        },
      },
      {
        field: "DateBox",
        data: {
          label: "Date of birth",
          type: "date",
          fieldname: "dateofbirth",
          parentClass: "col-md-12",
          classNames: "form-control",
          id: "",
          placeholder: "select your birth date",
          defaultValue: "",
          min: "1900-01-01",
          max: "2022-07-22",
          minLength: 4,
          maxLength: 30,
          readonly: false,
          required: true,
          title: "birthdate",
        },
      },
      {
        field: "ButtonBox",
        data: {
          type: "button",
          fieldname: "buttonSave",
          parentClass: "col-md-2 row m-2",
          classNames: "btn btn-primary",
          id: "",
          defaultValue: "Sign Up",
          readonly: false,
        },
      },
    ],
  },
];
```

### Field spectific on compoment design

Example => field: "InputBox",

```js
"InputBox" type support => text, password, hidden, email, number, tel, range, search, color, url,
"ButtonBox" type support => button, reset, submit,
"CheckBox" type support => checkbox, radio,
"DateBox" type support =>  date, datetime-local, month, time, week
"Filebox" type support  => file, image, any
"TextareaBox" type support => textareaBox
```

### Incase you face any problem or need help, please contact on paghdjob@gmail.com

npm i

npm run start

npx prettier --write .
