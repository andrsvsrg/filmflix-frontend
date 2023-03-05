import {IBreakPoint} from "../store/reducers/BreakpointSlice";

export function getClassesLeftColm(breakPoint : IBreakPoint['breakPoint']): string{    // homePage
  let classes = ''
  switch (breakPoint) {
    case "l":
      classes = 'w-[75%]'
      break;
    case "m":
      classes = 'w-1/2'
      break;
    default:
      classes = 'w-full'
  }

  return classes
}

export function getClassesRightColm(breakPoint : IBreakPoint['breakPoint']): string{   // homePage
  let classes = ''
  switch (breakPoint) {
    case "l":
      classes = 'w-[25%]'
      break;
    case "m":
      classes = 'w-1/2'
      break;
    default:
      classes = 'w-full'
  }

  return classes
}