import './input-text.css';

type InputTextProps = {
  label: string;
  value: string;
  type: 'text' | 'email';
  placeholder: string;
  id: string;
  hasError?: boolean;
  handleChange: (param: string) => void;
  errorMessage?: string;
  ariaErrorId?: string;
  isRequired?: boolean;
  minLength?: number;
};

export const InputText = ({
  label,
  value,
  type,
  placeholder,
  id,
  handleChange,
  hasError,
  errorMessage,
  ariaErrorId,
  isRequired,
  minLength = 0,
}: InputTextProps) => {
  return (
    <div className="input-text">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        aria-describedby={ariaErrorId}
        value={value}
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        required={isRequired}
        minLength={minLength}
      />
      {ariaErrorId && (
        <p id={ariaErrorId} aria-live="polite">
          {hasError && errorMessage}
        </p>
      )}
    </div>
  );
};
