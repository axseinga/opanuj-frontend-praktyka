import "./form.css";

import React from "react";
import { InputText } from "../../components/input-text/input-text";
import { InputSwitch } from "../../components/input-switch/input-switch";

export const Form = () => {
  const [inputNameValue, setInputNameValue] = React.useState("");
  const [inputSurnameValue, setInputSurnameValue] = React.useState("");
  const [inputEmailValue, setInputEmailValue] = React.useState("");
  const [consentValue, setConsentValue] = React.useState(false);
  const [errors, setErrors] = React.useState<{
    inputNameError: boolean;
    inputSurnameError: boolean;
    consentError: boolean;
  }>({
    inputNameError: false,
    inputSurnameError: false,
    consentError: false,
  });

  const validateAgainstSpecialChar = (value: string) => {
    const regex = /^[a-zA-Z0-9 ]*$/;
    return regex.test(value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const nameIsValid = validateAgainstSpecialChar(inputNameValue);
    const surnameIsValid = validateAgainstSpecialChar(inputSurnameValue);

    const error = {
      inputNameError: !nameIsValid,
      inputSurnameError: !surnameIsValid,
      consentError: !consentValue,
    };

    setErrors(error);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      aria-labelledby="personal-details"
      className="form"
    >
      <h1 id="personal-details">Personal Details</h1>
      <InputText
        label="Name"
        value={inputNameValue}
        type="text"
        placeholder="Your name"
        id="name-input"
        handleChange={setInputNameValue}
        hasError={errors.inputNameError}
        errorMessage="Name field cannot have special characters"
        ariaErrorId="input-name-validaton"
        isRequired
        minLength={1}
      />
      <InputText
        label="Surname"
        value={inputSurnameValue}
        type="text"
        placeholder="Your Surname"
        id="surname-input"
        handleChange={setInputSurnameValue}
        hasError={errors.inputSurnameError}
        errorMessage="Surname field cannot have special characters"
        ariaErrorId="input-surname-validaton"
        isRequired
        minLength={1}
      />
      <InputText
        label="Email"
        value={inputEmailValue}
        type="email"
        placeholder="Your Email"
        id="email-input"
        handleChange={setInputEmailValue}
        isRequired
        minLength={1}
      />
      <InputSwitch
        label="I give consent for the processing of personal data."
        isChecked={consentValue}
        id="input-switch"
        handleChange={setConsentValue}
        hasError={errors.consentError}
        ariaErrorId="consent-input-validation"
        errorMessage="You must give consent to continue"
      />
      <button type="submit">Continue</button>
    </form>
  );
};
