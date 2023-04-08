import React, {useRef, useState} from 'react';
import {SORTED_VALUE} from "../../constants/constants";
import useClickOutside from "../../hooks/useClickOutside";
import {useAppSelector} from "../../hooks/redux";

interface Props {
  isMobile?: boolean
}

const SortedBy: React.FC<Props> = ({isMobile}) => {
  const [isOpenCategory, setIsOpenCategory] = useState<boolean>(false);
  const [selectedVariants, setSelectedVariants] = useState<string>('');
  const categoryRef = useRef<HTMLDivElement>(null);

  useClickOutside(categoryRef, () => {
    setIsOpenCategory(false);
  });

  const handlerCategory = (): void => {
    setIsOpenCategory(prev => !prev);
  };

  const changeSortedBy = (value: string): void => {
    setSelectedVariants(value);
    setIsOpenCategory(false);
  };

  const clearCategory = (): void => {
    setSelectedVariants('');
  };
  const classesWidth = isMobile ? 'w-full ' : 'w-[200px]'
  const classesWidthBlock = isMobile ? 'w-full' : ''

  return (
    <div className={"flex z-1 " + classesWidthBlock}>
      <div
        className={"flex w-[200px] justify-between cursor-pointer border-b p-1 " + classesWidth}
        onClick={handlerCategory}
      >
        <div className="max-h-[35px] overflow-hidden whitespace-nowrap text-ellipsis">
          {selectedVariants ? selectedVariants : 'Сортировка по'}
        </div>
        {(isOpenCategory || selectedVariants )&& (
          <div className="absolute z-[-1] transform -translate-y-6 bg-[#191a1d] text-[12px] text-[#5458f7]">
            Сортировка по
          </div>
        )}
        <div>▼</div>
      </div>
      {isOpenCategory && (
        <div
          ref={categoryRef}
          className="absolute max-h-[250px] bg-[#191a1d] shadow-lg animate-fade-in-down z-10"
        >
          <ul>
            {SORTED_VALUE.map((listEl) => {
              return (
                <li
                  key={listEl}
                  onClick={() => changeSortedBy(listEl)}
                  className="flex w-[200px] h-[50px] px-4 hover:bg-[#2f3033] cursor-pointer"
                >
                  <div className="ml-2 flex justify-center items-center">{listEl}</div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {selectedVariants.length > 0 && !isMobile &&(
        <button
          onClick={clearCategory}
          className="ml-3 w-[30px] h-[30px] flex justify-center items-center border-[2px] accent-red-600 rounded-full"
        >
          X
        </button>
      )}
    </div>
  );
};

export default SortedBy;