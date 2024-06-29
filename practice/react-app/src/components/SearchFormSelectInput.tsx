type SearchFormSelectInputProps = {
  label: string;
  value: string;
  handleChange: (param: string) => void;
  options: {value: string, label: string}[];
};

export const SearchFormSelectInput = ({
  label,
  value,
  handleChange,
  options,
}: SearchFormSelectInputProps) => {
  return (
    <label className="flex flex-col">
      {label}
      <select
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        className="border h-7 mt-1"
      >
        {options && options.map((option) => <option value={option.value}>{option.label}</option>)}
      </select>
    </label>
  );
};
