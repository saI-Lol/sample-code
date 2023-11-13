const TextCancelButton = ({ text, cancelFunction }) => {
  return (
    <div className="bg-light px-2 mb-1 me-1 rounded-4">
      <span className="fw-light">{text}</span>
      <button
        className="btn p-0"
        onClick={() => {
          cancelFunction(text);
        }}
      >
        <i className="bi bi-x"></i>
      </button>
    </div>
  );
};

export default TextCancelButton;
