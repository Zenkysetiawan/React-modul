function FormField({
  label,
  name,
  value,
  onChange,
  error,
  type = "text",
  placeholder,
}) {
  const errorId = `${name}-error`;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <br />
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? errorId : undefined}
      />
      {error && (
        <p id={errorId} role="alert" style={{ color: "red" }}>
          {error}
        </p>
      )}
    </div>
  );
}

export default FormField;
