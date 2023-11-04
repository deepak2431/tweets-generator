import React from "react";

interface IProps {
  buttonText: string;
  handleClick: () => void;
  disableStatus?: boolean;
}

const SubmitButton: React.FC<IProps> = ({
  buttonText,
  handleClick,
  disableStatus,
}) => {
  return (
    <div className="button">
      <button
        className="submit_btn"
        onClick={handleClick}
        disabled={disableStatus}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default SubmitButton;
