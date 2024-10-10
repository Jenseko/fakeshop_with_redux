import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

import { AppDispatch, RootState } from "./store.ts";

type DispatchFunction = () => AppDispatch;

// Custom dispatch hook
export const useCartDispatch: DispatchFunction = useDispatch;

// Custom selector hook
export const useCartSelector: TypedUseSelectorHook<RootState> = useSelector; 
