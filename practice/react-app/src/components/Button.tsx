type ButtonProps = {
  children: React.ReactNode;
  handleClick: () => void;
  disabled: boolean;
};

export const Button = ({ children, handleClick, disabled }: ButtonProps) => {
  return (
    <button
      className={
        disabled
          ? `bg-gray-300 cursor-not-allowed opacity-50 rounded-md px-2 py-4 text-lg`
          : `bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md`
      }
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
