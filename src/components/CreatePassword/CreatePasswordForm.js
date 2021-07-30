import React from "react";
import AppForm from "../app-form/AppForm";
import "../Signup/Signup.css";
import { Field } from "formik";

export default function CreatePasswordForm({
  initialValues,
  handleSubmit,
  response,
}) {
  return (
    <div>
      <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
        <FormFields response={response} />
      </AppForm>
    </div>
  );
}

function FormFields({ response }) {
  return (
    <section className="signup_section">
      <div className="signup_container">
        <div className="signup_form">
          <h3>Create Password</h3>
          <div className="signup_fields">
            <div className="input_field">
              <label>Email address</label>
              <Field name="email" type="email" placeholder="" />
            </div>
            <div className="input_field">
              <label>Password</label>
              <Field name="password" type="password" placeholder="" />
            </div>

            <div className="submit_btn">
              <button type="submit">Create Password</button>
            </div>
            <p style={{ color: "red" }}>{response}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
