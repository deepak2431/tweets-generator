import React from "react";

interface IProps {
  value: string;
  placeHolder: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput: React.FC<IProps> = ({
  value,
  placeHolder,
  handleChange,
}) => {
  return (
    <div className="search_input">
      <input
        type="text"
        placeholder={placeHolder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
