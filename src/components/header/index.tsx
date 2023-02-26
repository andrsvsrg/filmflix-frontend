import React, {useState} from 'react';
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import {useAppSelector} from "../../hooks/redux";
import ButtonMenuMobile from "./ButtonMenuMobile";
import DesktopNav from "./DesktopNav";

function Navigation() {

  const [isVisibleFullMenu , setIsVisibleFullMenu] = useState(false)
  const { breakPoint } = useAppSelector(state => state.breakpointReducer)

  function toggleMobileMenu(): void {
    setIsVisibleFullMenu(prev => !prev)
  }

  return (
    <nav className="fixed top-0 h-[65px] flex w-full flex-row px-4 py-2 bg-[#191A1D]">
      <div className="flex w-full flex-row justify-between">
        <Logo/>
        {
          breakPoint === 'lg'
          &&
          <DesktopNav/>
        }
        {isVisibleFullMenu && breakPoint !== 'lg' && <MobileMenu/>}
        {
          breakPoint !== 'lg'
          &&
          <ButtonMenuMobile onClick={toggleMobileMenu} />
        }
      </div>
    </nav>
  );
}

export default Navigation;