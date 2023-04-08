import React, { useRef, useState} from 'react';
import useClickOutside from "../../hooks/useClickOutside";
import {TYPES} from "../../constants/constants";
import {useAppSelector} from "../../hooks/redux";




interface Props {
  variants: string[],
  type: 'category' | 'year' | 'country',
  isMobile?: boolean
}

const Filter: React.FC<Props> = ({ variants, type , isMobile}) => {
  const [isOpenCategory, setIsOpenCategory] = useState<boolean>(false);
  const [selectedVariants, setSelectedVariants] = useState<string[]>([]);
  const categoryRef = useRef<HTMLDivElement>(null);


  useClickOutside(categoryRef, () => {
    setIsOpenCategory(false);
  });

  const handlerCategory = (): void => {
    setIsOpenCategory((prev) => !prev);
  };

  const toggleCategory = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.checked) {
      setSelectedVariants((prev) => [...prev, e.target.value]);
    } else {
      setSelectedVariants((prev) =>
        prev.filter((category) => category !== e.target.value)
      );
    }
  };

  const clearCategory = (): void => {
    setSelectedVariants([]);
  };
  const classesWidth = isMobile ? 'w-full ' : 'w-[200px]'
  const classesWidthBlock = isMobile ? 'w-full' : ''

  return (
    <div className={`flex z-1 ${classesWidthBlock}`}>
      <div
        className={"flex justify-between cursor-pointer border-b p-1 " + classesWidth}
        onClick={handlerCategory}
      >
        <div className="max-h-[35px] overflow-hidden whitespace-nowrap text-ellipsis">
          {selectedVariants.length > 0
            ? selectedVariants.join(', ')
            : TYPES[type]}
        </div>
        {(isOpenCategory || selectedVariants.length > 0) && (
          <div className="absolute z-[-1] transform -translate-y-5 bg-[#191a1d] text-[12px] text-[#5458f7]">
            {TYPES[type]}
          </div>
        )}
        <div>▼</div>
      </div>
      {isOpenCategory && (
        <div
          ref={categoryRef}
          className="absolute z-10 max-h-[250px] overflow-y-scroll bg-[#191a1d] shadow-lg animate-fade-in-down"
        >
          <ul>
            {variants.map((listEl) => {
              return (
                <li
                  key={listEl}
                  className="flex w-[190px] h-[50px] hover:bg-[#2f3033] transition-colors duration-200 ease-in-out"
                >
                  <input
                    id={listEl}
                    type="checkbox"
                    checked={selectedVariants.includes(listEl)}
                    value={listEl}
                    onChange={toggleCategory}
                    className="mx-2 "
                  />
                  <label className="h-full w-full pl-2 cursor-pointer flex items-center justify-items-start" htmlFor={listEl}>
                    {listEl}
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {selectedVariants.length > 0 && !isMobile && (
        <button
          onClick={clearCategory}
          className={`ml-3 w-[30px] h-[30px] flex justify-center items-center border-[2px] accent-red-600 rounded-full cursor-pointer transition-colors duration-200 ease-in-out hover:bg-accent-red-600 hover:text-white`}
        >
          X
        </button>
      )}
    </div>
  );
};

export default Filter;