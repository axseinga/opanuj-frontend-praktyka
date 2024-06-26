type InputProps = {
  value: number;
  handleOnchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value, handleOnchange }: InputProps) => {
  return (
    <input
      type="number"
      className="rounded-md shadow-md p-4"
      value={value}
      onChange={handleOnchange}
    />
  );
};
