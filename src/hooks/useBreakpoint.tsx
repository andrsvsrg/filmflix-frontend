import React, { useRef } from 'react';
import useResizeObserver from "@react-hook/resize-observer";
import {BreakpointSlice} from "../store/reducers/BreakpointSlice";
import {useAppDispatch, useAppSelector} from "./redux";

function UseBreakpoint() {
  const { changeBreakPoint } = BreakpointSlice.actions
  const dispatch = useAppDispatch()
  const { breakPoint } = useAppSelector(state => state.breakpointReducer)
  const ref = useRef<HTMLDivElement>(null)

  useResizeObserver(ref, (entry) => {
    const width = entry.contentRect.width;
    if (width <= 990) {
      if (breakPoint !== 'xs') {
        dispatch(changeBreakPoint('xs'))
      }
    } else if (width <= 1280) {
      if (breakPoint !== 'sm') {
        dispatch(changeBreakPoint('sm'))
      }
    } else {
      if (breakPoint !== 'lg') {
        dispatch(changeBreakPoint('lg'))
      }
    }
  });

  return { ref };
}

export default UseBreakpoint;