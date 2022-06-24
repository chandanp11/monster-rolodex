import { ChangeEvent, ChangeEventHandler } from "react";

import "./search-box.style.css";

type searchBoxProps = {
  className: string;
  placeholder: string;
  // onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBox = ({ className, placeholder, onChangeHandler }: searchBoxProps) => {
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};
