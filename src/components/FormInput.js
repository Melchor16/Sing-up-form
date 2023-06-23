import errorIcon from "./../icon-error.svg";

export default function FormInput({
  type,
  placeholder,
  userValue,
  errorMessage,
  errorState,
  setValue,
}) {
  return (
    <div className="input-div">
      <input
        className={errorState ? "error-input-border" : ""}
        type={type}
        placeholder={placeholder}
        value={userValue}
        onChange={(e) => setValue(e.target.value)}
      />

      {errorState && <img src={errorIcon} alt="error" />}

      <p className="error-message">{errorState && `${errorMessage}`}</p>
    </div>
  );
}
