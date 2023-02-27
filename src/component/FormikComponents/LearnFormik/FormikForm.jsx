import { Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormikCheckBox from "./FormikCheckBox";
import FormikInput from "./FormikInput";
import FormikRadio from "./FormikRadio";
import FormikSelect from "./FormikSelect";
import FormikTextArea from "./FormikTextArea";

const FormikForm = () => {
  //Each Field has three thing
  //value
  //error
  //touche

  let initialValues = {
    firstName: "",
    lastName: "",
    description: "",
    country: "",
    gender: "",
    isMarried: false,
  };

  let onSubmit = (value, other) => {
    console.log(value);
  };

  // validation will run only if
  //onChange event is fire
  //onBlur(touched) event is fire
  //onSubmit event is fire

  let validationSchema = yup.object({
    firstName: yup.string().required("First Name is Required."),
    lastName: yup.string().required("Last Name is required."),
    description: yup.string().required("Description is required"),
  });

  let genderOption = [
    {
      label: "Male",
      value: "male",
    },
    {
      label: "Female",
      value: "female",
    },
    {
      label: "Other",
      value: "other",
    },
  ];

  let countryOption = [
    {
      label: "Select Country",
      value: "",
      disabled: true,
    },
    {
      label: "Nepal",
      value: "nep",
    },
    {
      label: "India",
      value: "ind",
    },
    {
      label: "China",
      value: "chi",
    },
    {
      label: "Japan",
      value: "jap",
    },
    {
      label: "America",
      value: "ame",
    },
  ];

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik) => {
          //for formik we need
          // name
          // label
          // type
          // onChange
          // required
          return (
            <Form>
              <FormikInput
                name="firstName"
                label="First Name"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("firstName", e.target.value);
                }}
                required={true}
              ></FormikInput>
              <FormikInput
                name="lastName"
                label="Last Name"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("lastName", e.target.value);
                }}
                required={true}
              ></FormikInput>

              <FormikTextArea
                name="description"
                label="Description"
                type="text"
                onChange={(e) => {
                  formik.setFieldValue("description", e.target.value);
                }}
                required={true}
              ></FormikTextArea>

              <FormikSelect
                name="country"
                label="Country"
                onChange={(e) => {
                  formik.setFieldValue("country", e.target.value);
                }}
                required={true}
                options={countryOption}
              ></FormikSelect>

              <FormikRadio
                name="gender"
                label="Gender"
                onChange={(e) => {
                  formik.setFieldValue("gender", e.target.value);
                }}
                required={true}
                options={genderOption}
              ></FormikRadio>
              <FormikCheckBox
                name="isMarried"
                label="Is Married"
                onChange={(e) => {
                  formik.setFieldValue("isMarried", e.target.checked);
                }}
              ></FormikCheckBox>

              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikForm;
