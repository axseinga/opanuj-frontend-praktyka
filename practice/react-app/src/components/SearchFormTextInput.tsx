type SearchFormTextInputProps = {
  label: string;
  value: string;
  placeholder: string;
  handleChange: (param: string) => void;
};

export const SearchFormTextInput = ({
  label,
  value,
  placeholder,
  handleChange,
}: SearchFormTextInputProps) => {
  return (
    <label className="flex flex-col">
      {label}
      <input
        className="border h-7 mt-1 indent-2"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </label>
  );
};
