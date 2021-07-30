import React from "react";
import AppForm from "../app-form/AppForm";
import "./Signup.css";
import { Field } from "formik";

export default function SignupForm({
  allAffiliate,
  initialValues,
  handleSubmit,
  response,
}) {
  return (
    <div>
      <AppForm initialValues={initialValues} handleSubmit={handleSubmit}>
        <FormFields allAffiliate={allAffiliate} response={response} />
      </AppForm>
    </div>
  );
}

function FormFields({ allAffiliate, response }) {
  return (
    <section className="signup_section">
      <div className="signup_container">
        <div className="signup_form">
          <h3>Sign up</h3>
          <div className="signup_fields">
            <div className="input_field">
              <label>Email address</label>
              <Field name="email" type="email" placeholder="" />
            </div>
            <div className="input_field">
              <label>Name</label>
              <Field name="name" placeholder="" />
            </div>
            <div className="input_field">
              <label>UserId</label>
              <Field as="select" name="userType">
                <option value="">Select UserId</option>
                <option value="user">User</option>
                <option value="corporate">Corporate</option>
              </Field>
            </div>
            <div className="input_field">
              <label>Affiliate</label>
              <Field as="select" name="affiliateId">
                <option value="">Select Affiliate</option>
                {allAffiliate.map((aff) => (
                  <option value={aff._id}>{aff.name}</option>
                ))}
              </Field>
            </div>
            <div className="submit_btn">
              <button type="submit">Sign Up</button>
            </div>
            <p style={{ color: "red" }}>{response}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
