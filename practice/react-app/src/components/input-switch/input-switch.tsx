import './input-switch.css';

type InputSwitchProps = {
  label: string;
  isChecked: boolean;
  id: string;
  hasError?: boolean;
  handleChange: (param: boolean) => void;
  errorMessage: string;
  ariaErrorId: string;
};

export const InputSwitch = ({
  label,
  isChecked,
  id,
  hasError,
  handleChange,
  errorMessage,
  ariaErrorId,
}: InputSwitchProps) => {
  return (
    <div className="switch">
      <label htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          role="switch"
          data-on="ON"
          checked={isChecked}
          data-off="OFF"
          onChange={() => handleChange(!isChecked)}
          aria-checked={isChecked}
          aria-labelledby={`label-${id}`}
        />
        <span id={`label-${id}`}>{label}</span>
      </label>
      {ariaErrorId && (
        <p id={ariaErrorId} aria-live="polite">
          {hasError && errorMessage}
        </p>
      )}
    </div>
  );
};
