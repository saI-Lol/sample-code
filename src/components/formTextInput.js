const FormTextInput = ({ labelName, inputPlaceholder, inputType, inputValue, onChange, inputName, inputReadOnly}) => {
  return (
    <div className="mb-3">
      <label className="form-label">{labelName}</label>
      <input
        type={inputType}
        value={inputValue}
        name={inputName}
        className="form-control"
        placeholder={inputPlaceholder ? inputPlaceholder : undefined}
        onChange={onChange}
        readOnly={inputReadOnly}
      />
      <div className="form-text"></div>
    </div>
  );
};

export default FormTextInput;
