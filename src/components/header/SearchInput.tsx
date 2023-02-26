import React, {DetailedHTMLProps, FC} from 'react';

type InputProps = DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const SearchInput : FC<InputProps> = ({ ...props}) => {
  return (
    <>
      <div {...props} >
        <div className="border-b-[2px]">
          <input className="bg-inherit outline-0 w-full pb-[7px]" type="text" placeholder="Введите название фильма..."/>
        </div>
      </div>
    </>
  );
}

export default SearchInput;