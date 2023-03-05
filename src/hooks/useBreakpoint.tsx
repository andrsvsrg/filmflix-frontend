import { useRef } from 'react';
import useResizeObserver from "@react-hook/resize-observer";
import {BreakpointSlice} from "../store/reducers/BreakpointSlice";
import {useAppDispatch, useAppSelector} from "./redux";
import {breakPoints} from '../constants/constants'

function UseBreakpoint() {
  const { changeBreakPoint } = BreakpointSlice.actions
  const dispatch = useAppDispatch()
  const { breakPoint } = useAppSelector(state => state.breakpointReducer)
  const ref = useRef<HTMLDivElement>(null)

  useResizeObserver(ref, (entry) => {
    const width = entry.contentRect.width;
    if (width <= breakPoints['xxs']) {
      if (breakPoint !== 'xxs') {
        dispatch(changeBreakPoint('xxs'))
      }
    } else if (width <= breakPoints['xs']) {
      if (breakPoint !== 'xs') {
        dispatch(changeBreakPoint('xs'))
      }
    } else if (width <= breakPoints['s']) {
      if (breakPoint !== 's') {
        dispatch(changeBreakPoint('s'))
      }
    } else if (width <= breakPoints['m']) {
      if (breakPoint !== 'm') {
        dispatch(changeBreakPoint('m'))
      }
    } else {
      if (breakPoint !== 'l') {
        dispatch(changeBreakPoint('l'))
      }
    }
  });

  return { ref };
}

export default UseBreakpoint;