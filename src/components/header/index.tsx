import React, {useState} from 'react';
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import {useAppSelector} from "../../hooks/redux";
import ButtonMenuMobile from "./ButtonMenuMobile";
import DesktopNav from "./DesktopNav";

function Navigation() {

  const [isVisibleFullMenu , setIsVisibleFullMenu] = useState(false)
  const { breakPoint } = useAppSelector(state => state.breakpointReducer)
  const { accessToken } =useAppSelector(state => state.tokensSlice)
  function closeMenu() {
    setIsVisibleFullMenu(false)
  }
  function toggleMobileMenu(): void {
    setIsVisibleFullMenu(prev => !prev)
  }

  return (
    <nav className="fixed top-0 h-[65px] flex w-full flex-row px-4 py-2 bg-[#191A1D]">
      <div className="flex w-full flex-row justify-between">
        <Logo/>

        {
          breakPoint === 'l'
          &&
          <DesktopNav/>
        }
        {isVisibleFullMenu && breakPoint !== 'l' && <MobileMenu closeMenu={closeMenu}/>}
        {
          breakPoint !== 'l'
          &&
          <ButtonMenuMobile onClick={toggleMobileMenu} />
        }
      </div>
    </nav>
  );
}

export default Navigation;