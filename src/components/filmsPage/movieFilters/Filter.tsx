import React, { useRef, useState} from 'react';
import useClickOutside from "../../../hooks/useClickOutside";
import {TYPES} from "../../../constants/constants";




interface Props {
  variants: string[],
  type: 'category' | 'year' | 'country',

}


const Filter = ({variants, type}: Props) => {

  const [isOpenCategory, setIsOpenCategory] = useState<boolean>(false)
  const [selectedVariants, setSelectedVariants] = useState<string[]>([]);
  const categoryRef = useRef<HTMLDivElement>(null);

  useClickOutside(categoryRef, () => {
    setIsOpenCategory(false);
  });

  const handlerCategory = (): void => {
    setIsOpenCategory(prev => !prev)
  }

  const toggleCategory = (e: React.ChangeEvent<HTMLInputElement>) : void => {
    if(e.target.checked) {
      setSelectedVariants(prev => [...prev, e.target.value])
    } else {
      setSelectedVariants(prev => prev.filter((cat) => cat !== e.target.value))
    }
  }

  const clearCategory =(): void => {
    setSelectedVariants([])
  }

  console.log(selectedVariants)

  return (
    <div className="flex relative" >
      <div className="flex w-[200px] justify-between cursor-pointer border-b p-1" onClick={handlerCategory}>
        <div className=" max-h-[35px] overflow-hidden whitespace-nowrap text-ellipsis">{selectedVariants.length > 0 ?selectedVariants.join(', ') : TYPES[type]}</div>
        {isOpenCategory && <div className="absolute top-[-20px] left-0 z-10 bg-[#191a1d] text-[12px] text-[#5458f7] p-2">{TYPES[type]}</div>}
        <div>▼</div>
      </div>
      {
        isOpenCategory
        &&
        <div ref={categoryRef} className="absolute max-h-[250px] overflow-y-scroll bg-[#191a1d] shadow-lg py-2 animate-fade-in-down">
          <ul>
            {variants.map((listEl) => {
              return (
                <li key={listEl} className="flex w-[180px] py-5">
                  <input id={listEl} type="checkbox" checked={selectedVariants.includes(listEl)} value={listEl} onChange={toggleCategory}/>
                  <label className="ml-2" htmlFor={listEl}>{listEl}</label>
                </li>)
            })}

          </ul>
        </div>
      }
      {
        selectedVariants.length > 0
        &&
        <button onClick={clearCategory} className="ml-3 w-[30px] h-[30px]  flex justify-center items-center border-[2px] accent-red-600 rounded-full">X</button>
      }
    </div>
  );
};

export default Filter;