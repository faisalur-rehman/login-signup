import React, { useState } from "react";
import { addAffiliate } from "../../apis/api";
import "../Signup/Signup.css";

const AddAffiliate = () => {
  const [name, setName] = useState("");
  const [response, setResponse] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data } = await addAffiliate({ name });
      console.log("affiliate", data);
      setResponse(data.message);
    } catch (error) {
      console.log(error.response);
      setResponse("");
    }
  }
  return (
    <div>
      <section className="signup_section">
        <div className="signup_container">
          <form onSubmit={handleSubmit}>
            <div className="signup_form">
              <h3>Add Affiliate</h3>
              <div className="signup_fields">
                <div className="input_field">
                  <label>Enter name</label>
                  <input
                    placeholder=""
                    value={name}
                    onChange={({ target }) => setName(target.value)}
                  />
                </div>

                <div className="submit_btn">
                  <button type="submit">Add New Affiliate</button>
                </div>
                <p style={{ color: "green" }}>{response}</p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddAffiliate;
