import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createPassword } from "../../apis/api";
import CreatePasswordForm from "./CreatePasswordForm";

const initialValues = {
  email: "",
  password: "",
};

const CreatePassword = () => {
  const history = useHistory();
  const [response, setResponse] = useState("");
  let decimal = /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/;
  async function handleSubmit({ formValues }) {
    console.log("form", formValues);
    if (formValues.password.match(decimal)) {
      try {
        const { data } = await createPassword(formValues);
        console.log("create-password", data);
        history.push("/");
      } catch (error) {
        console.log(error.response);
      }
    } else {
      console.log("false");
      setResponse(
        "The password should have atleast 1 uppercase, 1 number and 1 special character"
      );
    }
  }

  return (
    <div>
      <CreatePasswordForm
        initialValues={initialValues}
        handleSubmit={handleSubmit}
        response={response}
      />
    </div>
  );
};

export default CreatePassword;
